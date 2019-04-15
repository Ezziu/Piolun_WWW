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
      // <div>
        <Navbar color="dark" light expand="md" sticky="top">
          <NavbarBrand href="/"><img src={logo} className="logo-typo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#Projekty"><span className="h6 text-decoration">NASZE PROJEKTY</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Patronaty"><span className="h6 text-decoration">PATRONUJEMY</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Onas"><span className="h6 text-decoration">KIM JESTEŚMY</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Footer"><span className="h6 text-decoration">GDZIE NAS ZNALEŹĆ</span></NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>
      // </div>
    );
  }
}
