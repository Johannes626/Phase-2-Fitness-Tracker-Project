import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './About.js'
import NutritionInfo from './NutritionInfo.js'
import NavBar from './NavBar'
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/app" element={<App />}/>
        <Route path='/about' element={<About/>} />
        <Route path='/nutritioninfo' element={<NutritionInfo/>} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
  
  ,

  document.getElementById('root')
);

