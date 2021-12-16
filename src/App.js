
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop-page-component';


function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
