// src/context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
 const [cart, setCart] = useState([]);
 const [images, setImages] = useState([
    { id: 1, src: 'https://images.unsplash.com/photo-1593166073850-b42e3507c969?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1610397648930-477b8c7f0943?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1608463026422-8f43ab4ebac0?w=180&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 3' },
 ]);

 const addToCart = (item) => {
    setCart([...cart, item]);
 };

 const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    removeFromImages(id); 
 };

 const removeFromImages = (id) => {
    setImages(images.filter(image => image.id !== id));
 };

 return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, images }}>
      {children}
    </CartContext.Provider>
 );
};
