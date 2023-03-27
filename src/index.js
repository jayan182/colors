import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import UserContext from './Providers/userProvider';
import products from './Lib/products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserContext.Provider value={products}>
      <App />
    </UserContext.Provider>
  </BrowserRouter>
);

reportWebVitals();
