import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar className="background" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="nav-brand">Sports-Arena</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="nav-item me-3" to="/home"
                         activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                          }}
                    >Home</NavLink>
                    <NavLink className="nav-item me-3" to="/sports"
                         activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                          }}
                    >Sports</NavLink>
                    <NavLink className="nav-item me-3" to="/about"
                         activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                          }}
                    >About</NavLink>
                    <NavLink className="nav-item me-3" to="/totalService"
                         activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                          }}
                    >Services</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;