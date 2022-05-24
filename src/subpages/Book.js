import { useState } from "react";
import "../style/Book.scss";
import "../components/style/Calendar.scss";
import { Calendar } from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import "react-calendar/dist/Calendar.css";

export default function Book() {
  const [value, onChange] = useState(new Date());
  let flag = false;
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
    const divWindows = document.querySelectorAll(".window-to");

    // divWindows.forEach((item) => {
    //   item.style.transform = "translateY(50%)";
    //   item.style.opacity = "0";
    // });
    const targetWindow = document.querySelector(`.select-${e.target.name}`);

    // targetWindow.style.transform = "translateY(0)";
    // targetWindow.style.opacity = "1";
    targetWindow.classList.toggle("active");
  };

  let adults = 0,
    children = 0,
    guests = ` ${adults} Adults / ${children} Children`,
    date = "12.04.2022 - 23.06.2022",
    roomName = "select room";

  return (
    <section className="book-page">
      <header className="book-page__title">
        <h1 className="book-page__title-h1">book</h1>
      </header>
      <article className="book-page__article-select">
        <nav className="book-page__navigation">
          <ul className="book-page__navigation-list">
            <li className="book-page__navigation-list-item">
              <button
                name="guest"
                onClick={handleClickBtn}
                className="book-page__navigation-list-item-btn book-btn"
              >
                {guests}
                <FontAwesomeIcon className="arrow" icon={faArrowDown} />
              </button>
              <div className="window-to select-guest"></div>
            </li>

            <li className="book-page__navigation-list-item">
              <button className="book-page__navigation-list-item-btn book-btn date">
                {date}
              </button>
            </li>

            <li className="book-page__navigation-list-item">
              <button
                name="room"
                onClick={handleClickBtn}
                className="book-page__navigation-list-item-btn book-btn"
              >
                {roomName}
                <FontAwesomeIcon className="arrow" icon={faArrowDown} />
              </button>
              <div className="window-to select-room"></div>
            </li>
          </ul>
        </nav>
        {/* <div className="calendar">
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className="calendar">
          <Calendar onChange={onChange} value={value} />
        </div> */}
      </article>
      <article className="book-page__article-info">
        <div className=""></div>
      </article>
    </section>
  );
}
