import { useState } from 'react';
import { useProducts } from '../context/ProductContext';

export default function ProductCard({ product }) {
  const { updateProduct, deleteProduct } = useProducts();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(product);

  const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSave = (e) => {
     e.preventDefault();
     updateProduct(formData);
     setIsEditing(false);
   };

  if (isEditing) {
        return (
         <form onSubmit={handleSave} className="product-card">
         <input name="name" value={formData.name} onChange={handleChange} />
         <input name="price" type="number" value={formData.price} onChange={handleChange} />
         <input name="color" value={formData.color} onChange={handleChange} />
         <button type="submit">Save</button>
         <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
         </form>
        );
    }

  return (
       <div className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${Number(product.price).toFixed(2)}</p>
          <p>{product.collection} — {product.color}</p>
          <button onClick={() => setIsEditing(true)}>Update</button>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
    );
}