// src/components/ProductModal.js
import React from 'react';
import Modal from 'react-modal';
import ProductForm from './ProductForm';
import './ProductModal.css'; // Import the CSS file

Modal.setAppElement('#root');

const ProductModal = ({ isOpen, onRequestClose, onSubmit, initialData }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal-container">
    <h2>{initialData ? 'Edit Product' : 'Add Product'}</h2>
    <ProductForm onSubmit={onSubmit} initialData={initialData || {}} />
    <button className="cancel-btn" onClick={onRequestClose}>Close</button>
  </Modal>
);

export default ProductModal;
