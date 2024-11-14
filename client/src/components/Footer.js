// Footer.js
import React from "react";
import "./Footer.css";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
        <li className="menu__item" onClick={() => scrollToSection('events')}><a className="menu__link">Events</a></li>
        <li className="menu__item" onClick={() => scrollToSection('news')}><a className="menu__link">News</a></li>
        <li className="menu__item" onClick={() => scrollToSection('gallery')}><a className="menu__link">Gallery</a></li>
        <li className="menu__item" onClick={() => scrollToSection('aboutACM')}><a className="menu__link">About Us</a></li>
      </ul>
      <p>&copy;Made with   by Sudeep | BMSCE ACM Student Chapter | All rights reserved.</p>
    </footer>
  );
};

export default Footer;
