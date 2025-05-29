import React from 'react';
import banner from "../assets/images/home.jpg"
import '../assets/styles/home.css'; 
import Categories from './Categories';


const Home = () => {
  return (
    <div className="home">
      <img src={banner} alt="Freshness You Can Trust, Savings You will Love!" className="home-banner" /> 
      <div className="banner-text">
      Everything is Fresh 
      Here! 
      </div>
      <div className="home-container">
        <div className="home-header">
            <h1>Categories</h1>
            <Categories/>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
