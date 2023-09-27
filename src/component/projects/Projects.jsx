import React from "react";
import "./Projects.css"
import Categories from "./CategoriesProject"
import logo from "../../assets/my_logo.png"
import { GoProjectRoadmap } from "react-icons/go"



const Projects = () => {
    return(
        <section id="projects">
                <div className="container-logo">
                    <GoProjectRoadmap className="btn-about" />
                    <h2 className="section-title"><span>MY</span> Projects </h2>
                    <img className="logo-about" src={logo} alt="" />
                </div>
            <Categories />
        </section>
    )
}

export default Projects;