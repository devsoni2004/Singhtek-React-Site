import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer id="footer" className="clearfix">
        <div id="footer-top" className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-schedule">
                <div className="heading-schedule">
                  <h2 className="section-40px-barlow font-weight-500">Need Free Consultation ?</h2>
                </div>
                <div className="button-footer">
                  <Link to="./Contact" className="button readmore">Book Schedule</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-widgets" className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="logo-footer">
                <a href="index.html" rel="home" className="main-logo">
                  <img src="assets/images/logo/Singhtek_Logo1.png" alt="images" />
                </a>
              </div>
              <p className="text-widget">Improve efficiency, provide a better customer experience with modern
                technology services around the world. Our skilled staff, combined</p>
              <div className="widget-social">
                <ul>
                  <li><a href="#" className="facebook-icon" /></li>
                  <li><a href="#" className="twitter-icon" /></li>
                  <li><a href="#" className="linked-icon" /></li>
                  <li><a href="#" className="instagram-icon" /></li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="footer-widgets-nav-menu text-white">
                <div className="menu-1">
                  <h3 className="widget-title-link-wrap">Official Info</h3>
                  <div className="widget-links">
                    <ul className="link-wrap">
                      <li>
                        <Link to="./About">About us</Link>
                      </li>
                      <li>

                        <Link to="./Services">Services</Link>
                      </li>
                      <li>

                        <Link to="">Portfolio</Link>
                      </li>
                      <li>
                        <Link to="./Contact">Contact us</Link>
                      </li>
                    </ul>

                  </div>
                </div>
                <div className="menu-2">
                  <h3 className="widget-title-link-wrap">Useful Links</h3>
                  <ul className="link-wrap menu2">
                    <li><a href="service-details.html">Payments Gateways</a></li>
                    <li><a href="service-details.html">Fingerprint Scanner</a></li>
                    <li><a href="service-details.html">Application Development Service</a></li>
                    <li><a href="service-details.html">Dedicated Server Hosting</a></li>
                    <li><a href="service-details.html">Web API Services</a></li>
                  </ul>
                </div>
                <div className="menu-3">
                  <h3 className="widget-title-link-wrap style-2">Get in Touch</h3>
                  <ul className="widget-list-contact link-style-4">
                    <li>
                      <span className="meta-address">F-1, 2st Floor,
                        202, M.G. Nagar, DCM
                        Ajmer Rd, Vaishali Nagar, Jaipur, Rajasthan 302021</span>
                    </li>
                    <li><a href="mailto:sujit@singhtek.com" className="meta-mail">sujit@singhtek.com</a>
                    </li>
                    <li><a href="tel:1412359197" className="meta-phone">+91 141 235 9197</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>{/* /#footer */}
    </>
  )
}

export default Footer