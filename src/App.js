import React, { Component } from 'react';
import logo from './Logo-main.png';
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
        <MenuBar />
        <Header />
        <div id="Projekty">
          <ProjectTiles />
        </div>  
        <div id="Patronaty" className="Patronaty">
          <Patronaty />
        </div>
        <div id="Onas" className="Onas">
          <Onas />
        </div> 
          <div className="Placeholder">
        </div> 
        <div id="Kontakt">
          <Footer />
        </div>
        <div className="Watermark">
          <span>© AV 2019</span>
        </div>
      </div>
    );
  }
}

export default App;
