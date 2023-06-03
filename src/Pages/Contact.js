import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
    return(
        <>
        <header>
        <div className="about-me">
            <ul className="navigation-Aboutme">
                <li><Link to="/" className="home-aboutmepage">Home</Link></li>
            </ul>
        </div>
        <div className="containerHeadingContact">
            <h2 className="h2Contact">Contact</h2>
        </div>
        <div className="wraper">
            <ul className="ulContainer-contact">
                <li className="liContact">
                  <a className="github" href="https://github.com/AdrianM999/About-me.git">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="liContact">
                  <a className="linkedin" href="https://www.linkedin.com/feed/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="liContact">
                  <a className="instagram" href="https://www.instagram.com/adrian__mititelu/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="liContact">
                    <a className="google" href="mailto:mititeluadrian9@gmail.com">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </a>
                  </li>
            </ul>
        </div>
    </header>        
        </>
    )
};