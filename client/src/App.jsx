import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './index.css'
import './App.css'
import SignUp from './components/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
  );
  
}

export default App