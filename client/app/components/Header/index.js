import React from 'react';
import propTypes from 'prop-types';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  navigateToPage = pathname => (e) => {
    if (this.state.isOpen) {
      this.toggle();
    }
    this.props.navigateToPage(pathname)(e);
  };
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" onClick={this.navigateToPage('/')}>Dashboard</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/search" onClick={this.navigateToPage('/search')}>Search</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  navigateToPage: propTypes.func.isRequired,
};

export default Header;
