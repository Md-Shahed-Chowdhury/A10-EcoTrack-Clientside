import React from 'react';
import Slider from '../components/slider/Slider';
import Statistics from '../components/Statistics';

const Home = () => {
    return (
        <div className="space-y-7 md:space-y-10">
            <Slider></Slider>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;