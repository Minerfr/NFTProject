import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
 const { cart, removeFromCart } = useContext(CartContext);
 const navigate = useNavigate();

 const handleBuy = (id) => {
    removeFromCart(id);
    navigate('/'); 
 };

 return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <img src={item.src} alt={item.alt} />
          <button onClick={() => handleBuy(item.id)}>Buy</button>
        </div>
      ))}
      <button onClick={() => navigate('/')}>Back</button>
    </div>
 );
};

export default CartPage;
