import React from "react";
// import ME from "../../../src/assets/"
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import ME from "../../assets/me1.png"
import logo from "../../assets/my_logo.png"

// animate Web Developer, ...
import { useState, useEffect } from "react";


const Main = () => {
    // animate Web Developer
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Designer", "Programmer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 1000;

        useEffect(() => {
            let ticker = setInterval(() => {
                tick()
            }, delta)

            return () => {clearInterval(ticker)}
        }, [text])

        const tick = () => {
            let i = loopNum % toRotate.length
            let fullText = toRotate[i]
            let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)  
        
            setText(updateText)

            if(isDeleting) {
                setDelta(prevDelta => prevDelta /2)
            }

            if(!isDeleting && updateText === fullText) {
                setIsDeleting(true)
                setDelta(period)
            } else if (isDeleting && updateText === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                setDelta(500)
            }
        }



    return(
        <div className="main">
            <div className="info">
                <h2>Hello<span  className="name-title">,</span> My name is <span className="name-title">Mohamed Elshamy</span>, </h2>
                <h2 className="animate">I'am a <span className="text">{text}</span> </h2>
                <div className="button">
                <a href="#contacts">
                    <button className="btn-connect">Let's Connect <BsFillArrowDownCircleFill /> </button>
                </a>
                </div>
                <img className="logo" src={logo} alt="" />
            </div>

            <div className="me">
                <img src={ME} alt="me" />
            </div>
        </div>
    )
}

export default Main;