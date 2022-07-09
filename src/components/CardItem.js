import React from 'react'
import { Link } from 'react-router-dom'
import '../static/css/Cards.css'

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link to={props.path} className='cards__item__link'>
                    <figure data-category={props.label} className='cards__item__pic-wrap'>
                        <img
                            className='cards__item__img'
                            src={props.src}
                            alt='Travel Image'
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>
                            {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem