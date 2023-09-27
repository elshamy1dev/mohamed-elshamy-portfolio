import React from "react";
import "./Nav.css"
import { AiFillHome } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { GiSkills } from "react-icons/gi"
import { MdDesignServices } from "react-icons/md"
import { GoProjectRoadmap } from "react-icons/go"
import { MdOutlineContactMail } from "react-icons/md"

import { useState } from "react"


const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");


    return(
        <nav className="navbar">
            <a onClick={() => setActiveNav("#")} className={activeNav === "#" ? 'active'  : ""}href="#"> <AiFillHome /> </a>
            <a onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""} href="#about"> <BsFillPersonFill /> </a>
            <a onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""} href="#skills"> <GiSkills /> </a>
            <a onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""} href="#services"> <MdDesignServices /> </a>
            <a onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""} href="#projects"> <GoProjectRoadmap /> </a>
            <a onClick={() => setActiveNav("#contacts")} className={activeNav === "#contacts" ? "active" : ""} href="#contacts"> <MdOutlineContactMail /> </a>
        </nav>
    )
}

export default Nav;