import React from "react";
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
                    <div className="frontend-skill">
                        <h2 className="h2-skills">Front-End</h2>
                        <ul className="frontendskills">
                            <li className="frontend">HTML5/CSS3</li>
                            <li className="frontend">JavaScript</li>
                            <li className="frontend">React</li>
                            <li className="frontend">Redux</li>
                            <li className="frontend">Bootstrap</li>
                            <li className="frontend">Git/GitHub</li>
                            <li className="frontend">Knowledge of APIs</li>
                            <li className="frontend">DOM</li>
                            <li className="frontend">Responsive Design</li>
                            <li className="frontend">Program Frameworks</li>
                            <li className="frontend">Testing and Debugging</li>
                        </ul>
                    </div>
                    <div className="digitalSkills">
                        <h2 className="h2-skills">Digital Skills</h2>
                        <ul className="frontendskills">
                            <li className="frontend">Adobe Photoshop</li>
                            <li className="frontend">Microsoft Office</li>
                            <li className="frontend">Adobe Illustrator</li>
                            <li className="frontend">Lightroom</li>
                        </ul>
                    </div>
                    <div className="personalSkills">
                        <h2 className="h2-skills">Personal Skills</h2>
                        <ul className="frontendskills">
                            <li className="frontend">Problem-solving</li>
                            <li className="frontend">Good Communication and Interpersonal Skills</li>
                            <li className="frontend">Creativity</li>
                            <li className="frontend">Attention to Detail</li>
                            <li className="frontend">Good Communication and Interpersonal Skills</li>
                            <li className="frontend">A logical approach to work</li>
                            <li className="frontend">The ability to explain technical matters clearly</li>
                        </ul>
                    </div>
                </div>
            </div>    
    </header>
        </>
    )
};