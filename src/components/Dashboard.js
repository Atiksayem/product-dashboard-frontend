// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductModal from './ProductModal';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:5000/products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (product) => {
    await axios.post('http://localhost:5000/products', product);
    fetchProducts();
    setModalIsOpen(false);
  };

  const handleEditProduct = async (product) => {
    await axios.put(`http://localhost:5000/products/${selectedProduct._id}`, product);
    fetchProducts();
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  const handleDeleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchProducts();
  };

  const openAddModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(true);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  return (
    <div className="dashboard-container">
      <h1>Product Dashboard</h1>
      <button className="add-product-btn" onClick={openAddModal}>Add Product</button>
      <ul className="product-list">
        {products.map(product => (
          <li key={product._id} className="product-item">
            <b>Name: </b>{product.name} <br></br>
            <b>Price: </b>{product.price} BDT <br></br>
            <b>Description: </b>{product.description} <br></br>
        
            <div className="product-actions">
              <button className="edit-btn" onClick={() => openEditModal(product)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <ProductModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        onSubmit={selectedProduct ? handleEditProduct : handleAddProduct}
        initialData={selectedProduct}
      />
    </div>
  );
};

export default Dashboard;
