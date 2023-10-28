import React from 'react'

import logo from '@images/logo.svg'


const Header = () => {
  return (
    <header>
    <div class="container">
        <button class="btn-menubars"><i class="fa-solid fa-bars-staggered"></i></button>
        <div class="logotype">
            <a href="index.html">
                <img src={logo} alt="crito logotype" />
            </a>
        </div>
        <div class="contactinformation-bar">
            <div class="content-box">
                <i class="fa-regular fa-phone-volume"></i>
                +46 (8) 121 470 50
            </div>
            <div class="content-box">
                <i class="icon-border fa-regular fa-envelope-dot"></i>
                info@crito.com
            </div>
            <div class="content-box last">
                <i class="icon-border fa-regular fa-location-dot"></i>
                Sveavägen 31, 111 34 STOCKHOLM
            </div>
        </div>

        <div class="socialmedia-bar">
            <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div class="menu">
            <nav>
                <a class="active" href="index.html">Home</a>
                <a href="service.html">Service</a>
                <a href="news.html">News</a>
                <a href="contact.html">Contact</a>
            </nav>
            <a class="btn-yellow login-btn" href="login.html">Login<i
                    class="fa-regular fa-arrow-up-right"></i></a>
        </div>

    </div>
</header>
  )
}

export default Header