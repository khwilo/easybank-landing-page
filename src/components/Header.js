import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__contents container'>
        <img src='images/logo.svg' alt='logo' />
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='/' className='nav__link'>
                Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                Contact
              </a>
            </li>
            <li className='nav__item'>
              <a href='#blog' className='nav__link'>
                Blog
              </a>
            </li>
            <li className='nav__item'>
              <a href='#careers' className='nav__link'>
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <button className='action-btn header__btn'>Request invite</button>
        <img
          src='images/icon-hamburger.svg'
          alt='hamburger icon'
          className='hamburger-icon'
        />
      </div>
    </header>
  );
};

export default Header;
