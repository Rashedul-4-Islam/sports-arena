import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <div className="about">
            <div className="about-us">
                <div className="demoo">
                <h3 className="text-warning fs-1 fw-bold">About Us</h3>
                <p className="fs-4 fw-bold w-75">We are a competitive professional Sports club - with our players competing at all levels from local team galas.</p>
                </div>
            </div>
            <div className="row p-3 my-5">
               <div className="col-12 col-md-6 text-start">
               <img className="w-75" src="https://cdn.wallpapersafari.com/69/98/WTwE4y.jpg" alt="" />
               </div>
                <div className="col-12 col-md-6 text-start">
                    <h2 className="w-50"><span className="text-danger">SPORTS ARENA</span> MISSION&VISION</h2>
                    <p className="fs-5 ">With a membership of 190+ players drawn, we have a high level of competition.</p>
                    <span>
                    <button className="btn btn-danger me-2">Join The Club</button>
                    <button className="btn btn-danger">Learn more</button>
                    </span>

                </div>

                <div className="third-section my-3">
                    <div className="awards">
                    <h3 className=" fw-bolder fs-2">OUR <span className="text-warning ">AWARDS</span></h3>
                    <p className="fs-4">The Sports Arena is proud of its excellent record in the consistent production.</p>
                    <div className="ms-5 pe-4">
                        <img src="./image/awards/Trophy_01.png" alt="" />
                        <img src="./image/awards/Trophy_08.png" alt="" />
                        <img src="./image/awards/Trophy_09.png" alt="" />
                        <img src="./image/awards/Trophy_06.png" alt="" />
                    </div>
                    </div>
                </div>
                
                <div>
                    <h2>OUR <span className="text-danger">COACHES</span></h2>
                    <p>Our team has a proven track record of success in teaching and training players.</p>
                    <div className="fourth-section">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./image/coach/inner-team-01.jpg" />
                            <Card.Body>
                                <Card.Title>Steven Smith</Card.Title>
                                <p>MAIN COACH</p>
                                <Card.Text>
                                Smith joined Arena in 2015 . He has long been involved in Sports at the top level with experience
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./image/coach/inner-team-02.jpg" />
                            <Card.Body>
                                <Card.Title>MARIO JOHNSON</Card.Title>
                                <p>SENIOR TRAINER</p>
                                <Card.Text>
                                As an ex-National Team member, Mario still holds multiple national team records, such as blocks and free throws.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./image/coach/inner-team-03.jpg" />
                            <Card.Body>
                                <Card.Title>MARK SMITH</Card.Title>
                                <p>JUNIOR TRAINER</p>
                                <Card.Text>
                                Mark has been a member of Oxygen Club for upwards of 17 years, where he has trained and competed.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./image/coach/inner-team-04.jpg" />
                            <Card.Body>
                                <Card.Title>TOM LEE</Card.Title>
                                <p>FITNESS INSTRUCTOR</p>
                                <Card.Text>
                                Our member who competed during his time as a competitive player, he has qualified for numerous finals.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                </div>
                </div>
                

            </div>
        </div>
    );
};

export default About;