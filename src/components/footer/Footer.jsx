import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="contacts">
          <ul className="contact">
            <li className="item">Privacy-Policy</li>
            <li>FAQ</li>
            <li>investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <ul className="contact">
            <div className="item">About</div>
            <li>Help center</li>
            <li>jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
          <ul className="contact">
            <li className="item">Blog</li>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Infomation</li>
            <li>Only on netflex</li>
          </ul>
          <ul className="contact">
            <li className="item">FAQ</li>
            <li>Media center</li>
            <li>Terms of Use</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
