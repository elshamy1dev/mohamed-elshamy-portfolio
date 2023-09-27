import React from "react";
// import { FrontEndSkills } from "../../SkillsData";
import HTML from "../../assets/html.png"
import CSS from "../../assets/css.jpg"
import JS from "../../assets/js.png"
import BOOTSTRAP from "../../assets/bootstrap.webp"
import UI from "../../assets/material-ui.webp"
import REACT from "../../assets/react.png"
import REDUX from "../../assets/reduxpng.png"
import REACT_REDUX from "../../assets/REact-Redux.png"
import REDUX_TOOLKIT from "../../assets/redux_toolkit.jpg"





const FrontEnd = () => {
    return (
        <div className="front-end">
            <div className="html_css">
                <div className="html">
                    <p className="title">HTML</p>
                    <img className="logo" src={HTML} alt="logo html" />
                </div>
                <div className="css">
                    <p className="title">CSS</p>
                    <img className="logo" src={CSS} alt="logo css" />
                </div>
            </div>

            <div className="js">
                <p className="title-js">JavaScript</p>
                <img className="logo-js" src={JS} alt="logo js" />
            </div>

            <div className="bootstrap-ui">
                <div className="bootstrap">
                    <p className="title">Bootstrao</p>
                    <img className="logo" src={BOOTSTRAP} alt="logo bootstrap" />
                </div>
                <div className="ui">
                    <p className="title">Material-UI</p>
                    <img className="logo" src={UI} alt="logo UI" />
                </div>
            </div>

            <div className="react">
                <p className="title-react">React.JS</p>
                <img className="logo-react" src={REACT} alt="logo react" />
            </div>

            <div className="react-redux-toolkit">
                <div className="redux">
                    <p className="title">Redux</p>
                    <img className="logo" src={REDUX} alt="logo redux" />
                </div>
                <div className="react-redux">
                    <p className="title">React-Redux</p>
                    <img className="logo" src={REACT_REDUX} alt="logo redux" />
                </div>
                <div className="redux-toolkit">
                    <p className="title">Redux-Toolkit</p>
                    <img className="logo" src={REDUX_TOOLKIT} alt="logo redux" />
                </div>
            </div>
        </div>
    );
};

export default FrontEnd;
