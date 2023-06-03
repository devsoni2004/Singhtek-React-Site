import React from 'react'
import { Route, Routes, Link, } from 'react-router-dom';
import './Navbar.css';


import Home from './Home';
import About from './About';
import Services from './Services';
import Faq from './Faq';
import Career from './Career';
import PhpDeveloper from './PhpDeveloper';
import FrontendDeveloper from './FrontendDeveloper';
import GameDeveloper from './GameDeveloper';
import NodejsDeveloper from './NodejsDeveloper';
import Contact from './Contact';





const Navbar = () => {
return (
<>


            <div id="wrapper" className="animsition">
                <div id="page" className="clearfix">
                    <div id="site-header-wrap">
        
                        {/* Top Bar Website Logo Section */}      
                        <header id="site-header">
                            <div id="site-logo" className="clearfix">
                                <div id="site-logo-inner">
                                    <Link to="/" rel="home" className="main-logo">
                                        <img src="assets/images/logo/Singhtek_Logo.png" alt="consalti" width={200} height={100} data-retina="assets/images/logo/logo-light@3x.png" data-width={183} data-height={48} />
                                    </Link>
                                </div>
                            </div>
                            {/* ----------------------------------------------------------------------------------- */}

                            {/* Top Bar Left Contact Detail Section */}
                            <div className="header-box">
                                <div id="top-bar">
                                <div id="top-bar-inner">
                                <div className="top-bar-content">
                                <div className="top-bar-left">
                                <span className="map section-14px-regular">F-1, First Floor, 202, M.G. Nagar, DCM, Ajmer Road, Jaipur (Raj.)</span>
                                {/* <span className="mail section-14px-regular"> <Link to="mailto:support@singhtek.com"> support@singhtek.com</Link></span> */}
                                <span className="mail section-14px-regular">support@singhtek.com</span>
                                {/* <span className="phone section-14px-regular"><Link to="tel:919461800909">+91-9461800909</Link></span> */}
                                <span className="phone section-14px-regular">+91-9461800909</span>
                            </div>
                            {/* ----------------------------------------------------------------------------------- */}

                            {/* Top Bar Right Socials Media Section */}
                            <div className="top-bar-right">
                                <div className="socials-header">
                                    <ul className="widget-socials link-style-3">
                                        <li><Link to="https://facebook.com/SinghtekBizGroup/" className="facebook" /></li>
                                        <li><Link to="#" className="instagram" /></li>
                                        <li><Link to="#" className="twitter" /></li>
                                        <li><Link to="https://www.linkedin.com/in/singhtek-bizgroup-82017825b/" className="linked-in" /></li>
                                    </ul>
                                </div>
                            </div>
                            {/* ----------------------------------------------------------------------------------- */}

                        </div>  
                    </div>
                </div>

                {/* /#top-bar */}
                <div id="site-header-inner">
                    <div className="wrap-inner clearfix">
                        <div className="mobile-button"><span /></div>
                        {/* /.mobile-button */}
                            <nav id="main-nav" className="main-nav">
                                <ul id="menu-primary-menu" className="menu">

                                    <li className="menu-item current-menu-item">
                                    <Link to="/">Home</Link>
                                    </li>

                                    <li className="menu-item">
                                    <Link to="about">About us</Link>
                                    </li>

                                    {/* <li className="menu-item menu-item-has-children"> */}
                                    <li className="menu-item">
                                    <Link to="services">Services</Link>
                                    {/* <ul className="sub-menu">
                                    <li className="menu-item"><a href="service">Services</a></li>
                                    <li className="menu-item"><a href="service-details">Service Details</a></li>
                                    </ul> */}                    
                                    </li>

                                    <li className="menu-item">
                                    <Link to="faq">FAQ</Link>
                                    </li>

                                    <li className="menu-item">
                                    <Link to="career">Career</Link>
                                    </li>

                                    {/* <li className="menu-item">
                                    <Link to="portfolio">Portfolio</Link>
                                    </li> */}

                                    {/* <li className="menu-item">
                                    <Link to="blog">Blog</Link>
                                    </li> */}

                                    <li className="menu-item">
                                    <Link to="contact">Contact</Link>                    
                                    </li>
                                </ul>
                            </nav>
                            {/* /#main-nav */}

                        </div>
                        {/* /.wrap-inner */}

                        <div id="site-header-right">
                            {/* <div className="header-search flat-show-search">
                            <Link to="#" className="header-search-trigger show-search" />
                                <div className="widget widget-search top-search">
                                    <form action="#" method="get" role="search" className="search-form">
                                        <input type="search" id="s" className="search-field" placeholder="Search keywords" defaultValue name="" title="Search for" required />
                                        <button className="search search-submit" type="submit" title="Search" />
                                    </form>
                                </div>
                            </div> */}

                            {/* <div className="header-menu">
                                <div className="mobile-nav-toggler">
                                    <span className="bar" />
                                    <span className="bar" />
                                    <span className="bar" />
                                </div>
                            </div> */}

                            <div className="button-header">
                                <Link to="contact">GET REQUEST</Link>
                            </div>
                        </div>
                    </div>
                {/* /#site-header-inner */}
                </div>
            </header>
        </div>
    </div>
</div>
<p></p>


<Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
</Routes>

</>
)
}

export default Navbar