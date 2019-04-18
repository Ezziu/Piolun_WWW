import React, { Component } from 'react';
import {
  Col,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import logo from '../Logo-typo-dark.png';
import icoFacebook from '../ico-facebook.png';
import email from '../email.png';


export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="light" light expand="md" className="Footer-h">   
        <Row className="Footer">
          <Col sm='3'>
            <NavbarBrand href="/index.html">
              <img src={logo} className="logo-typo" />
            </NavbarBrand>              
          </Col>
          <Col sm='4'>  
            <div className='text-plain ralign'>Stowarzyszenie Rekonstrukcji Fabularnej "Piołun"</div>         
          </Col> 
          <Col sm='2'> 
            <div className='text-plain ralign'>KONTAKT<br/>strefa.piolun@gmail.com</div>
          </Col>  
          <Col sm='3'>
            <NavLink href="https://www.facebook.com/stalkerzonex/"><img src={icoFacebook} className="ico"/></NavLink>
          </Col> 
        </Row> 

        </Navbar> 

    );
  }
}
