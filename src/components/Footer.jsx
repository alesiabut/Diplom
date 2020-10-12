import React from "react";
import {NavLink} from "react-router-dom";


const Footer =()=>{
    return(
        <footer>
            <div className="footer-area pt-80 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="single-footer text-center mb-30">
                                <div className="footer-icon">
                                    <a href="tel:+74957777777"><i className="fa fa-phone"></i></a>
                                </div>
                                <div className="footer-info">
                                    <span>+74957777777</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="single-footer text-center mb-30">
                                <div className="footer-icon">
                                   <NavLink to="/contact" className="a"><i className="fa fa-envelope"></i></NavLink>
                                </div>
                                <div className="footer-info">
                                    <a href="mailto:olgallys@gmail.com"><span>olgallys@gmail.com</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="single-footer text-center mb-30">
                                <div className="footer-icon">
                                   <NavLink to="/contact" className="a"><i className="fa fa-map-marker"></i></NavLink>
                                </div>
                                <div className="footer-info">
                                    <span>Russia, Moscow </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-area ptb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="copyright">
                                <p>Copyright © 2017 <a href="https://devitems.com/" target="_blank">DevItems</a> All Right Reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="icon floatright">
                                <a href="https://twitter.com"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.facebook.com/olgallys"><i className="fa fa-facebook"></i></a>
                                <a href="https://instagram.com/o.lysikova?igshid=1qzyznibjpl50"><i className="fa fa-instagram"></i></a>
                                <a href="https://www.youtube.com"><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;