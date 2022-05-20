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
      rex: false,
    };

    this.inccorectCharacters = [
      "!",
      `"`,
      "#",
      "$",
      "%",
      "&",
      `'`,
      "(",
      ")",
      "*",
      `+`,
      `,`,
      `-`,
      `.`,
      "/",
      ":",
      ";",
      "<",
      `=`,
      ">",
      "?",
      "@",
      "[",
      "]",
      "^",
      "_",
      "{",
      "|",
      "}",
      "`",
    ];
  }

  checkInvalidCharacters = (variableToCheck) => {
    const incorrectChar = [...variableToCheck].find((character) =>
      this.inccorectCharacters.includes(character)
    );
    return incorrectChar;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    const {
      inputNameValue,
      inputSurnameValue,
      inputPhoneValue,
      inputTextareaValue,
      inputEmailValue,
    } = this.state;
    let nameInvalid, surnameInvalid;

    nameInvalid = this.checkInvalidCharacters(inputNameValue);
    surnameInvalid = this.checkInvalidCharacters(inputSurnameValue);
    console.log(nameInvalid, surnameInvalid);

    // if(inputNameValue.length <= 3 || typeof inputNameValue != String || inputNameValue.includes())

    if (flag) {
      // window.Email.send({
      //   Host: "smtp.elasticemail.com",
      //   Username: "mierl23441@gmail.com",
      //   Password: "920A7482EE5C8A1510FDFF227BA9AAA2029A",
      //   To: "mierl23441@gmail.com",
      //   From: "mierl23441@gmail.com",
      //   Subject: `${inputNameValue} sent you a message`,
      //   Body: `Name: ${inputNameValue} <br/> Surname: ${inputSurnameValue} <br/> Email: ${inputEmailValue} <br/> Phone: ${inputPhoneValue} <br/> Message: ${inputTextareaValue} `,
      // }).then((inputNameValue) => {
      //   alert("message was sent successfully");
      // });

      this.setState({
        inputNameValue: "",
        inputSurnameValue: "",
        inputPhoneValue: "",
        inputEmailValue: "",
        inputTextareaValue: "",
      });
    } else {
      return;
    }
  };

  handleChangeInput = (e) => {
    switch (e.target.name) {
      case "name":
        if (e.target.value.charCodeAt(0))
          this.setState({ inputNameValue: e.target.value, rex: true });
        break;
      case "surname":
        this.setState({ inputSurnameValue: e.target.value });
        break;
      case "email":
        this.setState({ inputEmailValue: e.target.value });
        break;
      case "telephone":
        this.setState({ inputPhoneValue: e.target.value });
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
            <form className="form" method="post">
              <div className="input-name">
                <div className="wrapper-info">
                  <label>Name</label>
                  <p id="emial-error">walidacja formularza email react</p>
                </div>
                <input
                  id="input-name"
                  type="text"
                  name="name"
                  maxlength="30"
                  value={this.state.inputNameValue}
                  onChange={this.handleChangeInput}
                />
              </div>
              <div className="input-surname">
                <div className="wrapper-info">
                  <label>Surname</label>
                  <p id="emial-error">walidacja formularza email react</p>
                </div>
                <input
                  id="input-surname"
                  type="text"
                  name="surname"
                  maxlength="30"
                  value={this.state.inputSurnameValue}
                  onChange={this.handleChangeInput}
                />
              </div>
              <div className="input-phone">
                <div className="wrapper-info">
                  <label>Phone</label>
                  <p id="emial-error">walidacja formularza email react</p>
                </div>
                <input
                  id="input-phone"
                  type="tel"
                  name="telephone"
                  maxlength="15"
                  value={this.state.inputPhoneValue}
                  onChange={this.handleChangeInput}
                />
              </div>
              <div className="input-email">
                <div className="wrapper-info">
                  <label>Email</label>
                  <p id="emial-error">walidacja formularza email react</p>
                </div>

                <input
                  id="input-email"
                  type="email"
                  name="email"
                  maxlength="30"
                  value={this.state.inputEmailValue}
                  onChange={this.handleChangeInput}
                />
              </div>

              <textarea
                name="textarea"
                id="form__textarea"
                cols="30"
                rows="10"
                value={this.state.inputTextareaValue}
                onChange={this.handleChangeInput}
              ></textarea>
              <div className="wrapper-info wrapper-info--texterea">
                <p id="emial-error">walidacja formularza email react</p>
              </div>
              <input
                id="submit"
                type="submit"
                value="Send"
                onClick={this.handleSubmit}
              />
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
