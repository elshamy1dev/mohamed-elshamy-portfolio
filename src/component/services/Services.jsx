import React from "react";
import {BsCheck2All} from "react-icons/bs"
import "./Services.css"
import { MdDesignServices } from "react-icons/md"
import logo from "../../assets/my_logo.png"
import OtherServices from "./OtherServices";


const Services = () => {
    return(
        <section id="services">

                <div className="container-logo">
                    <MdDesignServices className="btn-about" />
                    <h2 className="section-title"><span>MY</span> Services </h2>
                    <img className="logo-about" src={logo} alt="" />
                </div>

            <div className="container services-container">
                <article className="service">
                    <div className="service-head">
                        <h3>Front-end</h3>
                        <h3 className="dev">Development</h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Designing and Developing the User Interface.</p>
                        </li>
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Using the most famous framework, which is <span>React.JS</span>.</p>
                        </li>
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Using <span>JavaScript</span> to build an interactive websites.</p>
                        </li>
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Create a <span>responsive</span> website design for all screens.</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service-head">
                        <h3>Web design</h3>
                    </div>
                    <ul className="service-list-special">
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Fundamentals of websites design using <span>HTML, CSS</span>.</p>
                        </li>
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Colors coordination.</p>
                        </li>
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Images formatting.</p>
                        </li>
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Fonts formatting and sizes.</p>
                        </li>
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Master design tools such as <span>Figma</span>.</p>
                        </li>
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Building hight-rise <span>Projects</span>.</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service-head">
                        <h3>Back-end</h3>
                        <h3 className="dev">Development</h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Handling data, servers, and <span>HTTP</span> services.</p>
                        </li>
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Using the most famous framework, which is <span>Express.JS</span>.</p>
                        </li>
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Handling <span>Authorization, Authentication,</span> and other related <span>technologies</span>.</p>
                        </li>
                        <li>
                            <BsCheck2All className="service-list-icon" />
                            <p>Woking with databases like <span>MongoDB</span>.</p>
                        </li>
                    </ul>
                </article>

            </div>
                <OtherServices />
        </section>
    )
}

export default Services;