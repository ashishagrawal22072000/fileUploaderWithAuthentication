import React from 'react'
import Register from '../Register';
import Login from '../Login';
import Dashboard from '../Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/register" component={<Register />} />
        <Route path="/login" component={<Login />} />
        <Route path="/dashboard" component={<Dashboard />} />
    </Routes>
    </BrowserRouter>    
  )
}
