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
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/"><span className="text-decoration">Strefa Piołun</span></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/"><span className="h5 text-decoration">NASZE PROJEKTY</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"><span className="h5 text-decoration">PATRONUJEMY</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"><span className="h5 text-decoration">KIM JESTEŚMY</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"><span className="h5 text-decoration">GDZIE NAS ZNALEŹĆ</span></NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
