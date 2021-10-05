import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className=" text-light p-4 footer-area">
            <div className="row mt-4">
                  <div className="col-12 col-md-4">
                       <h3 className="text-warning">Sports Arena</h3>
                       <p><i class="fas fa-map-marker-alt"></i> 20 First Avenue, Dhaka, CA 95101, BD</p>
                       <p><i class="fas fa-mobile"></i> +8801789556525</p>
                       <p><i class="fas fa-envelope"></i> sports@arena.info</p>
                  </div>
                  <div className="col-12  col-md-4">
                        <h4>Quick Links</h4>
                        <ul className="order-list">
                            <li><Link className="text-decoration-none fw-bold" to="/sports">Sports</Link></li>
                            <li><Link className="text-decoration-none fw-bold" to="/about">About</Link></li>
                            <li><Link className="text-decoration-none fw-bold" to="/totalService">Services</Link></li>
                            <li><Link className="text-decoration-none fw-bold" to="/registration">Registration</Link></li>
                        </ul>
                  </div>
                  <div className="col-12  col-md-4">
                          <h4>SIGN UP FOR EMAIL ALERTS</h4>
                          <p>Select topics and stay current with our latest news.</p>
                          <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Your email Address" aria-label="Search"/>
                            <button class="btn btn-warning" type="submit">Search</button>
                        </form>
                  </div>
                  <hr></hr>
            </div>
            
            <div className="row footers pt-3">
            <div className="col-12 col-md-4">
            <p>Copyright &copy; 2021-Sports-Arena. All rights reserved.</p>
            </div>
            <div className="col-12 col-md-4 d-flex icons justify-content-center">
                <p><i class="fab fa-facebook-f"></i></p>
                <p><i class="fab fa-twitter"></i></p>
                <p><i class="fab fa-instagram"></i></p>
                <p><i class="fab fa-google-plus-g"></i></p>
            </div>
             <div className="col-12 col-md-4">
             <p>Proudly designed and developed by Rashedul Islam</p>
             </div>
            </div>
        </div>
    );
};

export default Footer;