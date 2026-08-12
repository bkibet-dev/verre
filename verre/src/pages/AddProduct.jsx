import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../components/useProduct';

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
    if (!form.collection) errors.collection = 'Select a collection';
    if (!form.price || Number.isNaN(Number(form.price)) || Number(form.price) < 0) 
        errors.price = 'Enter a price';
    if (!form.frameType) errors.frameType = 'Select a frame type';
    if (!form.shape) errors.shape = 'Select a shape';
    if (!form.size.trim()) errors.size = 'Enter a size';
    if (!form.color.trim()) errors.color = 'Enter a color';
    return errors;
}

export default function AddProduct() {
    const [form, setForm] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState(false);
    const { addProduct } = useProducts();
    const navigate = useNavigate();

    const update = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nextErrors = validate(form);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0)
            return;

        const product = {
            id: Date.now(),
            name: form.name.trim(),
            collection: form.collection,
            price: Number(form.price),
            frameType: form.frameType,
            shape: form.shape,
            size: form.size,
            color: form.color.trim(),
        };

        addProduct(product);
        setShowToast(true);
        setTimeout(() => navigate(`/products/${product.id}`), 1000);
    };

    return (
        <form onSubmit={handleSubmit}>
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
                {errors.collection && <span className="error">{errors.collection}</span>}
            </div>
            <div className="form-field">
                <label htmlFor="price">Price</label>
                {errors.price && <span className="error">{errors.price}</span>}
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
                {errors.frameType && <span className="error">{errors.frameType}</span>}
            </div>
            <div className="form-field">
                <label htmlFor="shape">Shape</label>
                <select id="shape" value={form.shape} onChange={update('shape')}>
                    {shapes.map((shape) => (
                        <option key={shape}>{shape}</option>
                    ))}
                </select>
                {errors.shape && <span className="error">{errors.shape}</span>}
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
            </div>
            {showToast && (<div className="success-toast">Product added successfully!</div>)}
        </form>
    );
}