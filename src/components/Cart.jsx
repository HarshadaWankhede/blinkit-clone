import React, { useEffect, useState } from 'react';
import "../assets/styles/cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  
  const fetchCartItems = async () => {
    try {
      const res = await fetch(`http://localhost:4000/cart`);
      const data = await res.json();
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/cart/${id}`, {
        method: "DELETE",
      });
     
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
      alert("Item removed from cart.");
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

 
  const totalBill = cartItems.reduce((acc, item) => acc + item.qty * item.MRP, 0);

  return (
    <div className="cart-section">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.img} alt={item.title} className="cart-img" />
              <div className="cart-title">{item.title}</div>
              <div>Qty: {item.qty}</div>
              <div>Price: ₹{item.MRP}</div>
              <button 
                className="delete-btn" 
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
          <h3>Total Bill: ₹{totalBill}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
