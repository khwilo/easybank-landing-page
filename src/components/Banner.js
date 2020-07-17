import React from 'react';

import './Banner.css';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='banner__contents container'>
        <div className='banner__about'>
          <h1 className='banner__title heading-text'>
            Next generation digital banking
          </h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className='action-btn'>Request invite</button>
        </div>

        <img
          src='images/image-mockups.png'
          alt='mobile phones'
          className='banner__image'
        />
      </div>
    </section>
  );
};

export default Banner;
