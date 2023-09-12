import React from 'react'
import Layout from '../components/Layout/Layout'
import './Contact.css';
const Contact = () => {
  return (
     <Layout>
    <section id="contact">
  <h1 className="section-header">Contact Us</h1>
  <div className="contact-wrapper">
    {/* Left contact page */}
    <form id="contact-form" className="form-horizontal" role="form">
      <div className="form-group">
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="NAME"
            name="name"
            defaultValue=""
            required=""
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="EMAIL"
            name="email"
            defaultValue=""
            required=""
          />
        </div>
      </div>
      <textarea
        className="form-control"
        rows={5}
        placeholder="MESSAGE"
        name="message"
        required=""
        defaultValue={""}
      />
      <button
        className="btn btn-primary send-button"
        id="submit"
        type="submit"
        value="SEND"
      >
        <div className="alt-send-button">
          <i className="fa fa-paper-plane" />
          <span className="send-text">SEND</span>
        </div>
      </button>
    </form>
    {/* Left contact page */}
    <div className="direct-contact-container">
      <h1 className=""> </h1>
      <ul className="contact-list">
        <li className="list-item">
          <i className="fa fa-map-marker fa-1x" >
            <span className="contact-text place">City, State</span>
          </i>
        </li>
        <li className="list-item">
          <i className="fa fa-phone fa-1x">
            <span className="contact-text phone">
              <a href="tel:1-212-555-5555" title="Give me a call">
                (212) 555-2368
              </a>
            </span>
          </i>
        </li>
        <li className="list-item">
          <i className="fa fa-envelope fa-1x">
            <span className="contact-text gmail">
              <a href="mailto:#" title="Send me an email">
               bagmaoverseas@gmail.com
              </a>
            </span>
          </i>
        </li>
      </ul>
      <hr />
     
      <hr />
     
    </div>
  </div>
</section>

  <section className="map_sec">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="map_inner">
            <h4>Find Us on Google Map</h4>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quo beatae quasi assumenda, expedita aliquam minima tenetur
              maiores neque incidunt repellat aut voluptas hic dolorem sequi ab
              porro, quia error.
            </p> */}
            <div className="map_bind">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin"
                width="100%"
                height={450}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    </Layout>
  )
}

export default Contact