
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop-page-component';
import Header from './components/header/header-component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-component';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/signin' element={<SignInSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
