import React from 'react';
import './HomeCard.css';

const HomeCard = (props) => {

    const { img, sub, time, teacher, taka } = props.item;

    return (

        <div className="col-md-4 product-card product-section">

            <img src={img} alt="" />
            <h2>{sub}<hr /></h2>
            <small>Trainer</small>
            <h1>{teacher}</h1>
            <h4>{time} Months</h4>
            <br />
            <h5>${taka}</h5>

        </div>

    );
};

export default HomeCard;