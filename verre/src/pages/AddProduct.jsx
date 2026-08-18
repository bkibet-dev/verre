import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import '../components/AddProduct.css';
import Navbar from '../components/Navbar';

const collections = ['Classic', 'Modern Minimalist', 'Retro & Vintage', 'Sports Active'];
const frameTypes = ['Full-Rim', 'Half-Rim', 'Rimless'];
const shapes = ['Rectangle', 'Round', 'Square'];

const emptyForm = {
    name: '',
    collection: 'Classic',
    price: '',
    frameType: 'Full-Rim',
    shape: 'Rectangle',
    size: '',
    color: ''
};

function validate(form) {
    const errors = {};
    if (!form.name.trim()) errors.name = 'Give the piece a name';
    if (!form.price || Number.isNaN(Number(form.price)) || Number(form.price) < 0) 
        errors.price = 'Enter a price';
    if (!form.size.trim()) errors.size = 'Enter a size';
    if (!form.color.trim()) errors.color = 'Enter a color';
    return errors;
}

export default function AddProduct() {
    const [form, setForm] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { addProduct } = useProducts();
    const navigate = useNavigate();

    const update = (field) => (e) =>
        setForm({...form, [field]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const nextErrors = validate(form);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) {
            setToast('Please fix the errors in the form.');
            setTimeout(() => setToast(''), 2500);
            return;
        }
        try {
            setIsSubmitting(true);
            addProduct({
                id: Date.now(),
                ...form,
                name: form.name.trim(),
                price: Number(form.price),
                size: form.size.trim(),
                color: form.color.trim()
            });
            setToast('Product added successfully!');
            setTimeout(() => navigate('/products'), 1000);
        } catch (error) {
            console.error(error);
            setToast('Something went wrong. Please try again.');
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        setForm(emptyForm);
        setErrors({});
        setToast('');
        navigate('/addproduct')
    }

    return (
        <>
        <Navbar />
        {toast && <div className='toast'>{toast}</div>}
        <div className="add-product-page">
            <div className="page-heading">
                <h1>Add a product</h1>
                <p>Fill out the form below to add a new product to the catalog.</p>
            </div>
            <form className="product-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Name" value={form.name} onChange={update('name')} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-field">
                    <label htmlFor="collection">Collection</label>
                    <select id="collection" value={form.collection} onChange={update('collection')}>
                        {collections.map((collection) => (
                            <option key={collection} value={collection}>{collection}</option>
                        ))}
                    </select>
                </div>
                <div className="form-field">
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" placeholder="Price" value={form.price} onChange={update('price')} />
                    {errors.price && <span className="error">{errors.price}</span>}
                </div>
                <div className="form-field">
                    <label htmlFor="frameType">Frame Type</label>
                    <select id="frameType" value={form.frameType} onChange={update('frameType')}>
                    {frameTypes.map((frameType) => (
                        <option key={frameType}>{frameType}</option>
                    ))}
                    </select>
                </div>
                <div className="form-field">
                    <label htmlFor="shape">Shape</label>
                    <select id="shape" value={form.shape} onChange={update('shape')}>
                        {shapes.map((shape) => (
                            <option key={shape}>{shape}</option>
                        ))}
                    </select>
                </div>
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="size">Size</label>
                        <input id="size" type="text" placeholder="Size" value={form.size} onChange={update('size')} />
                            {errors.size && <span className="error">{errors.size}</span>}
                    </div>
                    <div className="form-field">
                        <label htmlFor="color">Color</label>
                        <input id="color" type="text" placeholder="Color" value={form.color} onChange={update('color')} />
                            {errors.color && <span className="error">{errors.color}</span>}
                    </div>
                </div>
                <div className="form-actions">
                    <button type="submit" className="primary-button">Add Product</button>
                    <button type="button" className="secondary-button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
        </>
    );
}