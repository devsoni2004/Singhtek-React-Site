import React from 'react'
const About = () => {
  return (
    <div>
      <section className="flat-title-page parallax parallax-2" id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="breadcrumbs d-flex">
              <h2 className="section-title-page">About Our Company</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-space flat-about-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-2-content-left wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="section-title st-2">
                  <h3 className="section-heading">About our company</h3>
                  <div className="features-content-left">
                    <h3>Get Your Best Business<br />
                      Solution With Consalti</h3>
                  </div>
                  <p>Established in the year 2013 at Jaipur (Rajasthan, India). Singhtek Infosolution are leading and trusted IT Consulting Firm in India & abroad, work for Startup to Big Enterprise. We are manufacturer, wholesaler, trader of WLA ATM, POS Machine, Payment Solution, Cloud Server, Email, Software & More. </p>
                </div>
                <div className="button-contact wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                  <a href="contact.html" className="button readmore btn-style3">Contact us</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-2-content-right">
                <div className="about-2-post wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <img src="assets/images/Singhtek Banner-04 (2).png" alt="images" />
                </div>
               
              </div>
            </div>
          </div>
          <div className="row about-outer">
            <div className="col-md-6">
              <div className="about-our-company">
                <div className="icon-tick"> <i className="fa fa-check" aria-hidden="true" /></div>
                <div className="content-box">
                  <h4>Business strategy growth</h4>
                  <p>Maecenas posuere neque et volutpat accumsan. Aliquam hendrerit
                    tincidunt
                    diam
                    eu imperdiet. Etiam dictum suscipit tempus. </p>
                </div>
              </div>
              <div className="about-our-company">
                <div className="icon-tick"> <i className="fa fa-check" aria-hidden="true" /></div>
                <div className="content-box">
                  <h4>Social Media Consulting:</h4>
                  <p>Internet marketing or Social Media is to help companies to increase
                    traffic
                    to their websites by methods of search engine optimization and
                    content
                    and
                    by social media marketing.</p>
                </div>
              </div>
              <div className="about-our-company">
                <div className="icon-tick"> <i className="fa fa-check" aria-hidden="true" /></div>
                <div className="content-box">
                  <h4>Marketing Consulting: </h4>
                  <p> Developing strategies in order to successfully promote, sell and distribute
                    goods and services to targeted consumers. On a larger scale, marketing serves as
                    a viable means of getting a new brand name, product or service into the public
                    eye and transforming it into a lucrative business.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-our-company">
                <div className="icon-tick"> <i className="fa fa-check" aria-hidden="true" /></div>
                <div className="content-box">
                  <h4>IT Consulting:</h4>
                  <p>Recommend Computer Hardware, Software and Networks to build high
                    performing
                    systems and workflow. Provides technical expertise in areas of
                    information
                    systems design, software programming and development.</p>
                </div>
              </div>
              <div className="about-our-company">
                <div className="icon-tick"> <i className="fa fa-check" aria-hidden="true" /></div>
                <div className="content-box">
                  <h4>HR Consulting:</h4>
                  <p>Management of an organization workforce or human resources. Services
                    Like
                    -
                    selection, training, assessment, and rewarding of employees, while
                    also
                    overseeing organizational leadership, culture and ensuring
                    compliance
                    with
                    employment and labor laws.</p>
                </div>
              </div>
              <div className="about-our-company">
                <div className="icon-tick"> <i className="fa fa-check" aria-hidden="true" /></div>
                <div className="content-box">
                  <h4>Startup Consulting:</h4>
                  <p>Helping form Incorporation to till you need any help to Run your Business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /flat about 2 */}
      {/* flat counter */}
      <section className="tf-space flat-counter tf-counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="about-counter-inner-about wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="number-counter">
                  <span>0</span>
                  <span className="number" data-speed={4000} data-to={9} data-inviewport="yes">9</span>
                </div>
                <div className="heading-count">
                  <h3>YEARS OF<br />
                    EXPERIENCE</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="about-counter-inner-about wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="number-counter">
                  <span className="number" data-speed={4000} data-to={69} data-inviewport="yes">69</span>
                </div>
                <div className="heading-count">
                  <h3>TRUSTED <br />
                    CLIENTS</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="about-counter-inner-about wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="number-counter">
                  <span className="number" data-speed={4000} data-to={330} data-inviewport="yes">330</span>
                </div>
                <div className="heading-count">
                  <h3>PROJECTS <br />
                    DONE</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="about-counter-inner-about wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
                <div className="number-counter">
                  <span className="number" data-speed={4000} data-to={25} data-inviewport="yes">25</span>
                </div>
                <div className="heading-count">
                  <h3>TEAM <br />
                    ADVISORS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* flat /counter */}

    </div>
  )
}

export default About
