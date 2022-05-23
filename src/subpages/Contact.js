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
    let flg1, flg2, flg3, flg4, flg5;
    const {
      inputNameValue,
      inputSurnameValue,
      inputPhoneValue,
      inputTextareaValue,
      inputEmailValue,
    } = this.state;

    const reg =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const checkWhichInoutItIs = (name, info) => {
      const form = document.querySelector("form.form");
      const element = form.querySelector(`.wrapper-info.${name}`);
      element.lastChild.textContent = info;
      if (info === "") {
        switch (name) {
          case "name":
            flg1 = true;
            break;
          case "surname":
            flg2 = true;
            break;
          case "phone":
            flg3 = true;
            break;
          case "email":
            flg4 = true;
            break;
          case "textarea":
            flg5 = true;
            break;
        }
      } else {
        switch (name) {
          case "name":
            flg1 = false;
            break;
          case "surname":
            flg2 = false;
            break;
          case "phone":
            flg3 = false;
            break;
          case "email":
            flg4 = false;
            break;
          case "textarea":
            flg5 = false;
            break;
        }
      }
    };

    if (inputNameValue.length < 3 || /[^a-zA-Z]/.test(inputNameValue)) {
      const info =
        "Name have to more than 2 letters and must not contain numbers and special chars e.g  @ # $ / , . { [ ";
      checkWhichInoutItIs("name", info);
    } else {
      checkWhichInoutItIs("name", "");
    }
    if (inputSurnameValue.length < 3 || /[^a-zA-Z]/.test(inputSurnameValue)) {
      const info =
        "Surname have to more than 2 letters and must not contain numbers and special chars e.g  @ # $ / , . { [ ";
      checkWhichInoutItIs("surname", info);
    } else {
      checkWhichInoutItIs("surname", "");
    }

    if (inputPhoneValue.length < 3 || /\D/.test(inputPhoneValue)) {
      const info =
        "Phone have to more than 2 numbers and must not contain letters and special chars e.g  @ # $ / , . { [ ";
      checkWhichInoutItIs("phone", info);
    } else {
      checkWhichInoutItIs("phone", "");
    }
    if (inputEmailValue.length < 5 || !reg.test(inputEmailValue)) {
      const info =
        "Email address have to more than 5 characters, the symbol @, and a domain e.g. john.smith@example.com";
      checkWhichInoutItIs("email", info);
    } else {
      checkWhichInoutItIs("email", "");
    }
    if (inputTextareaValue.length < 3) {
      const info = "Message have to more than 2 characters";
      checkWhichInoutItIs("textarea", info);
    } else {
      checkWhichInoutItIs("textarea", "");
    }

    if (flg1 && flg2 && flg3 && flg4 && flg5) {
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
        this.setState({ inputNameValue: e.target.value });
        break;
      case "surname":
        this.setState({ inputSurnameValue: e.target.value });
        break;
      case "email":
        this.setState({ inputEmailValue: e.target.value });
        break;
      case "phone":
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
                <div className="wrapper-info name">
                  <label>Name</label>
                  <p id="error"></p>
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
                <div className="wrapper-info surname">
                  <label>Surname</label>
                  <p id="error"></p>
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
                <div className="wrapper-info phone">
                  <label>Phone</label>
                  <p id="error"></p>
                </div>
                <input
                  id="input-phone"
                  type="tel"
                  name="phone"
                  maxlength="19"
                  value={this.state.inputPhoneValue}
                  onChange={this.handleChangeInput}
                />
              </div>
              <div className="input-email">
                <div className="wrapper-info email">
                  <label>Email</label>
                  <p id="error"></p>
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
              <div className="wrapper-info wrapper-info--texterea textarea">
                <p id="error"></p>
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
