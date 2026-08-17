import { useState } from 'react';

export const COLLECTIONS = ['Classic', 'Modern Minimalist', 'Retro & Vintage', 'Sports Active'];
export const FRAME_TYPES = ['Full-Rim', 'Half-Rim', 'Rimless'];
export const SHAPES = ['Rectangle', 'Round', 'Square'];

const emptyForm = {
  name: '',
  collection: COLLECTIONS[0],
  price: '',
  frameType: FRAME_TYPES[0],
  shape: SHAPES[0],
  size: '',
  color: '#242424',
  image: '',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Give the piece a name';
  if (!form.collection) errors.collection = 'Select a collection';
  if (!form.price || Number.isNaN(Number(form.price)) || Number(form.price) < 0)
    errors.price = 'Enter a valid price';
  if (!form.frameType) errors.frameType = 'Select a frame type';
  if (!form.shape) errors.shape = 'Select a shape';
  if (!form.size.trim()) errors.size = 'Enter a size';
  if (!form.color.trim()) errors.color = 'Choose a color';
  return errors;
}

export function useProductForm(initialValues, onSave) {
  const [form, setForm] = useState(initialValues ?? emptyForm);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => {
    setForm((current) => ({ ...current, [field]: e.target.value }));
  };

  const updateImage = (file) => {
    if (!file) {
      setForm((current) => ({ ...current, image: '' }));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setForm((current) => ({ ...current, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSave({
      name: form.name.trim(),
      collection: form.collection,
      price: Number(form.price),
      frameType: form.frameType,
      shape: form.shape,
      size: form.size.trim(),
      color: form.color.trim(),
      image: form.image,
    });
  };

  const reset = () => {
    setForm(initialValues ?? emptyForm);
    setErrors({});
  };

  return { form, errors, update, updateImage, handleSubmit, reset };
}
