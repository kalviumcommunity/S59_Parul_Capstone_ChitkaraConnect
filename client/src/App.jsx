import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Home from './components/Home'
import './index.css'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Clubs from './components/club/Clubs'
import Navbar from './components/Navbar'
import ClubsProfile from './components/club/ClubsProfile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Clubs' element={<Clubs />} />
        <Route path='/Navbar' element={<Navbar />} />
        <Route path='/Club/:clubId' element={<ClubsProfile />} />
      </Routes>
      <ToastContainer />
    </>
  );

}

export default App