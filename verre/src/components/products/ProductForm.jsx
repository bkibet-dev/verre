import { COLLECTIONS, FRAME_TYPES, SHAPES } from '../../hooks/useProductForm';

function ProductForm({ form, errors, update, updateImage, onSubmit, onCancel, submitLabel }) {
  return (
    <form className="product-form" onSubmit={onSubmit}>
      <div className="form-field">
        <label htmlFor="image">Image</label>
        <div className="image-upload">
          {form.image && (
            <img src={form.image} alt="Preview" className="image-preview" />
          )}
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => updateImage(e.target.files[0])}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Name" value={form.name} onChange={update('name')} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="collection">Collection</label>
        <select id="collection" value={form.collection} onChange={update('collection')}>
          {COLLECTIONS.map((collection) => (
            <option key={collection} value={collection}>{collection}</option>
          ))}
        </select>
        {errors.collection && <span className="error">{errors.collection}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="price">Price</label>
        <input id="price" type="number" min="0" step="0.01" placeholder="Price" value={form.price} onChange={update('price')} />
        {errors.price && <span className="error">{errors.price}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="frameType">Frame Type</label>
        <select id="frameType" value={form.frameType} onChange={update('frameType')}>
          {FRAME_TYPES.map((frameType) => (
            <option key={frameType} value={frameType}>{frameType}</option>
          ))}
        </select>
        {errors.frameType && <span className="error">{errors.frameType}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="shape">Shape</label>
        <select id="shape" value={form.shape} onChange={update('shape')}>
          {SHAPES.map((shape) => (
            <option key={shape} value={shape}>{shape}</option>
          ))}
        </select>
        {errors.shape && <span className="error">{errors.shape}</span>}
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="size">Size</label>
          <input id="size" type="text" placeholder="e.g. M" value={form.size} onChange={update('size')} />
          {errors.size && <span className="error">{errors.size}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="color">Color</label>
          <div className="color-field">
            <input id="color" type="color" value={form.color} onChange={update('color')} />
            <span>{form.color}</span>
          </div>
          {errors.color && <span className="error">{errors.color}</span>}
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="primary-button">{submitLabel}</button>
        <button type="button" className="secondary-button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default ProductForm;
