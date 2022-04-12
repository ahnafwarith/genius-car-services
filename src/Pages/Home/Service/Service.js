import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <div>
            <div className='container-service'>
                <img src={img} />
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;