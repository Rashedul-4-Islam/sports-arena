import React from 'react';

const Servicess = (props) => {
    const {pic,name,description} =props.service;
    return (
        <div className="w-75">
                        <img className=" images" src={pic} alt="" />
                        <h2>{name}</h2>
                        <p>{description}</p>
        </div>
    );
};

export default Servicess;