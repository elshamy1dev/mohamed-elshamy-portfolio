import React from "react";
import {FaMobile} from "react-icons/fa"
import {MdScreenshotMonitor} from "react-icons/md"
import {AiOutlineBgColors} from "react-icons/ai"
import {BiCodeAlt} from "react-icons/bi"
import {BiErrorCircle} from "react-icons/bi"
import {GiTakeMyMoney} from "react-icons/gi"





const OtherServices = () => {
    return(
        <div className="other-services container">
            <div className="title-other">
                <h2><span>*Other</span> Services*</h2>
            </div>
            <div className="other">
                <div className="box-other">
                    <MdScreenshotMonitor className="icon-box-other" />
                    <h2 className="title-box-other">Responsive Web</h2>
                    <p className="desc-box-other">Responsive web with all computers and easy to use on devices.</p>
                </div>

                <div className="box-other">
                    <FaMobile className="icon-box-other" />
                    <h2 className="title-box-other">Mobile Site </h2>
                    <p className="desc-box-other">Responsive web with all phones and easy to use on devices.</p>
                </div>

                <div className="box-other">
                    <AiOutlineBgColors className="icon-box-other" />
                    <h2 className="title-box-other">Beautiful Colors</h2>
                    <p className="desc-box-other">Compfortable colors for the eye and wonderful, The art of choosing colors.</p>
                </div>

                <div className="box-other">
                    <BiCodeAlt className="icon-box-other" />
                    <h2 className="title-box-other">Simple Code </h2>
                    <p className="desc-box-other">Simple and easy code that you can use at any time and modify it.</p>
                </div>

                <div className="box-other">
                    <BiErrorCircle className="icon-box-other" />
                    <h2 className="title-box-other">No ERROR</h2>
                    <p className="desc-box-other">There are no mistakes in the work because of the great experience.</p>
                </div>

                <div className="box-other">
                    <GiTakeMyMoney className="icon-box-other" />
                    <h2 className="title-box-other">Earn Money </h2>
                    <p className="desc-box-other">You can create a website to earn money and benefit others.</p>
                </div>
            </div>
        </div>
    )
}

export default OtherServices;