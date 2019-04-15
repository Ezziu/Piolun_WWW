import React, { Component } from 'react';
import {
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
import logo from '../Logo-typo.png';
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

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
              <img src={logo} className="logo-typo" />
          </NavbarBrand>
           <div className='text-plain Footer'>
              <span>Stowarzyszenie Rekonstrukcji Fabularnej "Piołun"</span>         
           </div>

           <div>
               <span><img src={email} className="ico"/></span>
           </div>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.facebook.com/stalkerzonex/"><img src={icoFacebook} className="ico"/></NavLink>
              </NavItem>
              
            </Nav>

        </Navbar>
    );
  }
}
