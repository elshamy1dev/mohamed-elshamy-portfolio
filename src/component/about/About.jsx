import React from "react";
import "./About.css";
import Info from "./Info";
import {BsFillCloudDownloadFill} from "react-icons/bs"
import CV from "../../assets/Mohamed Sobhy Elshamy-CV.pdf"
import Stats from "./Stats";
import logo from "../../assets/my_logo.png"
import { BsFillPersonFill } from "react-icons/bs"


const About = () => {
    return(
        <section id="about" className="section container">
            <section className="about">
                <div className="container-logo">
                    <img className="logo-about" src={logo} alt="" />
                    <h2 className="section-title">About <span>ME</span> </h2>
                    <BsFillPersonFill className="btn-about" />
                </div>
                <div className="information">
                    <p>I am a <span>Full-Stack Developer</span> with a passion for creating interactive 
                        <br /> and responsive web application. I have experience working with <br />
                        <span>HTML, CSS, JavaScript, Bootstrap, React.js, Redux, Node.js, Express.js</span> & ...
                        <br />I am a quick learner and i am alawys looking to expand my knowledge<br />and skill set.
                    </p>
            
                </div>
                <div className="about-container grid">
                    <div className="about-info">
                        <h3 className="section-subtitle">Personal Infos<span> :-</span></h3>
                            <ul className="info-list grid">
                                <Info />
                            </ul>

                            <a href={CV} download="Mohamed Sobhy Elshamy-CV.pdf" className="button-cv">Download CV <span>
                                <BsFillCloudDownloadFill className="btn" />
                            </span></a>
                    </div>

                    <div className="stats grid">
                        <Stats />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default About