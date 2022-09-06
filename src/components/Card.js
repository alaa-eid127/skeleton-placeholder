import React from 'react'
import './card.css'
const Card = ({ item, channel }) => {
    return (

        <li className='card-item'>
            <a className='card-anchor'>
                <div className='card-image'><img src={item.image} /></div>
                <div className='card-title'>{item.title}</div>
                <p className='card-channel'><i>{channel}</i></p>
                <div className='card-details'>
                    <span>{item.views}</span>
                    <span>{item.published}</span>
                </div>
            </a>
        </li>

    )
}

export default Card