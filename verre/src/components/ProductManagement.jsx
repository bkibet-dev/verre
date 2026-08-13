import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductManagementList = () => {
  const { products, deleteProduct, updateProduct } = useContext(ProductContext);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEditClick = (product) => {
    console.log("Editing product triggered for:", product);
    setEditingId(product.id);
    setFormData(product);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving updated product data:", formData);
    updateProduct(formData);
    setEditingId(null);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Product Inventory & Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md bg-white flex flex-col justify-between">
            {editingId === product.id ? (
              <form onSubmit={handleSave} className="space-y-3">
                <h3 className="font-semibold text-lg text-blue-600">Editing Product</h3>
                <div>
                  <label className="text-xs font-semibold">Image URL</label>
                  <input type="text" name="image" value={formData.image} onChange={handleChange} className="w-full border p-1 text-sm rounded" required />
                </div>
                <div>
                  <label className="text-xs font-semibold">Collection</label>
                  <input type="text" name="collection" value={formData.collection} onChange={handleChange} className="w-full border p-1 text-sm rounded" required />
                </div>
                <div>
                  <label className="text-xs font-semibold">Price ($)</label>
                  <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full border p-1 text-sm rounded" required />
                </div>
                <div>
                  <label className="text-xs font-semibold">Frame Type</label>
                  <input type="text" name="frameType" value={formData.frameType} onChange={handleChange} className="w-full border p-1 text-sm rounded" required />
                </div>
                <div>
                  <label className="text-xs font-semibold">Shape</label>
                  <input type="text" name="shape" value={formData.shape} onChange={handleChange} className="w-full border p-1 text-sm rounded" required />
                </div>
                <div>
                  <label className="text-xs font-semibold">Size</label>
                  <input type="text" name="size" value={formData.size} onChange={handleChange} className="w-full border p-1 text-sm rounded" required />
                </div>
                <div>
                  <label className="text-xs font-semibold">Color</label>
                  <input type="text" name="color" value={formData.color} onChange={handleChange} className="w-full border p-1 text-sm rounded" required />
                </div>
                <div className="flex gap-2 pt-2">
                  <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded text-sm">Save</button>
                  <button type="button" onClick={() => setEditingId(null)} className="bg-gray-400 text-white px-3 py-1 rounded text-sm">Cancel</button>
                </div>
              </form>
            ) : (
              <>
                <div>
                  <img src={product.image} alt={product.collection} className="w-full h-40 object-cover rounded mb-3" />
                  <span className="text-xs uppercase font-bold text-gray-400">{product.collection}</span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">${Number(product.price).toFixed(2)}</h3>
                  
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li><strong>Frame:</strong> {product.frameType}</li>
                    <li><strong>Shape:</strong> {product.shape}</li>
                    <li><strong>Size:</strong> {product.size}</li>
                    <li><strong>Color:</strong> {product.color}</li>
                  </ul>
                </div>

                <div className="flex gap-2 border-t pt-3">
                  <button onClick={() => handleEditClick(product)} className="flex-1 bg-amber-500 text-white py-1.5 rounded text-sm font-medium hover:bg-amber-600 transition">Update</button>
                  <button onClick={() => deleteProduct(product.id)} className="flex-1 bg-red-500 text-white py-1.5 rounded text-sm font-medium hover:bg-red-600 transition">Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No items available in the catalog.</p>
      )}
    </div>
  );
};

export default ProductManagementList;