import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"

const HomeSocial = () => {
    return(
        <div className="header-social">
            <a className="social" href="https://www.linkedin.com/in/mohamed-sophy-27314b268/" target="_blank" rel="noreferrer"> <BsLinkedin /> </a>

            <a className="social" href="https://github.com/elshamy1dev" target="_blank" rel="noreferrer"> <AiFillGithub /> </a>

            <a className="social" href="http://m.me/mohamed.alshamy.3150" target="_blank" rel="noreferrer"> <BsFacebook /> </a>
        </div>
    )
}

export default HomeSocial;