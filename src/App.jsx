import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Dashboard from './components/Dashboard'
import Employees from './components/Employees';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Employees" element={<Employees/>}/>
      </Routes>
    </div>
  );
}