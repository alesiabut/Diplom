import React from "react";
import img1 from '../img/ola.jpg'
import {NavLink} from "react-router-dom";
const PersonalInfo =()=>{
    return(
        <div className="media-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="single-media mb-30">
                            <div className="media-text">
                                <h5><a href="#">welcome to <strong>OLGA</strong></a></h5>
                                <p>Lorem ipsum scelerisque molestie id molestie magna ante etiam sollicitudin tempus
                                    consectetur conubia, urna eros nunc curabitur viverra rutrum tortor luctus torquent
                                    mollis est dictum euismod.We love products that work perfectly and look beautiful.
                                    urna eros nunc curabitur viverra rutrum tortor luctus torquent mollis est dictum</p>
                                <blockquote>Lrna eros nunc curabitur viverra rutrum tortor luctus torquent mollis est
                                    dictum euismod.We love products that work perfectly and look beautifula.rutrum
                                    tortor luctus torquent mollis est dictum euismod.
                                </blockquote>
                                <p>Lorem ipsum scelerisque molestie id molestie magna ante etiam sollicitudin tempus
                                    consectetur conubia, urna eros nunc curabitur viverra rutrum tortor luctus torquent
                                    mollis est dictum euismod.We love products that work perfectly and look
                                    beautiful.</p>
                                <NavLink to="/blog">learn more</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="media-img mb-30 imgblock">
                            <img src={img1} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PersonalInfo;