import React from 'react'
import { Accordion } from 'react-bootstrap';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
const Faq = () => {
    return (
      
        <>
            <div id="wrapper" class="animsition">
                <div id="page" class="clearfix">
                    <section class="flat-title-page parallax parallax-6">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="breadcrumbs d-flex">
                                    <h2 class="section-title-page">Frequently Ask Questions</h2>
                                    <div class="breadcrumb-trail link-style-4">
                                        {/* <a class="home" href="index.html">Home</a><span>Faq</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="tf-space flat-faq">
                        <div class="container">
                            <div class="row">

                                <div class="col-md-12">
                                    <div class="faq-title-box">
                                        <div class="icon"></div>
                                        <div class="section-title">
                                            <div class="features-content-left">
                                                <h2>Do You Have Any Questions?</h2>
                                            </div>
                                            <p>Improve efficiency, provide a better customer experience with modern technology
                                                services available around the world. Our skilled staff, combined with decades of
                                                experience.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <Accordion>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <AccordionItem eventKey="0">
                                                    <AccordionHeader>
                                                        01. What does you do?
                                                    </AccordionHeader>
                                                    <AccordionBody>
                                                        Improve efficiency, provide a better customer experience with modern technology services available around the world. Our skilled staff, combined with decades of experience
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem eventKey="2">
                                                    <AccordionHeader>
                                                        02. What industries covered?
                                                    </AccordionHeader>
                                                    <AccordionBody>
                                                        Improve efficiency, provide a better customer experience with modern technology services available around the world. Our skilled staff, combined with decades of experience
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem eventKey="3">
                                                    <AccordionHeader>
                                                        03. How do you price?
                                                    </AccordionHeader>
                                                    <AccordionBody>
                                                        Improve efficiency, provide a better customer experience with modern technology services available around the world. Our skilled staff, combined with decades of experience
                                                    </AccordionBody>
                                                </AccordionItem>
                                            </div>
                                            < div className="col-md-6">
                                                <AccordionItem eventKey="4">
                                                    <AccordionHeader>
                                                        01. What does you do?
                                                    </AccordionHeader>
                                                    <AccordionBody>
                                                        Improve efficiency, provide a better customer experience with modern technology services available around the world. Our skilled staff, combined with decades of experience
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem eventKey="5">
                                                    <AccordionHeader>
                                                        02. What industries covered?
                                                    </AccordionHeader>
                                                    <AccordionBody>
                                                        Improve efficiency, provide a better customer experience with modern technology services available around the world. Our skilled staff, combined with decades of experience
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem eventKey="6">
                                                    <AccordionHeader>
                                                        03. How do you price?
                                                    </AccordionHeader>
                                                    <AccordionBody>
                                                        Improve efficiency, provide a better customer experience with modern technology services available around the world. Our skilled staff, combined with decades of experience
                                                    </AccordionBody>
                                                </AccordionItem>
                                            </div>
                                        </div>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </>
    )
}

export default Faq
