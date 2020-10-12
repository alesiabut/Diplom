import React from "react";
import {NavLink} from "react-router-dom";
import img1 from "../img/austriachb.JPG";
import img2 from "../img/travel5.JPG";
import img3 from "../img/travel2.JPG";
import img4 from "../img/P1.jpg";
import img5 from "../img/T1.JPG";
import img6 from "../img/macro3.JPG";
import img7 from "../img/macro16.JPG";
import img8 from "../img/chb3.JPG";
import img9 from "../img/chb6.JPG";
import img10 from "../img/T2.JPG";
import img11 from "../img/macro2.JPG";
import img12 from "../img/travel6.JPG";


const Portfolio =()=>{
    return (
        <div className="portfolio-area pt-100 pb-70">
            <div className="container mb-15">
                <div className="portfolio-menu">
                    <button className="active" data-filter="*">all</button>
                    <button data-filter=".cat1">Travel</button>
                    <button data-filter=".cat2">Still Life</button>
                    <button data-filter=".cat3">Black&White</button>
                    <button data-filter=".cat3">MacroLife</button>
                </div>
                <div className="row">
                    <div className="grid">
                        <div className="col-md-4 grid-item cat1 col-sm-4">
                            <div className="single-portfolio">
                                <div className="portfolio">
                                    <img src={img1} alt=""/>
                                </div>
                                <div className="portfolio-titles">
                                    <h2><NavLink to="/portfolio-details">Travel</NavLink></h2>
                                    <span>My Art</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 grid-item cat2 col-sm-4">
                            <div className="single-portfolio">
                                <div className="portfolio">
                                    <img src={img2} alt=""/>
                                </div>
                                <div className="portfolio-titles">
                                    <h2><NavLink to="/portfolio-details">Travel</NavLink></h2>
                                    <span>My Art</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 grid-item cat3 col-sm-4">
                            <div className="single-portfolio">
                                <div className="portfolio">
                                    <img src={img3} alt=""/>
                                </div>
                                <div className="portfolio-titles">
                                    <h2><NavLink to="/portfolio-details">Travel</NavLink></h2>
                                    <span>My Art</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 grid-item cat1 col-sm-4">
                            <div className="single-portfolio">
                                <div className="portfolio">
                                    <img src={img4}alt=""/>
                                </div>
                                <div className="portfolio-titles">
                                    <h2><NavLink to="/portfolio-details">Still Life</NavLink></h2>
                                    <span>My Art</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 grid-item cat3 col-sm-4">
                            <div className="single-portfolio">
                                <div className="portfolio">
                                    <img src={img5} alt=""/>
                                </div>
                                <div className="portfolio-titles">
                                    <h2><NavLink to="/portfolio-details">Travel</NavLink></h2>
                                    <span>My Art</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 grid-item cat1 col-sm-4">
                            <div className="single-portfolio">
                                <div className="portfolio">
                                    <img src={img6}alt=""/>
                                </div>
                                <div className="portfolio-titles">
                                    <h2><NavLink to="/portfolio-details">MacroLife</NavLink></h2>
                                    <span>My Art</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 grid-item cat1 col-sm-4">
                            <div className="single-portfolio">
                                <div className="portfolio">
                                    <img src={img8} alt=""/>
                                </div>
                                <div className="portfolio-titles">
                                    <h2><NavLink to="/portfolio-details">Black&White</NavLink></h2>
                                    <span>My Art</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 grid-item cat3 col-sm-4">
                            <div className="single-portfolio">
                                <div className="portfolio">
                                    <img src={img7} alt=""/>
                                </div>
                                <div className="portfolio-titles">
                                    <h2><NavLink to="/portfolio-details">MacroLife</NavLink></h2>
                                    <span>My Art</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 grid-item cat2 col-sm-4">
                            <div className="single-portfolio">
                                <div className="portfolio">
                                    <img src={img9} alt=""/>
                                </div>
                                <div className="portfolio-titles">
                                    <h2><NavLink to="/portfolio-details">Black&White</NavLink></h2>
                                    <span>Art Work</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 grid-item cat1 col-sm-4">
                            <div className="single-portfolio">
                                <div className="portfolio">
                                    <img src={img10} alt=""/>
                                </div>
                                <div className="portfolio-titles">
                                    <h2><NavLink to="/portfolio-details">Travel</NavLink></h2>
                                    <span>My Art</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 grid-item cat1 col-sm-4">
                            <div className="single-portfolio">
                                <div className="portfolio">
                                    <img src={img11} alt=""/>
                                </div>
                                <div className="portfolio-titles">
                                    <h2><NavLink to="/portfolio-details">MacroLife</NavLink></h2>
                                    <span>My Art</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;