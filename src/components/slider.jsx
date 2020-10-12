import React from 'react';
import img1 from '../img/slide1-1.jpg';
import img2 from '../img/slide1-2.jpg';
import img3 from '../img/slide1-3.jpg';
import {NavLink} from "react-router-dom";


const Slider = ()=>{
    return(
        <div className="container-fluid">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
                <div className="carousel-item active slideL">
                    <img src={img1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-sm-block">
                            <h1><blockquote>《Фотография-это история, которую я не могу выразить словами》</blockquote></h1>
                            <h5>-Destin Sparks</h5>
                            <NavLink to="/portfolio"><button type="button" className="btn btn-outline-light btn-lg">Смотреть еще</button></NavLink>
                        </div>
                </div>
                <div className="carousel-item slideL">
                    <img src={img2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-sm-block">
                            <h1><blockquote>《Есть одна вещь, которую фотография должна содержать...это - человечество момента》</blockquote></h1>
                            <h5>-Robert Frank</h5>
                            <NavLink to="/portfolio"><button type="button" className="btn btn-outline-light btn-lg">Смотреть еще</button></NavLink>
                        </div>
                </div>
                <div className="carousel-item slideL">
                    <img src={img3} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-sm-block">
                            <h1><blockquote>《Красота в глазах смотрящего》</blockquote></h1>
                            <h5>-Oscar Wilde</h5>
                            <NavLink to="/portfolio"><button type="button" className="btn btn-outline-light btn-lg">Смотреть еще</button></NavLink>
                        </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </div>
    );
}
export default Slider;