import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="background">
            <Navbar>
                <Container>
                    <Navbar className="nav-brand me-5">Sports-Arena</Navbar>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
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
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;