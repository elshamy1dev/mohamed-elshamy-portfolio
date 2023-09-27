import React from "react";
import "./Home.css"
import HomeSocial from "./HomeSocial";
import Name from "./Name";
import Main from "./Main";
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Home = () => {
    return(
        <header>
            <div className="container header-container">
                {/* <h1>Elshamy</h1> */}
                <Name />
                <h4>Full-Stack DEVeloper</h4>
                <HomeSocial />
            <Main />

            <a href="#footer" className="scroll-down">Scroll Down <BsFillArrowRightCircleFill /></a>
            </div>
        </header>
    )
}

export default Home;