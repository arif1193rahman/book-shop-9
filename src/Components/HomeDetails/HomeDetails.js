import React from 'react';
import './HomeDetails.css';
import { useState } from 'react';
import { useEffect } from 'react';
import HomeCard from '../HomeCard/HomeCard';

const HomeDetails = () => {

    const [infos, setInfos] = useState([]);

    useEffect(() => {
        fetch("./fakeData.JSON")
            .then(res => res.json())
            .then(data => setInfos(data))
    }, [])
    return (
        <div className="details">
            <h1 className="home-details">Hot Winter Packages</h1>

            <div className="row">
                {
                    infos.map(item => <HomeCard item={item}
                        key={item.id}
                    ></HomeCard>)
                }
            </div>

        </div>
    );
};

export default HomeDetails;