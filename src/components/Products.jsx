import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../assets/styles/product.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Products = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    fetchProducts();
  }, [categoryName]);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`http://localhost:4000/products`);
      const data = await res.json();
    
      const filtered = data
        .filter(item => item.category === categoryName)
        .map((item, index) => ({
          ...item,
          id: item.id || index + 1,  
          qty: item.qty || 1
        }));
      setProducts(filtered);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

 
  const incQty = (id) => {
    setProducts(prev =>
      prev.map(prod =>
        prod.id === id ? { ...prod, qty: prod.qty + 1 } : prod
      )
    );
  };

  const decQty = (id) => {
    setProducts(prev =>
      prev.map(prod =>
        prod.id === id && prod.qty > 1 ? { ...prod, qty: prod.qty - 1 } : prod
      )
    );
  };

  const addToCart = (product) => {
    const cartItem = {
      id: product.id,
      title: product.title,
      MRP: product.MRP,
      img: product.img,
      category: product.category,
      qty: product.qty
    };

    fetch(`http://localhost:4000/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartItem),
    })
    .then(() => {
      alert(`"${product.title}" is added to cart`);
    })
    .catch((err) => {
      alert("Error adding to cart");
      console.error(err);
    });
  };

  return (
    <div className="products-section">
      <h2 className="products-header">{categoryName}</h2>
      <div className="products-container">
        {products.map((prod) => (
          <div className="product-card" key={prod.id}>
            <img src={prod.img} alt={prod.title} className="product-img" />
            <div className="product-title">{prod.title}</div>
            <div>MRP: ₹{prod.MRP}</div>

            <div className="qty-controls">
              <RemoveCircleIcon 
                onClick={() => decQty(prod.id)} 
                className={`qty-icon ${prod.qty === 1 ? 'disabled' : ''}`} 
              />
              <span className="qty-value">{prod.qty}</span>
              <AddCircleIcon 
                onClick={() => incQty(prod.id)} 
                className="qty-icon" 
              />
            </div>

            <button className="add-cart-btn" onClick={() => addToCart(prod)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
