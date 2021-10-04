import React from 'react';
import './Sports.css'
const Sports = () => {
    return (
        <div>
            <h3 className="bg-dark text-light my-4 w-50 m-auto rounded-pill p-3">WE TRAIN YOU</h3>
            <div className="row ms-5">
                <div className="col-md-3 bg-change m-4">
                    <img className="sport-image" src="./image/sports/cricket.jpg" alt="" />
                    <h3>CRICKET</h3>
                    <p>COURSE:$1500</p>
                </div>
                <div className="col-md-3 bg-change m-4">
                <img className="sport-image" src="./image/sports/football.png" alt="" />
                <h3>FOOTBALL</h3>
                <p>COURSE:$1700</p>
                </div>
                <div className="col-md-3 bg-change m-4">
                <img className="sport-image" src="./image/sports/basketball.jpg" alt="" />
                <h3>BAKETBALL</h3>
                <p>COURSE:$1000</p>
                </div>
                <div className="col-md-3 bg-change m-4">
                <img className="sport-image" src="./image/sports/swimming.jpg" alt="" />
                <h3>SWIMMING</h3>
                <p>COURSE:$400</p>
                </div>
                <div className="col-md-3 bg-change m-4">
                <img className="sport-image" src="./image/sports/tennis.png" alt="" />
                <h3>TENNIS</h3>
                <p>COURSE:$1300</p>
                </div>
                <div className="col-md-3 bg-change m-4">
                <img className="sport-image" src="./image/sports/boxing.jpg" alt="" />
                <h3>BOXING</h3>
                <p>COURSE:$1500</p>
                </div>
                <div className="col-md-3 bg-change m-4">
                <img className="sport-image" src="./image/sports/hockey.png" alt="" />
                <h3>HOKEY</h3>
                <p>COURSE:$700</p>
                </div>
                <div className="col-md-3 bg-change m-4">
                <img className="sport-image" src="./image/sports/rugby.png" alt="" />
                <h3>RUGBY</h3>
                <p>COURSE:$800</p>
                </div>
                <div className="col-md-3 bg-change m-4">
                <img className="sport-image" src="./image/sports/baseball.png" alt="" />
                <h3>BASEBALL</h3>
                <p>COURSE:$1200</p>
                </div>
            </div>
        </div>
    );
};

export default Sports;