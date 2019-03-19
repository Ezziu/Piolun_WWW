import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Space } from 'reactstrap';

import Header from './components/Header.js';
import MenuBar from './components/MenuBar.js';
import ScrollList from './components/ScrollList.js';
import ProjectTiles from './components/ProjectTiles.js';
import Patronaty from './components/Patronaty.js';
import Onas from './components/Onas.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MenuBar />
        <ScrollList />
        <ProjectTiles />
        <Patronaty />
        <Onas />
        <Footer />
      </div>
    );
  }
}

export default App;
