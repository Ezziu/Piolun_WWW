import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

const Header = () => {
return (
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    <h1>STREFA "Piołun"</h1>
    <h3>STOWARZYSZENIE REKONSTRUKCJI FABULARNEJ</h3>
  </p>
  <a
    className="App-link"
    href="http://zona-x.pl"
    target="_blank"
    rel="noopener noreferrer"
  >
    ZONA X 
  </a>
</header>
 )
}

export default Header;