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
import icoFacebookG from '../ico-facebook-g.png';


export default class MenuBar extends React.Component {
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
    console.log(this.props.links);
    return (
        <Navbar color="dark" light expand="md" sticky="top">
          <NavbarBrand href="/index.html"><img src={logo} className="logo-typo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#Projekty" onClick={this.toggle}><span className="text-decoration">NASZE PROJEKTY</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Patronaty" onClick={this.toggle}><span className="text-decoration">PATRONUJEMY</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Onas" onClick={this.toggle}><span className="text-decoration">KIM JESTEŚMY</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Kontakt" onClick={this.toggle}><span className="text-decoration">GDZIE NAS ZNALEŹĆ</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com/stalkerzonex"> <img src={icoFacebookG} className="ico-sm"/> </NavLink>
              </NavItem>   
             
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
