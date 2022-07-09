import React from 'react';
import '../static/css/Button.css';
import { Link } from 'react-router-dom'


const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    OnClick,
    buttonStyle,
    buttonSize
}) => {
    const CheckButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const CheckButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            {/* Whatever u put inside of the button, its going to to render that */}
            <button
                className={`btn ${CheckButtonStyle} ${CheckButtonSize}`}
                onClick={type}
            >
                {children}
            </button>

        </Link>

    )
};

export const TrailerButton = ({
    children,
    type,
    OnClick,
    buttonStyle,
    buttonSize
}) => {
    const CheckButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const CheckButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to={{ pathname: 'https://www.youtube.com/watch?v=7lvXbfNBIQg' }} target='_blank' className='btn-mobile'>
            {/* Whatever u put inside of the button, its going to to render that */}
            <button
                className={`btn ${CheckButtonStyle} ${CheckButtonSize}`}
                onClick={type}
            >
                {children}
            </button>

        </Link>

    )
};
