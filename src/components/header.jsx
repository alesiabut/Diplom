import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../img/mylogochb.png"

const Header=()=>{
    return(
        <header>
            <div className="main-menu-area ptb-20">
                <div className="container nav">
                    <div className="row">

                        <div className="col-md-3 col-sm-2 hidden-xs">
                            <div className="logo ">
                                <NavLink to=""><img src={logo} alt="" className="mtb-15 podsvetka" style={{width:"50%"}}/></NavLink>
                            </div>
                        </div>

                        <div className="col-md-9 col-sm-10">

                            <div className="menu-area floatright hidden-xs">
                                <nav id='nav'>
                                    <ul>
                                        <li><NavLink exact to="">home</NavLink></li>
                                        <li><NavLink to="/about">about me</NavLink></li>
                                        <li><NavLink to="/portfolio">portfolio<i className="fa fa-angle-down"></i></NavLink>
                                            <ul className="submenu">
                                                <li><NavLink to="/portfolio-details">portfolio details</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/blog">blog</NavLink></li>
                                        <li><NavLink to="/contact">contacts</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>


                    <nav className="col-sm-12 navbar navbar-expand-lg navbar-light bg-light visible-xs">
                        <NavLink className="navbar-brand" to="" ><img src={logo} className="podsvetka" style={{width:"70%"}}/></NavLink>
                        <button className="navbar-toggler mt-10" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="">Home<span
                                        className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">about me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/portfolio" tabIndex="-1"
                                             aria-disabled="true">portfolio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/blog">blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">contacts</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>


                </div>
            </div>
        </header>
    )
}

export default Header;