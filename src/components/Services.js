import React from 'react';

import './Services.css';

const Services = () => {
  return (
    <div className='about'>
      <div className='about__contents container'>
        <section className='about__intro'>
          <h2 className='about__heading heading-text'>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </section>

        <section className='services'>
          <article className='article'>
            <img className='article__img' src='images/icon-online.svg' alt='' />
            <h3 className='article__heading heading-text'>Online Banking</h3>
            <p className='article__text'>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </article>
          <article className='article'>
            <img
              className='article__img'
              src='images/icon-budgeting.svg'
              alt=''
            />
            <h3 className='article__heading heading-text'>Simple Budgeting</h3>
            <p className='article__text'>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </article>
          <article className='article'>
            <img
              className='article__img'
              src='images/icon-onboarding.svg'
              alt=''
            />
            <h3 className='article__heading heading-text'>Fast Onboarding</h3>
            <p className='article__text'>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </article>
          <article className='article'>
            <img className='article__img' src='images/icon-api.svg' alt='' />
            <h3 className='article__heading heading-text'>Open API</h3>
            <p className='article__text'>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Services;
