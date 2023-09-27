import React from "react";
import "./Footer.css"
import {IoLogoWhatsapp} from "react-icons/io"
import {BsMessenger} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import logo from "../../assets/my_logo.png"
import {BsFillArrowUpCircleFill} from "react-icons/bs"


const Footer = () => {
    return(
        <section id="footer">
            <div className="container-footer">
                <div className="main-footer">
                    <h1>ELSHAMY</h1>
                    <div className="social-footer">
                    <a 
                    href="https://wa.me/201096601061"
                    target="_blank" rel="noreferrer">
                        <IoLogoWhatsapp className="icon-footer" />
                    </a>

                    <a 
                    href="http://m.me/mohamed.alshamy.3150" 
                    target="_blank" rel="noreferrer">
                        <BsMessenger className="icon-footer" />
                    </a>

                    <a 
                    href="https://www.linkedin.com/in/mohamed-sophy-27314b268/" 
                    target="_blank" rel="noreferrer">
                        <BsLinkedin className="icon-footer" />
                    </a>
                    </div>
                    <a href="#" className="scroll-up">Scroll Up <BsFillArrowUpCircleFill /></a>
                </div>

                <div className="secondray-footer container">
                    <ul className="footer-links">
                        <li><a className="footer-link" href="#">Home </a></li>
                        <li><a className="footer-link" href="#about">About </a></li>
                        <li><a className="footer-link" href="#skills">Skills </a></li>
                        <li><a className="footer-link" href="#services">Services </a></li>
                        <li><a className="footer-link" href="#projects">Projects </a></li>
                        <li><a className="footer-link" href="#contacts">Contact </a></li>
                    </ul>
                    <img className="footer-logo" src={logo} alt="" />
                </div>

                <div className="footer-copyright">
                    <p>&copy; created by:- <span>Mohamed Elshamy</span></p>
                    <h1>Full-Stack Developer</h1>
                </div>
            </div>
        </section>
    )
}

export default Footer;