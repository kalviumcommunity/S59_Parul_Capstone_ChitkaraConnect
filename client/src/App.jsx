import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './index.css'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  );
  
}

export default App