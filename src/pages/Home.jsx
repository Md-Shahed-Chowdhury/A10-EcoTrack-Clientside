import React from 'react';
import Slider from '../components/slider/Slider';
import Statistics from '../components/Statistics';
import ActiveChallenges from '../components/ActiveChallenges';
import Tips from '../components/Tips';

const Home = () => {
    return (
        <div className="space-y-7 md:space-y-10">
            <Slider></Slider>
            <Statistics></Statistics>
            <ActiveChallenges></ActiveChallenges>
            <Tips></Tips>
        </div>
    );
};

export default Home;