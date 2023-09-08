import React from "react";
import { Link } from "react-router-dom";
import certificate1 from "./images/certificate1.png";
import certificate2 from "./images/certificate2.png";
import certificate3 from "./images/certificate3.png";
import certificate4 from "./images/certificate4.png";
import certificate5 from "./images/certificate5.png";
import certificate6 from "./images/certificate6.png";



export default function Projects() {
    return (
        <>
            <div className="Certificates">
                <ul className="navigation-Certificates">
                    <li><Link to="/" className="home-projects">Home</Link></li>
                </ul>
            </div>
            <div className="wrapper d-flex justify-content-center">
                <div className="containerCertificate d-flex align-items-center">
                    <div className="card-deck d-flex justify-content-around flex-wrap gap-10">
                        <div className="card card-zoom">
                            <img src={certificate1} className="card-img-top w-100" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Codecademy: Front-end Engineer</h5>
                            </div>
                        </div>
                        <div className="card card-zoom">
                            <img src={certificate2} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Codecademy: JavaScript</h5>
                            </div>
                        </div>
                        <div className="card card-zoom">
                            <img src={certificate3} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Codecademy: Bootstrap</h5>
                            </div>
                        </div>
                        <div className="card card-zoom">
                            <img src={certificate4} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Codecademy: Basics of Cybersecurity</h5>
                            </div>
                        </div>
                        <div className="card card-zoom-bottom mt-5">
                            <img src={certificate5} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Codecademy: React</h5>
                            </div>
                        </div>
                        <div className="card  card-zoom-bottom mt-5">
                            <img src={certificate6} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">StarTech Academy: compTIA ITF+</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};