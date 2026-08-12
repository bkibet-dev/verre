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
                <input type="text" placeholder="Name" value={form.name} onChange={update('name')} />
                <select value={form.collection} onChange={update('collection')}>
                    {collections.map((collection) => (
                        <option key={collection}>{collection}</option>
                    ))}
                </select>
                <input type="number" placeholder="Price" value={form.price} onChange={update('price')} />
                <select value={form.frameType} onChange={update('frameType')}>
                    {frameTypes.map((frameType) => (
                        <option key={frameType}>{frameType}</option>
                    ))}
                </select>
                <select value={form.shape} onChange={update('shape')}>
                    {shapes.map((shape) => (
                        <option key={shape}>{shape}</option>
                    ))}
                </select>
                <input type="text" placeholder="Size" value={form.size} onChange={update('size')} />
                <input type="text" placeholder="Color" value={form.color} onChange={update('color')} />
                <button type="submit">Add Product</button>
            </form>
            {showToast && <p>Product added successfully!</p>}
    );
}