import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// components
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
