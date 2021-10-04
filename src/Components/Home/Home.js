import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import HomeDetails from '../HomeDetails/HomeDetails';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="home-style">

            <Header></Header>
            <HomeDetails></HomeDetails>


        </div>
    );
};

export default Home;