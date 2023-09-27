import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap"

import cProgramming from "../../assets/c++.jpg"
import api from "../../assets/apipng.png"
import json from "../../assets/JSON-icon-2.jpg"
import postman from "../../assets/postman.webp"
import librariesJs from "../../assets/library-js.png"
import microsoftOffice from "../../assets/microsoft-office3327.jpg"
import mongoose from "../../assets/mongoose.jpg"
import responsiveLogo from "../../assets/responsive.png"
import git from "../../assets/Git-Icon-Black.png"
import oop from "../../assets/object-oriented-programming.jpg"
import figma from "../../assets/figma.png"

const OtherSkills = () => {
    const responsive = {
            superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
            }
        };


    return(
        <section className="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2 className="skill-title">Other <span>Skills</span></h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img className="item-logo" src={cProgramming} alt="logo" /> 
                                    <h2 className="item-title">C++</h2>
                                </div>

                                <div className="item">
                                    <img className="item-logo" src={responsiveLogo} alt="logo" /> 
                                    <h2 className="item-title">Responsive</h2>
                                        <h5 className="item-subtitle">(Media Queries)</h5>
                                </div>

                                <div className="item">
                                    <img className="item-logo" src={api} alt="logo" /> 
                                    <h2 className="item-title">API</h2>
                                </div>

                                <div className="item">
                                    <img className="item-logo" src={json} alt="logo" /> 
                                    <h2 className="item-title">JSON</h2>
                                </div>

                                <div className="item">
                                    <img className="item-logo" src={postman} alt="logo" /> 
                                    <h2 className="item-title">PostMan</h2>
                                </div>

                                <div className="item">
                                    <img className="item-logo" src={mongoose} alt="logo" /> 
                                    <h2 className="item-title">Mongoose Compass</h2>
                                </div>

                                <div className="item">
                                    <img className="item-logo" src={microsoftOffice} alt="logo" /> 
                                    <h2 className="item-title">MicroSoft Office</h2>
                                        <h5 className="item-subtitle">(Tools)</h5>
                                </div>

                                <div className="item">
                                    <img className="item-logo" src={librariesJs} alt="logo" /> 
                                    <h2 className="item-title">Many JS Libraries</h2>
                                </div>

                                <div className="item">
                                    <img className="item-logo" src={git} alt="logo" /> 
                                    <h2 className="item-title">Githup</h2>
                                </div>

                                <div className="item">
                                    <img className="item-logo" src={oop} alt="logo" /> 
                                    <h2 className="item-title">OOP</h2>
                                    <h5 className="item-subtitle">(Object-Oriented-Programming)</h5>
                                </div>

                                <div className="item">
                                    <img className="item-logo" src={figma} alt="logo" /> 
                                    <h2 className="item-title">Figam</h2>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OtherSkills;