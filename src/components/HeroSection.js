import React from 'react';
import '../App.css';
import { Button, TrailerButton} from './Button';
import '../static/css/HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>CHOOSE YOUR OWN ADVENTURE</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <TrailerButton
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='fa-solid fa-play' />
                </TrailerButton>
            </div>
        </div>
    )
}

export default HeroSection