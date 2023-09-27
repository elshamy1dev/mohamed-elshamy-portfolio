import React from "react";
import "./Skills.css"
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Mongo from "./Mongo";
import OtherSkills from "./OtherSkills";
// import logo from "../../assets/my_logo.png"
import { GiSkills } from "react-icons/gi"
import logo from "../../assets/my_logo.png"



const Skills = () => {
    return(
        <section id="skills">
            <div className="container-logo">
                    <GiSkills className="btn-about" />
                    <h2 className="section-title"><span>MY</span> Skills </h2>
                    <img style={{marginRight: "10px"}} className="logo-about" src={logo} alt="" />
                </div>
        <div className="container">
            <div className="container-skills">
                <div className="front">
                    <h2 className="name-1"> <span>*</span> Front End <span>*</span> </h2>
                    <FrontEnd />
                </div>
                <div className="back">
                    <h2 className="name-2"><span>*</span> Back End <span>*</span></h2>
                    <BackEnd />
                    <h2 className="database"><span>*</span> DataBase <span>*</span></h2>
                    <Mongo />
                </div>
            </div>
        </div>
        <OtherSkills />
        </section>
    )
}

export default Skills