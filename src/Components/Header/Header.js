import React from 'react';
import './Header.css';
import img from '../../header.jpeg';

const Header = () => {

    return (
        <div className="header-bg">
            <div className="hero-image">
                <img src={img} alt="" />
            </div>
            <div className="">
                <div className="hero-text">
                    <h1>We Are Here For You</h1>
                    <p>You can join with us any time!!</p>
                    <button>ABOUT US</button>
                </div>

            </div>
        </div>
    );
};

export default Header;