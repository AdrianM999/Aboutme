import React from "react";
import './Home.css'
import { Link } from "react-router-dom";
export default function Home() {
    return(
        <>
         
            <header className="header-home">
            <div className='container'>
                <nav className="container-navbar">
                    <ul>
                        <li><Link to="/contact" className="right">Contact</Link></li>
                        <li><Link to="/projects" className="right">Projects</Link></li>
                        <li><Link to="/skills" className="right">Skills</Link></li>
                        <li><Link to="/aboutme">About Me</Link></li>
                    </ul>
                </nav>
                <div className="container-heading">
                    <div className="heading">
                        <h2 className="h2-home">Adrian</h2>
                        <h1 className="h1-home">Mititelu</h1>
                        <span className="span-home">Web Developer</span>
                    </div>
                </div>
            </div>
            </header>
        </>
    )
};