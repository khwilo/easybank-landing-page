import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container flow'>
        <div className='icons flow'>
          <img src='images/logo.svg' alt='logo' />

          <div className='sm-icons'>
            <img src='images/icon-facebook.svg' alt='' />
            <img src='images/icon-youtube.svg' alt='' />
            <img src='images/icon-twitter.svg' alt='' />
            <img src='images/icon-pinterest.svg' alt='' />
            <img src='images/icon-instagram.svg' alt='' />
          </div>
        </div>

        <nav className='footer__nav'>
          <ul className='footer__nav-list'>
            <div className='footer__nav-left'>
              <li className='footer__nav-item'>
                <a href='#about' className='footer__nav-link'>
                  About Us
                </a>
              </li>
              <li className='footer__nav-item'>
                <a href='#contact' className='footer__nav-link'>
                  Contact
                </a>
              </li>
              <li className='footer__nav-item'>
                <a href='#blog' className='footer__nav-link'>
                  Blog
                </a>
              </li>
            </div>
            <div className='footer__nav-right'>
              <li className='footer__nav-item'>
                <a href='#careers' className='footer__nav-link'>
                  Careers
                </a>
              </li>
              <li className='footer__nav-item'>
                <a href='#support' className='footer__nav-link'>
                  Support
                </a>
              </li>
              <li className='footer__nav-item'>
                <a href='#policy' className='footer__nav-link'>
                  Privacy Policy
                </a>
              </li>
            </div>
          </ul>
        </nav>

        <div className='footer__btnCopyright flow'>
          <div className='footer__btn'>
            <button className='action-btn'>Request invite</button>
          </div>

          <div className='footer__copyright'>
            <small className='copyright'>
              &copy; Easybank. All Rights Reserved
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
