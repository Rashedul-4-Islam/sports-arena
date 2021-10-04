import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './TotalService.css'
const TotalService = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
          fetch('./totalservice.json')
          .then(res => res.json())
          .then(data => setServices(data))
    },[])
    return (
        <div>
            <h3 className="text-light w-50 m-auto p-4 rounded-pill my-3 bg-dark">OUR SERVICES</h3>
            <div className="total-service">
                {
                    services.map(service => <div className="w-75">
                        <img className=" images" src={service.pic} alt="" />
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TotalService;