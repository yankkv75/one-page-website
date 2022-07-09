import React from 'react'
import CardItem from './CardItem.js'
import '../static/css/Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this places</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-kyiv.jpg'
                            text='Monument in Ukraine - Motherland'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-khortytsia.jpg'
                            text='The reserve Khortytsya has a steady image of cradles of Zaporizhzhya Cossacks'
                            label='History'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-travel-bus.jpg'
                            text='Explore the hidden treasures of untouched nature'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-canyon.jpg'
                            text='This Fjaðrárgljúfur canyon in South-Iceland is one of the most spectacular canyons of Iceland'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-valley.jpg'
                            text='A day hike above Manang Valley in Nepal'
                            label='Adventure'
                            path='/services'
                        />

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards