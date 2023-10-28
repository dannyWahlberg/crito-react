import React from 'react'

import logo_footer from '../assets/images/crito-logo-footer.svg'
import footer_waves from '@images/footer-waves.svg'

const Footer = () => {
  return (
    <footer>

    <div className="content container">

        <div className="crito-logo">
            <a href="#"><img src={logo_footer} alt="crito logo" /></a>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates!
                Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
            </p>
        </div>



        <div className="company">
            <h3>Company</h3>

            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Works</a></li>
                <li><a href="">Career</a></li>
            </ul>
        </div>

        <div className="help">
            <h3>Help</h3>
            <ul>
                <li><a href="">Customer Support</a></li>
                <li><a href="">Delivery Details</a></li>
                <li><a href="">Terms & Conditions</a></li>
                <li><a href="">Privacy Policy</a></li>
            </ul>
        </div>

        <div className="resources">
            <h3>Resources</h3>
            <ul>
                <li><a href="">Free eBooks</a></li>
                <li><a href="">Development Tutorial</a></li>
                <li><a href="">How to - Blog</a></li>
                <li><a href="">Youtube Playlist</a></li>
            </ul>
        </div>

        <div className="links">
            <h3>Link</h3>
            <ul>
                <li><a href="">Free eBooks</a></li>
                <li><a href="">Development Tutorial</a></li>
                <li><a href="">How to - Blog</a></li>
                <li><a href="">Youtube Playlist</a></li>
            </ul>
        </div>



    </div>
    <div className="bottom">
        <img className="footer-wave" src={footer_waves} alt="" />
        <div className="bottom-section container">
            <p className="copyright">
                © 2023 Crito - Consulting Company Inc. All Rights Reserved.
            </p>
            <div className="socialmedia-bar">
                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>

        </div>
    </div>




</footer>
  )
}

export default Footer