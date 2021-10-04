import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import HomeDetails from '../HomeDetails/HomeDetails';
import Footer from '../Footer/Footer';
import Information from '../Information/Information';

const Home = () => {
    return (
        <div className="home-style">
            {/* receive all home UI */}
            <Header></Header>
            <HomeDetails></HomeDetails>
            <Information></Information>

        </div>
    );
};

export default Home;