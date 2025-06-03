import React from 'react'
import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg';

const InfoBox = ({ text, link, btnText }) => {
    return (<div className="info-box neo-brutalism-blue">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>)
}

const renderContent = {
    0: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I'm <span className='font-semibold'>Ian</span>!
            <br/>
            A Computer Science student from the Bay Area, CA
        </h1>
    ),
    1: (
        <InfoBox 
            text="Shipped code, solved problems, and grew with every challenge"
            link="/about"
            btnText="Learn about me"
        />
    ),
    2: (
        <InfoBox 
            text="Collaborated in many projects over the years. Curious about the impact?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    3: (
        <InfoBox 
            text="Looking for a dev? I'm just a few keystrokes away"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
