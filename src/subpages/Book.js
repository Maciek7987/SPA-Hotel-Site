import { useState } from "react";
import Calendar from "react-calendar";
import "../style/Book.scss";
import "../components/style/Calendar.scss";

let targetBtn = "zeroClick";
export default function Book() {
  //  let targetBtn = "zeroClick";
  const [value, onChange] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  let idDate;

  let dateNow = new Date();

  let year = dateNow.getFullYear();
  let month = dateNow.getMonth() + 1;
  let day = dateNow.getDate();

  let adults = 0,
    children = 0,
    guests = ` ${adults} Adults / ${children} Children`,
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

  //120 pokoji zwykłych
  //45 apartamentów
  //15 exclusive

  //pokoje zwykłe z 1 sypialnia (65)
  //pokoje zwykłe z 2 sypialniami (35)
  //pokoje zwykłe z 3 sypialniami (20)

  //apartamenty z 1 sypialnia (20)
  //apartamenty z 2 sypialniami (15)
  //apartamenty z 3 sypialniami (10)

  //exclusive z 1 sypialnia (5)
  //exclusive z 2 sypialniami (5)
  //exclusive z 3 sypialniami (5)

  //wybranie ile dorosłych i ile dzieci ze wzgledu na cene za osobe dorosła i za dziecko plus do tego cena za standard pokoju
  //wybranie ilości sypialni oraz standard pokoju
  //określenie przyjazdu
  //pokazanie jaki jest wolny pokój w jakim przedziale terminów
  //określenie wyjazdu

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
                className="book-page__navigation-list-item-btn book-btn"
              >
                {guests}
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

        <div className="window-to select-guest"></div>
        <div className="window-to select-room"></div>
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
            {/* <Calendar
              maxDate={new Date(year + 2, month, day)}
              minDate={new Date(year, month, 1)}
              minDetail="month"
              defaultActiveStartDate={new Date(year, month, 1)}
              locale="en-EN"
              className="class2"
              onChange={onChange2}
              value={value2}
            /> */}
          </div>
        </div>
      </article>
      <article className="book-page__article-info">
        <div className=""></div>
      </article>
    </section>
  );
}
