import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Services.css'
const Services = () => {
    const [service,setService] = useState([]);
    useEffect(() => {
        fetch('./service.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h3 className="fw-bold bg-warning w-50 m-auto my-4 p-3 rounded-pill">Our Services</h3>
            <div className="services">
            {
                service.map(ser => <div className="text-dark">
                   <Card style={{ width: '18rem',height:'24rem',backgroundColor:'black',color:'white' }}>
                    <Card.Img className="p-2" variant="top" src={ser.pic} />
                    <Card.Body>
                        <Card.Title>{ser.name}</Card.Title>
                        <Card.Text className="card-text">
                          {ser.effect}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>)
            }
            </div>
        </div>
    );
};

export default Services;