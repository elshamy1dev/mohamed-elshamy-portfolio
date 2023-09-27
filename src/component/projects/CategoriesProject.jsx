import React, { useState } from "react";
import { ProjectsDetails } from "./ProjectsData";
import { Link, useNavigate } from "react-router-dom"


const CategoriesProject = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const filteredProjects = selectedCategory
        ? ProjectsDetails.filter((item) => item.category === selectedCategory) : ProjectsDetails;

        const navigate = useNavigate();


        const handleButtonClick = (project) => {
            navigate("/project-details");
        }


        
    return(
        <div className="container cate-container">
            <div className="cate cate-all">
                <h3 onClick={() => setSelectedCategory(null)} className="all">All</h3>
            </div>

            <div className="cate-html">
                <h3 onClick={() => setSelectedCategory("HTML, CSS")} className="html-css">HTML, CSS</h3>
                <h3 onClick={() => setSelectedCategory("HTML, CSS, JS")} className="html-css-js">HTML, CSS, JS</h3>
                <h3 onClick={() => setSelectedCategory("BOOTSTRAP")} className="boot">BOOTSTRAP</h3>
                <h3 onClick={() => setSelectedCategory("React.js")} className="React">React.js</h3>
                <h3 onClick={() => setSelectedCategory("HTML, CSS, JS, JQUERY")} className="jquery">HTML, CSS, JS, JQUERY</h3>
                <h3 onClick={() => setSelectedCategory("React.js, Material-UI")} className="m-ui">React.js, Material-UI</h3>
            </div>

            <div className="cate cate-ex">
                <h3 onClick={() => setSelectedCategory("React.js, Express.js")} className="ex">React.js, Express.js <span>"</span>Full-Stack App<span>"</span></h3>
            </div>

            <div className="project-container contrainer">
            {
                filteredProjects.map((project) => {
                    return(
                        <article key={project.id} className="project-item">
                            <div className="project-item-image">
                                <img className="project-img" src={project.image} alt="" />
                            </div>
                            <h3>{project.title}</h3>
                            {/* <Link to={`/${project.id}`} className="btn-project" onClick={() => handleButtonClick(project)}> </Link> */}
                            <li key={project.id}>
                                <Link to={`/project/${project.id}`} className="btn-project" >Details about this <span>APP</span></Link>
                            </li>
                        </article>
                    )
                })
            }
        </div>
        </div>
    )
}

export default CategoriesProject;