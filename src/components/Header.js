import React, { Component } from 'react';
import logo from '../Logo-main.png';
import '../App.css';

const Header = () => {
return (
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <a
    className="App-link"
    href="http://zona-x.pl"
    target="_blank"
    rel="noopener noreferrer"
  >  </a>
</header>
 )
}

export default Header;