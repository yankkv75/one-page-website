import React from 'react'
import '../static/css/Footer.css'
import { Link } from 'react-router-dom'
import { Button } from './Button';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <h2 className='footer-subscription-heading'>
                    We would be happy to contribute to your trip.
                </h2>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Company</Link>
                        <Link to='/'>Reviews</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Help</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Find Us</h2>
                        <Link to={{ pathname: 'https://www.instagram.com' }} target='_blank'>Instagram <i className="fa-brands fa-instagram" /></Link>
                        <Link to={{ pathname: 'https://www.youtube.com' }} target='_blank'>YouTube <i className="fa-brands fa-youtube" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer