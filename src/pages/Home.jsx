import React from 'react';
import Slider from '../components/slider/Slider';
import Statistics from '../components/Statistics';
import ActiveChallenges from '../components/ActiveChallenges';
import Tips from '../components/Tips';
import UpcomingEvents from '../components/UpcomingEvents';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
const Home = () => {
    return (
        <div className="space-y-7 md:space-y-10">
            <Slider></Slider>
            <Statistics></Statistics>
            <ActiveChallenges></ActiveChallenges>
            <Tips></Tips>
            <UpcomingEvents></UpcomingEvents>
            <Benefits></Benefits>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;