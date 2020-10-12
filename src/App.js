import React from 'react';
import './App.css';
import Header from "./components/header";
import Slider from "./components/slider";
import Portfolio from "./components/portfolio";
import BlogSlide from "./components/BlogSlide";
import Footer from "./components/Footer";
import {BrowserRouter,Route} from "react-router-dom";
import Banner from "./components/banner";
import PersonalInfo from "./components/personalinfo";
import Blog from "./components/blog";
import Desk from "./components/portImages";
import Contact from "./components/contacts";
import MyMap from "./components/map";

function App(props) {
  return (
            <div className="App">
                <BrowserRouter>
                  <Header/>
                  <Route exact path="/" render={()=> {
                      return <div>
                          <Slider/>
                          <Portfolio/>
                          <BlogSlide/>
                      </div>
                  }}/>
                  <Route path="/about" render={()=>{
                      return <div>
                           <Banner h3="/about me"/>
                           <PersonalInfo/>
                      </div>
                  }}/>
                  <Route path="/portfolio" render={()=> {
                      return <div>
                          <Banner h3="/portfolio"/>
                          <Portfolio/>
                      </div>

                  }}/>
                  <Route path="/blog" render={()=>{
                      return <div>
                          <Banner h3="/blog"/>
                          <Blog getArticles={props.getArticles}/>
                      </div>
                  }}/>
                  <Route path="/portfolio-details" render={()=>{
                      return <div>
                          <Banner h3="/portfolio-details"/>
                          <Desk/>

                      </div>
                  }}/>
                  <Route path="/contact" render={()=>{
                      return <div>
                          <Banner h3="/contact"/>
                          <div className="container-fluid mt-50">
                              <div className="row">
                                  <div className="col-sm-8"><Contact/></div>
                                  <div className="col-sm-4 m-auto "><MyMap/></div>
                              </div>
                          </div>
                      </div>
                  }}/>

                  <Footer/>
                </BrowserRouter>
            </div>

  );
}

export default App;
