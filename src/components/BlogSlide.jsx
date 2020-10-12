import React from "react";
import Slider from "react-slick";
import img1 from '../img/chb3.JPG'
import img2 from '../img/chb5.JPG'
import img3 from '../img/chb6.JPG'
import img4 from '../img/chb1.JPG'
import img5 from '../img/P1.jpg'
import img6 from '../img/P2.JPG'
import {NavLink} from "react-router-dom";

class SimpleSlider extends React.Component {
    render() {
        let settings = {
            RTL: true,
            dots: true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            pauseOnHover: true,
            AdaptiveHeight: true,
            className: 'mb-70 mt-50'


        };
        return (

            <div className="section-title text-center">
                <h3 className="heading">Мои впечатления</h3>
                <p>Слеза содержит океан. Фотограф осознает крошечные моменты в жизни человека, которые раскрывают большие истины © </p>

            <Slider  {...settings}>


                        <div className="active col-sm-12 carousel-item slick-slide">
                            <img src={img1} className="d-block mw-100 " alt="..."/>
                            <div className="post-info">
									<span className="post-author">
										<i className="fa fa-user" aria-hidden="true"></i>
										<a href="#">OLGA</a>
									</span>
                                <span className="post-author">
										<i className="fa fa-calendar"></i>February 2, 2017
									</span>
                                <span className="post-author">
										<i className="icofont icofont-comment"></i>2
									</span>
                            </div>
                            <div className="post-content">
                                <h2 className="semi-title">
                                    <a href="blog-details.html">Howe to grow travel plan</a></h2>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut </p>
                                <NavLink to="/blog">read more history</NavLink>
                            </div>
                        </div>
                        <div className="col-sm-12 carousel-item  slick-slide">
                            <img src={img2} className="d-block mw-100  " alt="..."/>
                            <div className="post-info">
									<span className="post-author">
										<i className="fa fa-user" aria-hidden="true"></i>
										<a href="#">OLGA</a>
									</span>
                                <span className="post-author">
										<i className="fa fa-calendar"></i>January 1, 2017
									</span>
                                <span className="post-author">
										<i className="icofont icofont-comment"></i>0
									</span>
                            </div>
                            <div className="post-content">
                                <h2 className="semi-title">
                                    <a href="blog-details.html">Legentis in iis qui facit eorum claritatem</a></h2>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut </p>
                                <NavLink to="/blog">read more history</NavLink>
                            </div>
                        </div>
                        <div className=" col-sm-12 carousel-item  slick-slide">
                            <img src={img3} className="d-block mw-100  " alt="..."/>
                            <div className="post-info">
									<span className="post-author">
										<i className="fa fa-user" aria-hidden="true"></i>
										<a href="#">OLGA</a>
									</span>
                                <span className="post-author">
										<i className="fa fa-calendar"></i>December 22, 2016
									</span>
                                <span className="post-author">
										<i className="icofont icofont-comment"></i>8
									</span>
                            </div>
                            <div className="post-content">
                                <h2 className="semi-title">
                                    <a href="blog-details.html">Dolore eu feugiat nulla facilisis</a></h2>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut </p>
                                <NavLink to="/blog">read more history</NavLink>
                            </div>
                        </div>
                        <div className=" col-sm-12 carousel-item  slick-slide">
                            <img src={img4} className="d-block mw-100  " alt="..."/>
                            <div className="post-info">
									<span className="post-author">
										<i className="fa fa-user" aria-hidden="true"></i>
										<a href="#">OLGA</a>
									</span>
                                <span className="post-author">
										<i className="fa fa-calendar"></i>December 22, 2016
									</span>
                                <span className="post-author">
										<i className="icofont icofont-comment"></i>1
									</span>
                            </div>
                            <div className="post-content">
                                <h2 className="semi-title">
                                    <a href="blog-details.html">Guod mazim placerat facer possim assum</a></h2>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut </p>
                                <NavLink to="/blog">read more history</NavLink>
                            </div>
                        </div>
                        <div className=" col-sm-12  carousel-item slick-slide">
                            <img src={img5} className="d-block mw-100  " alt="..."/>
                            <div className="post-info">
									<span className="post-author">
										<i className="fa fa-user" aria-hidden="true"></i>
										<a href="#">OLGA</a>
									</span>
                                <span className="post-author">
										<i className="fa fa-calendar"></i>December 22, 2016
									</span>
                                <span className="post-author">
										<i className="icofont icofont-comment"></i>0
									</span>
                            </div>
                            <div className="post-content">
                                <h2 className="semi-title">
                                    <a href="blog-details.html">Ut wisi enim ad minim veniam</a></h2>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut </p>
                                <NavLink to="/blog">read more history</NavLink>
                            </div>
                        </div>
                        <div className=" col-sm-12  carousel-item slick-slide">
                            <img src={img6} className="d-block mw-100 " alt="..."/>
                            <div className="post-info">
									<span className="post-author">
										<i className="fa fa-user" aria-hidden="true"></i>
										<a href="#">OLGA</a>
									</span>
                                <span className="post-author">
										<i className="fa fa-calendar"></i>December 22, 2016
									</span>
                                <span className="post-author">
										<i className="icofont icofont-comment"></i>0
									</span>
                            </div>
                            <div className="post-content">
                                <h2 className="semi-title">
                                    <a href="blog-details.html">Top features in our theme</a></h2>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut </p>
                                <NavLink to="/blog">read more history</NavLink>
                            </div>
                        </div>


            </Slider>
            </div>
        );
    }
}

export default SimpleSlider;