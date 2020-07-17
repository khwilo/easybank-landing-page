import React from 'react';
import './Posts.css';

const Posts = () => {
  return (
    <section className='section__posts'>
      <div className='section__posts-container container'>
        <h2 className='section__posts-title heading-text'>Latest Articles</h2>

        <div className='posts'>
          <article className='post'>
            <div className='post__cover'>
              <img
                className='post__img'
                src='images/image-currency.jpg'
                alt='bank notes'
              />
            </div>
            <div className='post__container'>
              <small className='post__author'>By Claire Robinson</small>
              <h3 className='post__title heading-text'>
                Receive money in any currency with no fees
              </h3>
              <p className='post__content'>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </article>
          <article className='post'>
            <div className='post__cover'>
              <img
                className='post__img'
                src='images/image-restaurant.jpg'
                alt='restaurant'
              />
            </div>
            <div className='post__container'>
              <small className='post__author'>By Wilson Hutton</small>
              <h3 className='post__title heading-text'>
                Treat yourself without worrying about money
              </h3>
              <p className='post__content'>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </article>
          <article className='post'>
            <div className='post__cover'>
              <img
                className='post__img'
                src='images/image-plane.jpg'
                alt='plane wing'
              />
            </div>
            <div className='post__container'>
              <small className='post__author'>By Wilson Hutton</small>
              <h3 className='post__title heading-text'>
                Take your Easybank card wherever you go
              </h3>
              <p className='post__content'>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </article>
          <article className='post'>
            <div className='post__cover'>
              <img
                className='post__img'
                src='images/image-confetti.jpg'
                alt='confetti'
              />
            </div>
            <div className='post__container'>
              <small className='post__author'>By Claire Robinson</small>
              <h3 className='post__title heading-text'>
                Our invite-only Beta accounts are now live!
              </h3>
              <p className='post__content'>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Posts;
