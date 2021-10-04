import React from 'react';

const ServiceDetails = (props) => {
    const { img, lan, teacher, section } = props.service;
    return (
        <div className="col-md-4 product-card product-section">
            <img src={img} alt="" />
            <h1>{lan}</h1>
            <h4>Teacher:{teacher}</h4>
            <h3>Section:{section}</h3>
        </div>
    );
};

export default ServiceDetails;