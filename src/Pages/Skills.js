import React from "react";
import './skills.css';
import { Link } from "react-router-dom";

export default function Skills() {
    return(
        <>
         <header className="header-skills">
            <div className="containerNavBar-Aboutme">
                    <ul className="navigation-Aboutme">
                        <li><Link to="/" className="home-aboutmepage">Home</Link></li>
                    </ul>
                <div className="container-skills">
                    <div className="fullStack-skill">
                        <h2 className="h2-skills">Full Stack</h2>
                        <ul className="fullStackSkills">
                            <li className="fullStack">HTML5</li>
                            <li className="fullStack">CSS3</li>
                            <li className="fullStack">JavaScript</li>
                            <li className="fullStack">React</li>
                            <li className="fullStack">Redux</li>
                            <li className="fullStack">Bootstrap</li>
                            <li className="fullStack">Git</li>
                            <li className="fullStack">Knowledge of APIs</li>
                            <li className="fullStack">DOM</li>
                            <li className="fullStack">Responsive Design</li>
                            <li className="fullStack">Program Frameworks</li>
                            <li className="fullStack">Testing and Debugging</li>
                        </ul>
                    </div>
                    <div className="digitalSkills">
                        <h2 className="h2-skills">Digital Skills</h2>
                        <ul className="fullStackSkills">
                            <li className="fullStack">Adobe Photoshop</li>
                            <li className="fullStack">Microsoft Office</li>
                            <li className="fullStack">Adobe Illustrator</li>
                            <li className="fullStack">Lightroom</li>
                        </ul>
                    </div>
                    <div className="personalSkills">
                        <h2 className="h2-skills">Personal Skills</h2>
                        <ul className="fullStackSkills">
                            <li className="fullStack">Problem-solving</li>
                            <li className="fullStack">Good Communication and Interpersonal Skills</li>
                            <li className="fullStack">Creativity</li>
                            <li className="fullStack">Attention to Detail</li>
                            <li className="fullStack">Good Communication and Interpersonal Skills</li>
                            <li className="fullStack">A logical approach to work</li>
                            <li className="fullStack">The ability to explain technical matters clearly</li>
                        </ul>
                    </div>
                </div>
            </div>    
    </header>
        </>
    )
};