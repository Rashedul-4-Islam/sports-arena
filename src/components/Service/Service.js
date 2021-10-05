import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
    const {name,pic,description} = props.ser;
    return (
        <div className="text-dark">
        <Card style={{ width: '18rem',height:'24rem',backgroundColor:'black',color:'white' }}>
         <Card.Img className="p-2" variant="top" src={pic} />
         <Card.Body>
             <Card.Title>{name}</Card.Title>
             <Card.Text className="card-text">
               {description}
             </Card.Text>
         </Card.Body>
         </Card>
     </div>
    );
};

export default Service;