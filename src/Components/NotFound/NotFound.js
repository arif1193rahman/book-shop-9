import React from 'react';
import img from '../../notfound.jpg';
import './NotFound.css';

const NotFound = () => {
    // not found page by image 
    return (
        <div>
            <img className="notFound" src={img} alt="" />
        </div>
    );
};

export default NotFound;