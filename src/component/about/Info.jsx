import React from "react";
import "./About.css"
import { personalInfo } from "../../Data";

const Info = () => {
    return(
        <div>
            {personalInfo.map(({title, description}, index) => {
                return(
                    <li className="info-item" key={index}>
                        <span className="info-title">{title}{">"}</span>
                        <span className="info-desc">{description}</span>
                    </li>
                )
            })}
        </div>
    )
}

export default Info;