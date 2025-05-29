import React, { useEffect, useState } from 'react';
import "../assets/styles/product.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const res = await fetch(`http://localhost:4000/products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="products-section">
      <h2 className="products-header">All Products</h2>
      <div className="products-container">
        {products.map((prod) => (
          <div className="product-card" key={prod.id}>
            <img src={prod.img} alt={prod.title} className="product-img" />
            <div className="product-title">{prod.title}</div>
            <div className="product-price">Price: {prod.MRP}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
