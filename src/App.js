import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Link, useNavigate } from "react-router-dom"

// components
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  //const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        {/* <Header /> */}
        <Login />
        {/* <Footer /> */}
      </header>
    </div>
  );
}

export default App;
