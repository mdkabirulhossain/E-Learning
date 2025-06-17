import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
    return (
        <div>
            <h1>Learn anything, anytime, anywhere</h1>
            <p>With today’s digital tools, you can explore new skills, grow your expertise, and gain valuable insights from anywhere at any time.</p>
            <div>
                <button>Get started</button>
                <button>Learn more <img src={assets.arrow_icon} alt="arrow icon" /></button>
            </div>
        </div>
    );
};

export default CallToAction;