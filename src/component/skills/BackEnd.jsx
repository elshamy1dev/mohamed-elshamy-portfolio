import React from "react";
import NODE from "../../assets/node.png"
import EXPRESS from "../../assets/express.jpeg"
import NEXT from "../../assets/next.jpg"


const BackEnd = () => {
    return (
        <div className="back-end">
            <div className="node-express">
                <div className="node">
                    <p className="title">Node.JS</p>
                    <img className="logo" src={NODE} alt="logo node" />
                </div>
                <div className="express">
                    <p className="title">Express.JS</p>
                    <img className="logo" src={EXPRESS} alt="logo Express" />
                </div>
            </div>

        <h2 className="full"><span>*</span> Full-Stack <span>*</span></h2>
        <h4>FrameWork</h4>
            <div className="next">
                <p className="title-next">Next.JS</p>
                <img className="logo-next" src={NEXT} alt="logo next" />
            </div>

            
        </div>
    );
};

export default BackEnd;
