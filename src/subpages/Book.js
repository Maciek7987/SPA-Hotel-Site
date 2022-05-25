// import { useState } from "react";
import "../style/Book.scss";

export default function Book() {
  // const [value, onChange] = useState(new Date());
  let targetBtn = "zeroClick";

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
      console.log("add active");
      targetWindow.style.pointerEvents = "visible";
      targetWindow.style.opacity = "1";
      targetWindow.classList.add("active");
    } else {
      console.log("add active");
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
      if (targetBtn !== e.target && targetBtn !== "zeroClick") {
        const targetWindow = document.querySelector(
          `.select-${targetBtn.name}`
        );
        targetWindow.style.pointerEvents = "none";
        targetWindow.style.opacity = "0";
        targetWindow.classList.remove("active");
      }
      targetBtn = e.target;
    }
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
          <div className="calendar"></div>
        </div>
      </article>
      <article className="book-page__article-info">
        <div className=""></div>
      </article>
    </section>
  );
}
