import React from 'react'
import HarryPotterImage from '../progress.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div>
        <div className="banner__are a swiper banner-slider">
          <div className="swiper-wrapper">
            {/* <Slider className="settings"> */}
            <div className="banner__area-image swiper-slide">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="banner__area-content">
                      <div className="banner__area-content-icon slider-1">
                        <img src="/assets/images/banner-icon.png" alt="" />
                      </div>
                      <span data-animation="fadeInUp" data-delay=".4s">Make your opportunities</span>
                      <h1 data-animation="fadeInUp" data-delay=".6s">Grow your business with Singhtek
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".8s">We look for new business
                        opportunities
                        and can help you work with your existing customers to get more of them to
                        buy.
                      </p>
                      <div className="banner__area-content-button" data-animation="fadeInUp" data-delay="1s">
                        <div className="banner__area-content-button-item">
                          <Link to="./Services" className="theme-banner-btn1">Our Services</Link>
                        </div>
                        <div className="banner__area-content-button-item">
                          <Link to="./Contact" className="theme-banner-btn">Get A Quote</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner__area-image swiper-slide slider-2">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="banner__area-content">
                      <div className="banner__area-content-icon">
                        <img src="assets/img/icon/banner-icon.png" alt="" />
                      </div>
                      <span data-animation="fadeInUp" data-delay=".4s">investment
                        Management</span>
                      <h1 data-animation="fadeInUp" data-delay=".6s">Better Financial Decisions</h1>
                      <p data-animation="fadeInUp" data-delay=".8s">We focus on the best practices for
                        financial planning and investment, to help you make smarter decisions</p>
                      <div className="banner__area-content-button" data-animation="fadeInUp" data-delay="1s">
                        <div className="banner__area-content-button-item">
                          <a href="services.html" className="theme-banner-btn1">Our Services</a>
                        </div>
                        <div className="banner__area-content-button-item">
                          <a href="contact.html" className="theme-banner-btn">Get A Quote</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </Slider> */}
          </div>
        </div>
        <div className="banner__area-dots">
          <div className="banner-pagination" />
        </div>
      </div>
    
      {/* flat about */}
      <section className="tf-space flat-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="about-left-content wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="section-title">
                  <h3 className="section-heading">About Singhtek</h3>
                  <h2>Doing The Right Thing At<br />
                    The Right Time</h2>
                </div>
                <p>Maecenas posuere neque et volutpat accumsan. Aliquam hendrerit tincidunt diam eu
                  imperdiet. Etiam dictum suscipit tempus. Vestibulum eget
                  pellentesque dolor. Duis enim risus, malesuada sodales
                  sapien eu, commodo malesuada tortor.
                </p>
                <p className="font-weight-500">Every pleasures is to welcomed pain avoided owing to the duty
                  the obligations of business it will frequently occur that pleasures have be
                  repudiated and annoyances accepted.</p>
                <div className="progress-about">
                  <div className="couter">
                    <div className="chart" data-percent={85}>
                      <span className="percent">0</span>
                    </div>
                    <h3 className="heading-progress">Business<br />
                      strategy growth</h3>
                  </div>
                </div>
                <div className="progress-about">
                  <div className="couter">
                    <div className="chart" data-percent={75}>
                      <span className="percent">0</span>
                    </div>
                    <h3 className="heading-progress">Finance<br />
                      valuable ideas</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* /flat about */}
   
      {/* flat work */}
      <section className="tf-space flat-work">
        <div className="container">
          <div className="row">
            <div className="section-title wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
              <h3 className="section-heading">What We Do</h3>
              <div className="features-content-left">
                <h2>Our Business &amp; Financial
                  Consulting Services</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="work-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="work-icon">
                    {/* <div className="top item-shape item-shape1" />
                          <div className="top item-shape item-shape2" />
                          <div className="bottom item-shape item-shape1" />
                          <div className="bottom item-shape item-shape2" /> */}
                    <div className="master-icon-boxs">
                      <div className="icon-wrap">
                        <img src="assets/images/apiservice-1.webp" alt="images" className="img-fuild" />
                      </div>
                      <div className="text-wrap">
                        <h3 className="headline">Web API Services</h3>
                        <p>Offering you a complete choice of products which include micro atm api service, domestic money remittance (dmr) api, multi mobile recharge api, bulk sms api and bharat bill payment system api.</p>
                        {/* <a href="service-details.html" className="url-wrap readmore">Read
                                More</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box active wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="work-icon">
                    <div className="master-icon-boxs">
                      <div className="icon-wrap">
                        <img src="assets/images/dedicatedservice.webp" alt="images" className="img-fuild" />
                      </div>
                      <div className="text-wrap">
                        <h3 className="headline">Dedicated Server Hosting</h3>
                        <p>Offering you a complete choice of products which include gps tracking dedicated server hosting,
                          video conferencing webinar servers, dedicated server hosting and dedicated server hosting.</p>
                        {/* <a href="/" className="url-wrap readmore">Read
                                More</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="work-icon">
                    {/* <div className="top item-shape item-shape1" />
                          <div className="top item-shape item-shape2" />
                          <div className="bottom item-shape item-shape1" />
                          <div className="bottom item-shape item-shape2" /> */}
                    <div className="master-icon-boxs">
                      <div className="icon-wrap">
                        <img src="assets/images/posmachine.jpg" alt="images" className="img-fuild" />
                      </div>
                      <div className="text-wrap">
                        <h3 className="headline">POS Machine</h3>
                        <p>The basic premise of search engine reputation management is to use the following three,
                          that includes a debit and credit card reader for accepting payments It also provides a receipt.</p>
                        {/* <a href="/" className="url-wrap readmore">Read
                                More</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* /flat work */}
      {/* flat wcu */}
      <section className="tf-space flat-wcu">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <h3 className="section-heading">Why Choose us</h3>
                <div className="features-content-left">
                  <h2>Reason For Choosing Our Strike
                    Consultancy</h2>
                </div>
                <p>Improve efficiency, provide a better customer experience with modern technology
                  services available around the world. Our skilled staff, combined with decades of
                  experience.</p>
              </div>
              <div className="wcu-list-services wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="master-icon-box">
                  <span className="icon icon-express" />
                  <h3>Quick Response</h3>
                </div>
                <div className="master-icon-box">
                  <span className="icon-2 icon-achievement" />
                  <h3>Experienced</h3>
                </div>
                <div className="master-icon-box">
                  <span className="icon-2 icon-wallet" />
                  <h3>Flexible Payment</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* /flat wcu */}
      {/* flat progress */}
      <section className="tf-space flat-progress">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="progress-content-left wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="section-title">
                  <h3 className="section-heading">Annual Progress</h3>
                  <div className="features-content-left">
                    <h2>Our Business Growth is<br />
                      Really Incredible!</h2>
                  </div>
                  <p>Improve efficiency, provide a better customer experience with modern technology
                    services available around the world. Our skilled staff, combined with decades of
                    experience.</p>
                </div>
                <div className="content-progress-box">
                  <div className="progress-inner">
                    <div className="donat-bg" data-percent="70%">
                      <div className="custom-donat" />
                    </div>
                    <div className="donat-headline">
                      <h4>Business growth (2018)</h4>
                      <span>70%</span>
                    </div>
                  </div>
                  <div className="progress-inner">
                    <div className="donat-bg" data-percent="85%">
                      <div className="custom-donat" />
                    </div>
                    <div className="donat-headline">
                      <h4>Investment growth (2020)</h4>
                      <span>85%</span>
                    </div>
                  </div>
                  <div className="progress-inner">
                    <div className="donat-bg" data-percent="95%">
                      <div className="custom-donat" />
                    </div>
                    <div className="donat-headline">
                      <h4>Finnancial growth (2021)</h4>
                      <span>95%</span>
                    </div>
                  </div>
                  <div className="progress-button wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <a href="service-details.html" className="button readmore">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="progress-content-right wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="progress-post">
                  {/* <img src="/public/assets/images/progress.jpg" alt="progress" /> */}
                  <img src={HarryPotterImage} alt="harry potter" style={{ width: '563', }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /flat progress */}
      {/* flat skill */}

    </>
  );
};



export default Home
