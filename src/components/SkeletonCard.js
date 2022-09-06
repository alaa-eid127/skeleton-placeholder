import React from 'react'
import { useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const SkeletonCard = ({ loading }) => {
    useEffect(() => {
        console.log(loading)
    }, [])

    return (
        <section  >
            <h2 className='section-header'><Skeleton width={100} /></h2>
            <ul className='container'>
                {Array(9).fill().map((_, index) => {
                    return (
                        <li className='card-item' key={index}>

                            <div className='card-image'>
                                <Skeleton height={100} width={300} />
                            </div>
                            <div className='card-title'>
                                <Skeleton width={200} />
                            </div>
                            <p className='card-channel'>
                                <Skeleton width={150} />

                            </p>
                            <div className='card-details'>
                                <Skeleton width={80} />
                                <Skeleton width={50} />
                            </div>

                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default SkeletonCard;