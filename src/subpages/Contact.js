import "../style/Contact.scss";
import { Component } from "react";
import Email from "../components/Email";

export default class Contact extends Component {

  render() {
    return (
      <>
        <section className="contact-page">
          <header className="contact-page__title">
            <h1 className="contact-page__title-h1">contact</h1>
          </header>
          <article className="contact-page__article-form">
            <Email></Email>
          </article>

          <article className="contact-page__info">
            <div className="wrapper-3">
              <p>Email: alabaster@ahotelsite.com</p>
              <p>Tel: +871 173-342-084</p>
              <p>Instagram: hotel-site</p>
              <h2>25°14'51"N 72°32'33"W</h2>
            </div>
            <iframe
              title="Bermuda Triangle"
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28928.027636145816!2d-71.01750961661052!3d24.99999857523423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89451ab5034cb7ab%3A0xb600ecf3df7aca4d!2sBermuda%20Triangle!5e0!3m2!1sen!2spl!4v1652959593268!5m2!1sen!2spl"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </article>
        </section>
      </>
    );
  }
}
