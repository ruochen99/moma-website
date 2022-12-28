import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { NavLink, NavBanner } from './NavbarElements';
class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      background: "blue",
    };
  }

  toggle = () => {
    if (window.innerWidth < 992) {
      this.setState(prevState => ({
        open: !prevState.open,
        background: prevState.background === "blue" ? "white" : "blue",
      }));
    }
  }

  render() {
    const links = Navigation.links;
    const { open, background } = this.state;
    return (
      <Navbar
        fixed="top"
        expand="lg"
        className={"navbar-" + background}
        expanded={open}
      >
          <NavBanner as={Link} to="/">MOMA</NavBanner>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={this.toggle} />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" />
          <Nav>
            {
              links.map(link => {
                let currUrl = this.props.history.location.pathname;
                let to = currUrl.includes(link.to) ? currUrl : link.to;
                return (
                  <NavLink as={Link} to={to} key={link.text} onClick={this.toggle}>
                    {link.text}
                  </NavLink>
                )
              })
            }
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }

}

Navigation.links = [
  {
    to: '/about',
    text: 'About',
  },
  {
    to: '/download',
    text: 'Download',
  },
  {
    to: '/publication',
    text: 'Publication',
  },
  {
    to: '/explore',
    text: 'Explore',
  },
];

export default withRouter(Navigation);
