import React from 'react'
import { Link } from 'react-router-dom';

import './Career.css';

const Career = () => {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero-career" className="d-flex flex-column justify-content-end align-items-center">
        <div id="hero-careerCarousheroel" data-bs-interval={5000} className="container carousel carousel-fade" data-bs-ride="carousel">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="carousel-container">
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="carousel-container">
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="carousel-container">
            </div>
          </div>
        </div>
        <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
            </path></defs>
          <g className="wave1">
            <use xlinkHref="#wave-path" x={50} y={3} fill="rgba(255,255,255, .1)">
            </use></g>
          <g className="wave2">
            <use xlinkHref="#wave-path" x={50} y={0} fill="rgba(255,255,255, .2)">
            </use></g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x={50} y={9} fill="#fff">
            </use></g>
        </svg>
      </section>

      <section>
        <div className="container">
          <div className="section-title" data-aos="zoom-out">
            <h1><u>Current Openings</u></h1>
            <p></p>
          </div>

          <div className="row">   

            {/* FIRST VACANCY */}
            <div className="col-lg-12">
              <div className="career-card" style={{borderRadius: '20px', padding: '7px 1px'}}>
                <div className="career-container">
                  <u><p className="career-title" style={{fontSize: '25px', fontWeight: 600, color: '#020a49'}}>PHP Developer</p></u>
                  <p>We are looking for a motivated and experienced Firmware Engineer to join our team! As a Firmware Engineer, you will be responsible for supporting the firmware development team in the design,
                  development and production of our firmware supported products. You will be responsible for testing, documenting and creating firmware standards.</p>
                  <p><b><Link to="/phpdeveloper" style={{color: '#0d6efd'}}>View Job Details</Link></b></p>
                </div>
              </div>
            </div>
            

            {/* SECOND VACANCY */}
            <div className="col-lg-12" style={{paddingTop: '35px'}}>
              <div className="career-card" style={{borderRadius: '20px', padding: '7px 1px'}}>
                <div className="career-container">
                <u><p className="career-title" style={{fontSize: '25px', fontWeight: 600, color: '#020a49'}}>Frontend Developer</p></u>
                  <p>We are on the hunt for a skilled Web Developer that can help our business grow exponentially in the digital world. The role is responsible for designing, coding and modifying websites,
                  from layout to function and according to a client’s specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation.
                  </p>
                  <p><b><a href="/frontenddeveloper" style={{color: '#0d6efd'}}>View Job Details</a></b></p>
                </div>
              </div>
            </div>
        

            {/* THIRD VACANCY */}
            <div className="col-lg-12" style={{paddingTop: '35px'}}>
              <div className="career-card" style={{borderRadius: '20px', padding: '7px 1px'}}>
                <div className="career-container">
                <u><p className="career-title" style={{fontSize: '25px', fontWeight: 600, color: '#020a49'}}>Game Developer
                  </p></u>
                  <p>Zreyas Technology is seeking an experienced, highly motivated, and ambitious Game Designer to join our growing team in an on-site or remote capacity.
                  As a game designer, you will have creative ownership in everything you do. Your strong game design background and extensive experience allow you to effectively
                  collaborate with cross-functional teams to creatively solve challenging design and technical problems.
                  </p>
                  <p><b><a href="/gamedeveloper" style={{color: '#0d6efd'}}>View Job Details</a></b></p>
                </div>
              </div>
            </div>
            

            {/* FORTH VACANCY */}
            <div className="col-lg-12" style={{paddingTop: '35px'}}>
              <div className="career-card" style={{borderRadius: '20px', padding: '7px 1px'}}>
                <div className="career-container">
                <u><p className="career-title" style={{fontSize: '25px', fontWeight: 600, color: '#020a49'}}>NodeJS Developer
                  </p></u>
                  <p>We are on the hunt for a skilled Web Developer that can help our business grow exponentially in the digital world. The role is responsible for designing, coding and modifying websites,
                  from layout to function and according to a client’s specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation.
                  </p>
                  <p><b><a href="/nodejsdeveloper" style={{color: '#0d6efd'}}>View Job Details</a></b></p>
                </div>
              </div>
            </div>
           

          </div>
        </div>
      </section>
    </div>
  )
}

export default Career
