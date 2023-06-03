import React from "react";
import { Link } from "react-router-dom";
import project1 from "./images/Project1.png";
import project2 from "./images/Project2.png";
import project3 from "./images/project3.png";
import project4 from "./images/project4.png"
import { Carousel } from 'react-bootstrap';


export default function Projects() {
    return (
        <>
            <div className="Projects">
                <ul className="navigation-Prijects">
                    <li><Link to="/" className="home-projects">Home</Link></li>
                </ul>
            </div>
            <div className="containerProjects">
                <Carousel className="carousel " >

                    <Carousel.Item>
                        <img src={project1} alt="Project 1" className="imgProjects"/>
                        <Carousel.Caption className="carousel-caption">
                            <h5 className="h5CusomtYellow">Motivational Quotes App</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={project2} alt="Project 2" className="imgProjects"/>
                        <Carousel.Caption>
                            <h5 className="h5Cusomt">Css Grid Photoblog</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={project3} alt="Project 3" className="imgProjects"/>
                        <Carousel.Caption>
                            <h5 className="h5Cusomt">Calculator App</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={project4} alt="Project 3" className="imgProjects"/>
                        <Carousel.Caption>
                            <h5 className="h5Cusomt">Calculator App</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
            </div>
        </>
    )
};