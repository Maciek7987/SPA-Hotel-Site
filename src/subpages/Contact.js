import "../style/Contact.scss";
import { Component, createRef } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNameValue: "",
      inputSurnameValue: "",
      inputPhoneValue: "",
      inputEmailValue: "",
      inputTextareaValue: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    alert("A message was sent");
    this.setState({
      inputNameValue: "",
      inputSurnameValue: "",
      inputPhoneValue: "",
      inputEmailValue: "",
      inputTextareaValue: "",
    });
  };

  handleChangeInput = (e) => {
    switch (e.target.name) {
      case "name":
        this.setState({ inputNameValue: e.target.value });
        break;
      case "surname":
        this.setState({ inputSurnameValue: e.target.value });
        break;
      case "email":
        this.setState({ inputPhoneValue: e.target.value });
        break;
      case "telephone":
        this.setState({ inputEmailValue: e.target.value });
        break;
      case "textarea":
        this.setState({ inputTextareaValue: e.target.value });
        break;
      default:
        console.log("none");
        break;
    }
    console.log(this.state);
  };
  render() {
    return (
      <>
        <section className="contact-page">
          <header className="contact-page__title">
            <h1>contact</h1>
          </header>
          <article className="contact-page__form">
            <form className="form" action="mierl23441@gmail.com" method="post">
              <div className="input-name">
                <label>Name</label>
                <input
                  id="input-name"
                  type="text"
                  name="name"
                  maxlength="30"
                  onChange={this.handleChangeInput}
                />
              </div>
              <div className="input-surname">
                <label>Surname</label>
                <input
                  id="input-surname"
                  type="text"
                  name="surname"
                  maxlength="30"
                  onChange={this.handleChangeInput}
                />
              </div>
              <div className="input-phone">
                <label>Phone</label>
                <input
                  id="input-phone"
                  type="tel"
                  name="telephone"
                  maxlength="15"
                  onChange={this.handleChangeInput}
                />
              </div>
              <div className="input-email">
                <label>Email</label>
                <input
                  id="input-email"
                  type="email"
                  name="email"
                  maxlength="30"
                  onChange={this.handleChangeInput}
                />
              </div>

              <textarea
                name="textarea"
                id="form__textarea"
                cols="30"
                rows="10"
                onChange={this.handleChangeInput}
              ></textarea>
              <input id="submit" type="submit" value="Send" />
            </form>
          </article>
          <article className="contact-page__info">
            <div className="wrapper-3">
              <p>Email: alabaster@ahotelsite.com</p>
              <p>Tel: +871 173-342-084</p>
              <p>Instagram: hotel-site</p>
              <h2>25°14'51"N 72°32'33"W</h2>
            </div>

            <iframe
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
