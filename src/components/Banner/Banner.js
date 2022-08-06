import React from 'react';
import './Banner.css';
import BannerImage from '../../images/bannerbackground.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-image'>
               <img src={BannerImage} alt='Banner Image'/>
            </div>
            <div className='banner-text'>
                <h2>Best Food Waiting For Your Belly</h2>
                <input className='search' type="search"></input>
                <input className='submit' type="submit"></input>
            </div>
        </div>
    );
};

export default Banner;