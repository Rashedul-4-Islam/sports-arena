import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg background">
        <div className="container fluid">
          <Navbar className="navbrand" >Sports Arena</Navbar>
          <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                >Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/sports"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
              >Sports</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/about"
                     activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
              >About</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/totalService"
                       activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
              >Services</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;