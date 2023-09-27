import React from "react";
import MONGO from "../../assets/mongoDB.png"

const Mongo = () => {
    return(
        <div className="mongo">
                <p className="title-mongo">MongoDB</p>
                <img className="logo" src={MONGO} alt="logo mongo" />
            </div>
    )
}

export default Mongo;