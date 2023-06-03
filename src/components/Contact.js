import React from 'react'
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
  const [state, handleSubmit] = useForm("xdovyady");
  if (state.succeeded) {
    
    <div>
      <section class="flat-title-page parallax parallax-9 contact-page-title">
        <div class="container-fluid">
          <div class="row">
            <div class="breadcrumbs">
              <h2 class="section-title-page">Get in Touch</h2>
              <div class="breadcrumb-trail link-style-2">
                <a class="home" href="index.html">Home</a><span>Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-space flat-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="section-title link-style-2">
                <h3 className="section-heading">Let's Talk</h3>
                <div className="features-content-left">
                  <h2>Speak With Our<br />
                    Consulti</h2>
                </div>
                <div className="contact-icon-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="icon meta-address" />
                  <div className="content">
                    <h4>F-1, First Floor, 202, M.G. Nagar, DCM, Ajmer Road, Jaipur (Raj.)</h4>
                  </div>
                </div>
                <div className="contact-icon-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="icon meta-mail" />
                  <div className="content">
                    <a href="mailto:abc@gmail.com">
                      <h4>support@singhtek.com</h4>
                    </a>

                  </div>
                </div>
                <div className="contact-icon-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="icon meta-phone" />
                  <div className="content">
                    <a href="tel:012345678">
                      <h4>+91-9461800909</h4>
                    </a>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="title">
                <h3>Don’t Hesitate<br />
                  To Send Your Message To Us</h3>
              </div>
              <div className="contact-form wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms" id="comments">
                <form  action="https://formspree.io/f/xknyvwjo" method="POST" id="contactform" className="comment-form form-submit" onSubmit={handleSubmit} acceptCharset="utf-8" noValidate="novalidate">
                  <div className="text-wrap clearfix">
                    <fieldset className="name-wrap">
                      <input type="text" id="name" className="tb-my-input" name="name" tabIndex={1} placeholder="Name" required />
                      <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors}
                      />
                     
                    </fieldset>
                  
                    <fieldset className="email-wrap">
                      <input type="email" id="email" autoComplete="off" className="tb-my-input" name="email" tabIndex={2} placeholder="Email" required />
                      <ValidationError
                        prefix="email"
                        field="email"
                        errors={state.errors}
                      />
                    </fieldset>
                    <div className="subject"> 
                      <input type="text" id="subject" className="tb-my-input" autoComplete="off"  name="subject" tabIndex={1} placeholder="Subject" required width="100" />
                      <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors}
                      /></div>
                  </div>
                  <fieldset className="message-wrap">
                    <textarea id="comment-message" name="message" rows={13} tabIndex={4} placeholder="write your comment" defaultValue={""} />
                    <ValidationError className="contact-erorr"
                      prefix="message"
                      field="message"
                      errors={state.errors}
                    />
                  </fieldset>
                  <button name="submit" type="submit" id="comment-reply" className="button btn-style4 btn-submit-comment  disabled={state.submitting}">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /flat contact */}

    </div>
return <p>Thanks for joining!</p>;
  }
  return (  )
}

export default Contact
