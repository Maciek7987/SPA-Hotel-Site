import "../style/Contact.scss";
import { Component } from "react";
import Email from "../components/Email";

export default class Contact extends Component {
  // constructor(props) {
  //   super(props);
  //   //inputss value
  //   this.state = {
  //     inputNameValue: "",
  //     inputSurnameValue: "",
  //     inputPhoneValue: "",
  //     inputEmailValue: "",
  //     inputTextareaValue: "",
  //   };
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   let flg1, flg2, flg3, flg4, flg5;
  //   const {
  //     inputNameValue,
  //     inputSurnameValue,
  //     inputPhoneValue,
  //     inputTextareaValue,
  //     inputEmailValue,
  //   } = this.state;

  //   //regular expression to vailidate emial input
  //   const reg = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

  //   //function to set information about wrong input and blocking it
  //   const checkWhichInoutItIs = (name, info) => {
  //     const form = document.querySelector("form.form");

  //     //assignment to a variable result of searching element wrapper-info which has class from argument "name"
  //     const element = form.querySelector(`.wrapper-info.${name}`);
  //     //e.g selector: from .wrapper-info.phone > p
  //     element.lastChild.textContent = info;

  //     //verification if variable "info" is empty is means, that function was call when input had correct value
  //     if (info === "") {
  //       switch (name) {
  //         case "name":
  //           flg1 = true;
  //           break;
  //         case "surname":
  //           flg2 = true;
  //           break;
  //         case "phone":
  //           flg3 = true;
  //           break;
  //         case "email":
  //           flg4 = true;
  //           break;
  //         case "textarea":
  //           flg5 = true;
  //           break;
  //         default:
  //           console.log("null");
  //           break;
  //       }
  //     } else {
  //       switch (name) {
  //         case "name":
  //           flg1 = false;
  //           break;
  //         case "surname":
  //           flg2 = false;
  //           break;
  //         case "phone":
  //           flg3 = false;
  //           break;
  //         case "email":
  //           flg4 = false;
  //           break;
  //         case "textarea":
  //           flg5 = false;
  //           break;
  //         default:
  //           console.log("null");
  //           break;
  //       }
  //     }
  //   };

  //   //simple vailidation

  //   if (inputNameValue.length < 3 || /[^a-zA-Z]/.test(inputNameValue)) {
  //     const info =
  //       "Name have to more than 2 letters and must not contain numbers and special chars e.g  @ # $ / , . { [ ";
  //     checkWhichInoutItIs("name", info);
  //   } else {
  //     checkWhichInoutItIs("name", "");
  //   }
  //   if (inputSurnameValue.length < 3 || /[^a-zA-Z]/.test(inputSurnameValue)) {
  //     const info =
  //       "Surname have to more than 2 letters and must not contain numbers and special chars e.g  @ # $ / , . { [ ";
  //     checkWhichInoutItIs("surname", info);
  //   } else {
  //     checkWhichInoutItIs("surname", "");
  //   }

  //   if (inputPhoneValue.length < 3 || /\D/.test(inputPhoneValue)) {
  //     const info =
  //       "Phone have to more than 2 numbers and must not contain letters and special chars e.g  @ # $ / , . { [ ";
  //     checkWhichInoutItIs("phone", info);
  //   } else {
  //     checkWhichInoutItIs("phone", "");
  //   }
  //   if (inputEmailValue.length < 5 || !reg.test(inputEmailValue)) {
  //     const info =
  //       "Email address have to more than 5 characters, the symbol @, and a domain e.g. john.smith@example.com";
  //     checkWhichInoutItIs("email", info);
  //   } else {
  //     checkWhichInoutItIs("email", "");
  //   }
  //   if (inputTextareaValue.length < 3) {
  //     const info = "Message have to more than 2 characters";
  //     checkWhichInoutItIs("textarea", info);
  //   } else {
  //     checkWhichInoutItIs("textarea", "");
  //   }

  //   // if everything is "true" then message is send and form is clearing
  //   if (flg1 && flg2 && flg3 && flg4 && flg5) {
  //     // window.Email.send({
  //     //   Host: "smtp.elasticemail.com",
  //     //   Username: "mierl23441@gmail.com",
  //     //   Password: "920A7482EE5C8A1510FDFF227BA9AAA2029A",
  //     //   To: "mierl23441@gmail.com",
  //     //   From: "mierl23441@gmail.com",
  //     //   Subject: `${inputNameValue} sent you a message`,
  //     //   Body: `Name: ${inputNameValue} <br/> Surname: ${inputSurnameValue} <br/> Email: ${inputEmailValue} <br/> Phone: ${inputPhoneValue} <br/> Message: ${inputTextareaValue} `,
  //     // }).then((inputNameValue) => {
  //     //   alert("message was sent successfully");
  //     // });

  //     this.setState({
  //       inputNameValue: "",
  //       inputSurnameValue: "",
  //       inputPhoneValue: "",
  //       inputEmailValue: "",
  //       inputTextareaValue: "",
  //     });
  //   } else {
  //     return;
  //   }
  // };

  // // handleChangeInput = (e) => {
  // //   switch (e.target.name) {
  // //     case "name":
  // //       this.setState({ inputNameValue: e.target.value });
  // //       break;
  // //     case "surname":
  // //       this.setState({ inputSurnameValue: e.target.value });
  // //       break;
  // //     case "email":
  // //       this.setState({ inputEmailValue: e.target.value });
  // //       break;
  // //     case "phone":
  // //       this.setState({ inputPhoneValue: e.target.value });
  // //       break;
  // //     case "textarea":
  // //       this.setState({ inputTextareaValue: e.target.value });
  // //       break;
  // //     default:
  // //       console.log("none");
  // //       break;
  // //   }
  // // };
  render() {
    return (
      <>
        <section className="contact-page">
          <header className="contact-page__title">
            <h1 className="contact-page__title-h1">contact</h1>
          </header>
          <article className="contact-page__article-form">
            {/* <form className="form" method="post">
              <div className="form__wrap">
                <div className="wrapper-info name">
                  <label className="wrapper-info__label">Name</label>
                  <p className="wrapper-info__paragraph"></p>
                </div>
                <input
                  className="form__wrap-input"
                  type="text"
                  name="name"
                  maxLength="30"
                  value={this.state.inputNameValue}
                  onChange={this.handleChangeInput}
                />
              </div>

              <div className="form__wrap">
                <div className="wrapper-info surname">
                  <label className="wrapper-info__label">Surname</label>
                  <p className="wrapper-info__paragraph"></p>
                </div>
                <input
                  className="form__wrap-input"
                  type="text"
                  name="surname"
                  maxLength="30"
                  value={this.state.inputSurnameValue}
                  onChange={this.handleChangeInput}
                />
              </div>

              <div className="form__wrap">
                <div className="wrapper-info phone">
                  <label className="wrapper-info__label">Phone</label>
                  <p className="wrapper-info__paragraph"></p>
                </div>
                <input
                  className="form__wrap-input"
                  type="tel"
                  name="phone"
                  maxLength="19"
                  value={this.state.inputPhoneValue}
                  onChange={this.handleChangeInput}
                />
              </div>

              <div className="form__wrap">
                <div className="wrapper-info email">
                  <label className="wrapper-info__label">Email</label>
                  <p className="wrapper-info__paragraph"></p>
                </div>
                <input
                  className="form__wrap-input"
                  type="email"
                  name="email"
                  maxLength="30"
                  value={this.state.inputEmailValue}
                  onChange={this.handleChangeInput}
                />
              </div>

              <textarea
                className="form__textarea"
                name="textarea"
                cols="30"
                rows="10"
                value={this.state.inputTextareaValue}
                onChange={this.handleChangeInput}
              ></textarea>

              <div className="wrapper-info wrapper-info--textarea textarea">
                <p className="wrapper-info__paragraph wrapper-info--textarea__paragraph"></p>
              </div>

              <input
                className="form__submit"
                type="submit"
                value="Send"
                onClick={this.handleSubmit}
              />
            </form> */}
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
