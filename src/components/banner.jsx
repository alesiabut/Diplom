import React from "react";
import img1 from "../img/slide1-1.jpg"
import {NavLink} from "react-router-dom";

const Banner =(props)=>{
    return (
        <div className="imgblock">
            <img src={img1} />

            <div className="textblock">

                <span><NavLink to="">home</NavLink><h3>{props.h3}</h3></span>

            </div>

        </div>
    );
}
export default Banner;