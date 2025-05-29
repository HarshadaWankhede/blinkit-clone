import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../assets/styles/categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const handleCategoryClick = (categoryTitle) => {
    navigate(`/userportal/category/${categoryTitle}`);
  };

  return (
    <div className="categories-section">
      <div className="home-cards-scroll">
        {categories.map((cat, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() => handleCategoryClick(cat.title)}
          >
            <img src={cat.img} alt={cat.title} className="category-img" />
            <div className="category-title">{cat.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
