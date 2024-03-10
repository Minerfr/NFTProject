import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './HomePage.css'; 

const HomePage = () => {
 const { addToCart, removeFromCart, images } = useContext(CartContext);
 const navigate = useNavigate();

 const handleAddToCart = (image) => {
    addToCart(image);
    navigate('/cart'); 
 };

 const handleBuy = (image) => {
    removeFromCart(image.id); 
    navigate('/'); 
 };

 return (
    <div className="home-page">
      <h2>NFT Buying website</h2>
      <div className="cart-section">
        <Link to="/cart">Cart Section</Link>
      </div>
      {images.map(image => (
        <div key={image.id} className="image-container">
          <img src={image.src} alt={image.alt} />
          <button onClick={() => handleAddToCart(image)}>Add to Cart</button>
          <button onClick={() => handleBuy(image)}>Buy</button>
        </div>
      ))}
    </div>
 );
};

export default HomePage;
