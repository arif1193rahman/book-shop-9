import React from 'react';
import './About.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


const About = () => {
    // Chart information
    const data = [
        { name: '2016', uv: 400, pv: 2400, amt: 2400 },
        { name: '2017', uv: 300, pv: 2400, amt: 2400 },
        { name: '2018', uv: 200, pv: 2400, amt: 2400 },
        { name: '2019', uv: 400, pv: 2400, amt: 2400 },
        { name: '2020', uv: 500, pv: 2400, amt: 2400 },
        { name: '2021', uv: 300, pv: 2400, amt: 2400 },
        { name: '2022', uv: 500, pv: 2400, amt: 2400 }
    ];
    return (
        <div className="chart-head">
            <h1>Our Business Progress</h1>
            <div className="chart-list">
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        </div>
    );
};

export default About;