import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakeService.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="head"> <u>Our Services</u> </h1>
            <div className="row">
                {
                    services.map(service => <ServiceDetails
                        service={service}
                        key={service.id}
                    ></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Service;