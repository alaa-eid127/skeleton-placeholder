import React from 'react'
import Card from './Card'
import './CardList.css'
const CardList = ({ list }) => {

    return (
        <ul className='container'>
            {list.items.map((item, index) => {
                return (
                    <Card item={item} channel={list.channel} key={index} />
                )
            })}
        </ul>
    )
}

export default CardList