import { useState } from "react";
import Calendar from "react-calendar";
import "../style/Book.scss";
import "../components/style/Calendar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import exclusiveRoom from "../pictures/rooms/exclusive/pexels-cottonbro-1.jpg";
import apartmentRoom from "../pictures/rooms/apartment/pexels-elina-sazonova-room-1.jpg";
import standardRoom from "../pictures/rooms/standard/pexels-natasha-filippovskaya-1.jpg";

let targetBtn = "zeroClick";
export default function Book() {
  //  let targetBtn = "zeroClick";
  const [value, onChange] = useState(new Date());

  let idDate;

  let dateNow = new Date();

  let year = dateNow.getFullYear();
  let month = dateNow.getMonth() + 1;
  let day = dateNow.getDate();

  let adults = 1,
    children = 0,
    allGuests = adults + children,
    date = "Check In / Check Out",
    roomName = "select room";

  if (value.length === 2) {
    idDate = "biggerFontSize";
    date = `${value[0].getDate()}.${
      value[0].getMonth() + 1
    }.${value[0].getFullYear()} - ${value[1].getDate()}.${
      value[1].getMonth() + 1
    }.${value[1].getFullYear()}`;
  }

  //130 pokoji zwykłych
  //50 apartamentów
  //17 exclusive

  //pokoje zwykłe z 1 sypialnia (65)
  //pokoje zwykłe z 2 sypialniami (35)
  //pokoje zwykłe z 3 sypialniami (20)
  //pokoje zwykłe z 4 sypialniami (10)

  //apartamenty z 1 sypialnia (20)
  //apartamenty z 2 sypialniami (15)
  //apartamenty z 3 sypialniami (10)
  //apartamenty z 4 sypialniami (5)

  //exclusive z 1 sypialnia (5)
  //exclusive z 2 sypialniami (5)
  //exclusive z 3 sypialniami (5)
  //exclusive z 4 sypialniami (2)

  //wybranie ile dorosłych i ile dzieci ze wzgledu na cene za osobe dorosła i za dziecko plus do tego cena za standard pokoju
  //wybranie ilości sypialni oraz standard pokoju
  //określenie przyjazdu
  //pokazanie jaki jest wolny pokój w jakim przedziale terminów
  //określenie wyjazdu

  const handleCounter = (e) => {
    e.preventDefault();
    const btnGuest = document.querySelector(
      ".book-page__navigation-list-item-btn.book-btn.guest"
    );
    let selector =
      e.target.parentElement.id === "adultMinus" ||
      e.target.parentElement.id === "adultPlus"
        ? "adult-result"
        : "child-result";

    const spanGuest = document.querySelector(`#${selector}`);

    switch (e.target.parentElement.id) {
      case "adultMinus":
        if (allGuests === 8) {
          document
            .querySelector(`.counter-plus-adult`)
            .classList.remove("select-guest__counter--disable");
          //usnuń klase disable z plus adult
          document
            .querySelector(`.counter-plus-child`)
            .classList.remove("select-guest__counter--disable");
          //usnuń klase disable również z plus child
        }
        if (adults === 1) {
          return;
        } else {
          adults -= 1;
          allGuests -= 1;
          if (adults === 1) {
            e.target.parentElement.classList.add(
              "select-guest__counter--disable"
            );
            //dodaj klase disable do minusa adult
          }
        }
        break;

      case "adultPlus":
        if (adults === 1) {
          document
            .querySelector(`.counter-minus-adult`)
            .classList.remove("select-guest__counter--disable");
          //usnuń klase disable z minus adult
        }
        if (allGuests === 8) {
          return;
        } else {
          adults += 1;
          allGuests += 1;
          if (allGuests === 8) {
            e.target.parentElement.classList.add(
              "select-guest__counter--disable"
            );
            //dodaj klase disable do plus adult
            document
              .querySelector(`.counter-plus-child`)
              .classList.add("select-guest__counter--disable");
            //dodaj klase disable również do plus child
          }
        }
        break;

      case "childMinus":
        if (allGuests === 8) {
          document
            .querySelector(`.counter-plus-child`)
            .classList.remove("select-guest__counter--disable");
          //usnuń klase disable z plus child
          document
            .querySelector(`.counter-plus-adult`)
            .classList.remove("select-guest__counter--disable");
          //usuń kalse disble również z plus adult
        }
        if (children === 0) {
          return;
        } else {
          children -= 1;
          allGuests -= 1;
          if (children === 0) {
            e.target.parentElement.classList.add(
              "select-guest__counter--disable"
              //dodaj klase disable do minus child
            );
          }
        }
        break;
      case "childPlus":
        if (children === 0) {
          document
            .querySelector(`.counter-minus-child`)
            .classList.remove("select-guest__counter--disable");
          //usnuń klase disable z minus child
        }
        if (allGuests === 8) {
          return;
        } else {
          children += 1;
          allGuests += 1;
          if (allGuests === 8) {
            e.target.parentElement.classList.add(
              "select-guest__counter--disable"
              //dodaj klase disable do plus child
            );
            document
              .querySelector(`.counter-plus-adult`)
              .classList.add("select-guest__counter--disable");
            //dodaj kalse disble również do plus adult
          }
        }
        break;
      default:
        console.log("none");
        break;
    }

    //  const spanGuest = document.querySelector(`#${selector}`);

    console.log(selector, "#adult-result", adults);
    btnGuest.innerHTML = `<span>${adults}</span> Adults / <span>${children}</span> Children`;
    spanGuest.textContent = selector === "adult-result" ? adults : children;
  };

  const handleClickBtn = (e) => {
    e.preventDefault();
    const targetWindow = document.querySelector(`.select-${e.target.name}`);

    if (!targetWindow.classList.contains("active")) {
      targetWindow.style.pointerEvents = "visible";
      targetWindow.style.opacity = "1";
      targetWindow.classList.add("active");
    } else {
      targetWindow.style.pointerEvents = "none";
      targetWindow.style.opacity = "0";
      targetWindow.classList.remove("active");
    }
  };

  const afterFirstClickBtn = (e) => {
    if (e.target.classList.contains("book-page__article-select")) {
      [...e.target.children].forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
          item.style.pointerEvents = "none";
          item.style.opacity = "0";
        }
      });
    }

    if (e.target.classList.contains("book-btn")) {
      if (targetBtn.name !== e.target.name && targetBtn !== "zeroClick") {
        const targetWindow = document.querySelector(
          `.select-${targetBtn.name}`
        );
        console.log("ile razy usunie");
        targetWindow.style.pointerEvents = "none";
        targetWindow.style.opacity = "0";
        targetWindow.classList.remove("active");
      }
      targetBtn = e.target;
    }
  };

  return (
    <section className="book-page">
      <header className="book-page__title">
        <h1 className="book-page__title-h1">book</h1>
      </header>
      <article
        onClick={afterFirstClickBtn}
        className="book-page__article-select"
      >
        <nav className="book-page__navigation">
          <ul className="book-page__navigation-list">
            <li className="book-page__navigation-list-item li">
              <button
                name="guest"
                onClick={handleClickBtn}
                className="book-page__navigation-list-item-btn book-btn guest"
              >
                <span>1</span> Adults / <span>0</span> Children
              </button>
            </li>

            <li className="book-page__navigation-list-item li">
              <button
                id={idDate}
                name="date"
                onClick={handleClickBtn}
                className="book-page__navigation-list-item-btn book-btn date"
              >
                {date}
              </button>
            </li>

            <li className="book-page__navigation-list-item li">
              <button
                name="room"
                onClick={handleClickBtn}
                className="book-page__navigation-list-item-btn book-btn"
              >
                {roomName}
              </button>
            </li>
          </ul>
        </nav>

        <div className="window-to select-guest">
          <div className="select-guest__adult">
            <h3>Adults</h3>
            <div className="select-guest__counter">
              <span
                onClick={handleCounter}
                className="select-guest__counter-minus counter-minus-adult select-guest__counter--disable"
                id="adultMinus"
              >
                <FontAwesomeIcon className="icon" icon={faMinus} />
              </span>

              <span id="adult-result" className="select-guest__counter-result">
                1
              </span>

              <span
                onClick={handleCounter}
                className="select-guest__counter-plus counter-plus-adult"
                id="adultPlus"
              >
                <FontAwesomeIcon className="icon" icon={faPlus} />
              </span>
            </div>
          </div>
          <p className="select-guest__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum
            error distinctio perspiciatis tempore repudiandae voluptatem illum.
          </p>

          <div className="select-guest__child">
            <h3>Children</h3>
            <div className="select-guest__counter">
              <span
                onClick={handleCounter}
                className="select-guest__counter-minus counter-minus-child select-guest__counter--disable"
                id="childMinus"
              >
                <FontAwesomeIcon className="icon" icon={faMinus} />
              </span>

              <span id="child-result" className="select-guest__counter-result">
                0
              </span>

              <span
                onClick={handleCounter}
                className="select-guest__counter-plus counter-plus-child"
                id="childPlus"
              >
                <FontAwesomeIcon className="icon" icon={faPlus} />
              </span>
            </div>
          </div>

          <p className="select-guest__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum
            error distinctio perspiciatis tempore repudiandae voluptatem illum.
          </p>
        </div>
        <div className="window-to select-room">
          <div className="select-room__pictures">
            <img src={apartmentRoom} alt="exclusive-room" />
          </div>
          <div className="select-room__info">
            <h3 className="select-room__info-name">Exclusive Room</h3>
            <h4 className="select-room__info-price">4000</h4>
            <div className="select-room__info-details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore, rerum expedita reiciendis molestias ex sequi illo?
              Porro modi, eos rem tempora nisi aspernatur, repudiandae cumque
              culpa, ab natus suscipit illo.
            </div>
            <button className="more-details">more details</button>
          </div>
        </div>
        <div className="window-to select-date">
          <div className="calendar">
            <Calendar
              maxDate={new Date(year + 2, month, day)}
              minDate={new Date()}
              minDetail="month"
              locale="en-EN"
              className="class1"
              onChange={onChange}
              value={value}
              selectRange={true}
              showDoubleView={true}
              showFixedNumberOfWeeks={false}
              showNeighboringMonth={false}
            />
          </div>
        </div>
      </article>
      <article className="book-page__article-info">
        <div className=""></div>
      </article>
    </section>
  );
}
