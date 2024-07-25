import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

