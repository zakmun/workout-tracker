import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import './App.css';
import Home from './pages/Home';
import ExcersizeDetail from './pages/ExcersizeDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/excersize/:id" element={<ExcersizeDetail />}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App