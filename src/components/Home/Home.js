import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div className='home-intro '>
           
            <div className="home">
            <h4 className="servicess">Our Services</h4>
            <Link to="/services">
            <button className="btn btn-primary px-4">Details</button>
            </Link>
            </div>
            <div>
                 <h3 className="bg-light text-dark w-25 m-auto my-4 fw-bold rounded-pill">OUR <span className="text-warning">TEAM</span></h3>
                 <Carousel className="w-50 m-auto py-3 ">
                        <Carousel.Item >
                           <div >
                           <img
                            className="d-block w-100 height"
                            src="https://www.firstpost.com/wp-content/uploads/2020/02/Bangladesh-825.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption className="sliders">
                            <h3>CRICKET TEAM</h3>
                            
                            </Carousel.Caption>
                           </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 height"
                            src="https://images.daznservices.com/di/library/GOAL/fb/86/bangladesh-football-team_1irdzkozsqdmk1crddl7l5dv8t.jpg?t=-1148429971&quality=100"
                            alt="Second slide"
                            />

                            <Carousel.Caption className="sliders">
                            <h3>FOOTBALL TEAM</h3>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 height"
                            src="https://ecdn.banglatribune.com/contents/cache/images/800x0x1/uploads/media/2018/09/07/ecd272109412bfc15fcb2881e2c2a085-5b92424cd0d14.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption className="sliders">
                            <h3>HOCKEY TEAM</h3>
                           
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 height"
                            src="https://thedailynewnation.com/library/1407859478_0.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption className="sliders">
                            <h3>KABADDI TEAM</h3>
                           
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 height"
                            src="https://www.fiba.basketball/api/img/graphic/c9471e23-ad31-477e-a44c-333eeb6321a4/1000/1000?mt=.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption className="sliders">
                            <h3>BASKETBALL TEAM</h3>
                           
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
            </div>
        </div>
    );
};

export default Home;