import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = (props) => {
    const { img, sub, experienced, teacher, session, taka } = props.service;

    // Our Another Information UI
    return (
        <div className="col-md-4 service-details">
            <img src={img} alt="" />
            <h1>{sub}</h1>
            <small>Experience : {experienced}</small>
            <h4>Teacher:{teacher}</h4>
            <h3>{session} Months</h3>
            <h3>Package: {taka}</h3>
            <button className="btn btn-success">More Info</button>
        </div>

    );
};

export default ServiceDetails;