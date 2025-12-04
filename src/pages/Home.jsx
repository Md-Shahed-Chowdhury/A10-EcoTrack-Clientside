import React from 'react';
import Slider from '../components/slider/Slider';
import Statistics from '../components/Statistics';
import ActiveChallenges from '../components/ActiveChallenges';

const Home = () => {
    return (
        <div className="space-y-7 md:space-y-10">
            <Slider></Slider>
            <Statistics></Statistics>
            <ActiveChallenges></ActiveChallenges>
        </div>
    );
};

export default Home;