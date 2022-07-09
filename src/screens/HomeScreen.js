import React from 'react'
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';


function HomeScreen() {
    return (
        <>
            <HeroSection /> 
            <Cards />
        </>
    )
}

export default HomeScreen