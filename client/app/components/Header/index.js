import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const HeaderNavbar = styled(props => <Navbar {...props} />)`
  background: ${props => props.theme.header.background};
  .navbar-brand, .nav-link {
    color: ${props => props.theme.header.textColor};
    &:hover, &.active {
      color: ${props => props.theme.header.textHoverColor}; 
    }
  }
`;

const NavbarTogglerCustomised = styled(({ children, active, ...restProps }) => (
  <NavbarToggler {...restProps}>{children}</NavbarToggler>
))`
  &&& {
    color: white;
    outline: 0;
  }
`;

const NavbarToggleIcon = styled.i.attrs({
  className: props => (props.active ? 'fas fa-times pb-1' : 'fas fa-bars pb-1'),
})`
  font-size: 2.2rem;
`;

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
  isActivePage = (pathname, currentPathname) => (pathname === currentPathname ? 'active' : '');
  render() {
    const { location, routes } = this.props;
    return (
      <HeaderNavbar expand='md'>
        <NavbarBrand
          href={routes.HOME.url}
          onClick={this.navigateToPage(routes.HOME.url)}
          className={this.isActivePage(routes.HOME.url, location.pathname)}
        >
          {routes.HOME.title}
        </NavbarBrand>
        <NavbarTogglerCustomised onClick={this.toggle}>
          <NavbarToggleIcon active={this.state.isOpen} />
        </NavbarTogglerCustomised>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                href={routes.SEARCH.url}
                onClick={this.navigateToPage(routes.SEARCH.url)}
                className={this.isActivePage(routes.SEARCH.url, location.pathname)}
              >
                {routes.SEARCH.title}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </HeaderNavbar>
    );
  }
}

Header.propTypes = {
  navigateToPage: propTypes.func.isRequired,
  routes: propTypes.object.isRequired,
  location: propTypes.object.isRequired,
};

export default withRouter(Header);
