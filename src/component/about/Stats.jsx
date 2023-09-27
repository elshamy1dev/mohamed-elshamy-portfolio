import React from "react";
import "./About.css";
import { stats } from "../../Data";
import parse from "html-react-parser"

const Stats = () => {
    return(
        <div>
            {stats.map(({no, title}, index) => {
                return(
                    <div className="stats-box" key={index}>
                        <h2 className="stats-no">{no}</h2>
                        <p className="stats-title">{parse(title)}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Stats;