// src/components/ProductForm.js
import React, { useState } from 'react';
import './ProductForm.css'; // Import the CSS file

const ProductForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData.name || '');
  const [price, setPrice] = useState(initialData.price || '');
  const [description, setDescription] = useState(initialData.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price, description });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button className="save-btn" type="submit">Save</button>
    </form>
  );
};

export default ProductForm;
