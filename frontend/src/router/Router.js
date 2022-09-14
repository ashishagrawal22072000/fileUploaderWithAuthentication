import React from 'react'
import Register from '../Register';
import Login from '../Login';
import Dashboard from '../Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>    
  )
}
