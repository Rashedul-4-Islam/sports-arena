import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
      <Navbar className="background " expand="lg">
      <Container className="text-dark">
        <Navbar.Brand className="fs-2 fw-bold me-3 text-light" >SPORTS<span className="nav-brand"><i class="fas fa-basketball-ball"></i>ARENA</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-warning" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <NavLink className="text-decoration-none ms-4" to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >Home</NavLink>
            <NavLink className="text-decoration-none ms-3" to="/sports"
                   activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >Sports</NavLink>
            <NavLink className="text-decoration-none ms-3" to="/about"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red"
                  }}
            >About</NavLink>
            <NavLink className="text-decoration-none ms-3" to="/totalService"
                     activeStyle={{
                      fontWeight: "bold",
                      color: "red"
                      
                  }}
            >Service</NavLink>
            <NavLink className="text-decoration-none ms-3" to="/registration"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red"
                  }}
             >Registration</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;