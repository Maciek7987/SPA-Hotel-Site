import { useState } from "react";
import Calendar from "react-calendar";
import Popup from "../components/Modal";
import Availability from "../components/Availability";

import "../style/Book.scss";
import "../components/scss/Calendar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import doubleBedIcon from "../pictures/icons/room-icons/grey-double-bed.svg";

import exclusiveRoom from "../pictures/rooms/exclusive/pexels-cottonbro-2.jpg";
import exclusiveRoomDetails1 from "../pictures/rooms/exclusive/pexels-cottonbro-1.jpg";
import exclusiveRoomDetails2 from "../pictures/rooms/exclusive/pexels-abdel-rahman-abu-baker-3.jpg";
import exclusiveRoomDetails3 from "../pictures/rooms/exclusive/pexels-cottonbro-4.jpg";

import apartmentRoom from "../pictures/rooms/apartment/pexels-elina-sazonova-room-1.jpg";
import apartmentRoomDetails1 from "../pictures/rooms/apartment/pexels-maria-orlova-2.jpg";
import apartmentRoomDetails2 from "../pictures/rooms/apartment/pexels-cottonbro-3.jpg";

import standardRoom from "../pictures/rooms/standard/pexels-natasha-filippovskaya-1.jpg";
import standardRoomDetails1 from "../pictures/rooms/standard/pexels-donald-tong-2.jpg";
import standardRoomDetails2 from "../pictures/rooms/standard/pexels-cottonbro-3.jpg";
import standardRoomDetails3 from "../pictures/rooms/standard/pexels-polina-kovaleva-4.jpg";

//isolated some variables, them cause errors
let targetBtn = "zeroClick";
let indexOfObjectImges = 1;
let adults = 1,
  children = 0,
  maxGuestsOnRoom = 6,
  allGuests = adults + children,
  date = "Check In / Check Out",
  roomName = "select room";

export default function Book() {
  const [value, onChange] = useState(new Date());

  const objectImages = [
    {
      title: "Exclusive Room",
      src: exclusiveRoom,
      price: "$1148",
      description:
        "Our the most luxory and elegante Exclusive Rooms offer Incredible interior furnished in the richly decorative style. The marble bathroom with details include 24-carat gold-plated. Upon check-in guests can expect to personal butler service receive 24-hour.",
      moreDescription:
        "Our the most luxory and elegante Exclusive Rooms offer Incredible interior furnished in the richly decorative style. The marble bathroom with details include 24-carat gold-plated, designed by legendary Vivienne Girard, one of the biggest icons of french interior design. Dining area with unparalleled view, large comfortable sofa in living room. Upon check-in guests can expect to personal butler service receive 24-hour.",
      alt: "exclusiveRoom",
      moreDetailsImage: [
        exclusiveRoom,
        exclusiveRoomDetails1,
        exclusiveRoomDetails2,
        exclusiveRoomDetails3,
      ],
    },
    {
      title: "Apartment Room",
      price: "$876",
      src: apartmentRoom,
      description:
        "Our Suites ensure amazing experience. Luxury and comfortable interior designed for our the most demanding guests. The privace terrace with breathtaking view. Enjoy a well-earned rest in one of the your dreamed interior.",
      moreDescription:
        "Our Suites ensure amazing experience. Luxury and comfortable interior designed for our the most demanding guests. Bathroom features beautiful mosaic floors. One king bed, plus one queen size sofa bed. The privace terrace with breathtaking view. Enjoy a well-earned rest in one of the your dreamed interior.",
      alt: "apartmentRoom",
      moreDetailsImage: [
        apartmentRoom,
        apartmentRoomDetails1,
        apartmentRoomDetails2,
      ],
    },
    {
      title: "Standard Room",
      price: "$389",
      src: standardRoom,
      description:
        "Our Standard Rooms offer unparalleled rest, come with a King bed. Let yourself a relaxing night. The perfect blend of luxury and elegant with contemporary décor.",
      moreDescription:
        "Our Standard Rooms offer unparalleled rest, come with a King bed. Let yourself a relaxing night. Living room with sofa and two comfortable armchairs, bathroom is finished in rustic style. The perfect blend of luxury and elegant with contemporary décor.",
      alt: "standardRoom",
      moreDetailsImage: [
        standardRoom,
        standardRoomDetails1,
        standardRoomDetails2,
        standardRoomDetails3,
      ],
    },
  ];

  let [selectedRoomtitle, setTitle] = useState(
    objectImages[indexOfObjectImges].title
  );
  let [selectedRoomDescription, setDescription] = useState(
    objectImages[indexOfObjectImges].moreDescription
  );
  let [moreDetailsImage, setImage] = useState(
    objectImages[indexOfObjectImges].moreDetailsImage
  );
  let idDate;
  let dateNow = new Date();

  let year = dateNow.getFullYear();
  let month = dateNow.getMonth() + 1;
  let day = dateNow.getDate();

  if (value.length === 2) {
    idDate = "biggerFontSize";
    date = `${value[0].getDate()}.${
      value[0].getMonth() + 1
    }.${value[0].getFullYear()} - ${value[1].getDate()}.${
      value[1].getMonth() + 1
    }.${value[1].getFullYear()}`;
  }

  let whichElement = "next";

  //50 pokoji zwykłych numery 1-50 włącznie
  //30 apartamentów numery 71-100 włącznie
  //20 exclusive numery 51-70 włacznie

  //pokoje zwykłe z 1 sypialnia (30)
  //pokoje zwykłe z 2 sypialniami (20)

  //apartamenty z 1 sypialnia (20)
  //apartamenty z 2 sypialniami (10)

  //exclusive z 1 sypialnia (10)
  //exclusive z 2 sypialniami (10)

  //wybranie ile dorosłych i ile dzieci ze wzgledu na cene za osobe dorosła i za dziecko plus do tego cena za standard pokoju
  //wybranie ilości sypialni oraz standard pokoju
  //określenie przyjazdu
  //pokazanie jaki jest wolny pokój w jakim przedziale terminów
  //określenie wyjazdu

  const changeImage = (selectRoomImg, modifire) => {
    const btnRoom = document.querySelector(
      ".book-page__navigation-list-item-btn.book-btn.room"
    );
    //at the beginning we remove class which was add to element in previous click, default is "next" class
    //its important because this element is now "current" and it have differnt animation
    selectRoomImg.classList.remove(whichElement);

    //asign to "whichElement" name of class, depending on whether modifire is true or false
    whichElement = modifire ? "next" : "prev";

    //objectImages is declarated above "array"

    indexOfObjectImges = modifire
      ? indexOfObjectImges + 1
      : indexOfObjectImges - 1;
    indexOfObjectImges =
      indexOfObjectImges === 3 ? (indexOfObjectImges = 0) : indexOfObjectImges;
    indexOfObjectImges =
      indexOfObjectImges === -1 ? (indexOfObjectImges = 2) : indexOfObjectImges;

    //at the end of this function we remove class "current" form animated img, but only after next click we remove this element because then it don't have class "current" and animation on this element is finished
    [...selectRoomImg.parentElement.children].forEach((img) => {
      if (!img.classList.contains("current")) {
        img.remove();
      }
    });

    //create img elemnet, set atribute class from above variable,
    //important also set class "current" which help to defined img for next click
    //and then for next click assigning this image as selectRoomImg
    //set atribute src putting as index also above variable and add to parent of images
    const createdImgElementNext = document.createElement("img");
    createdImgElementNext.setAttribute(
      "class",
      `select-room__pictures-img current ${whichElement}`
    );
    createdImgElementNext.setAttribute("id", "roomSel");
    createdImgElementNext.setAttribute(
      "alt",
      `${objectImages[indexOfObjectImges].alt}`
    );
    createdImgElementNext.setAttribute(
      "src",
      `${objectImages[indexOfObjectImges].src}`
    );
    selectRoomImg.parentElement.appendChild(createdImgElementNext);

    //differnt animation if after click, modifire was false(prev, so left side), true(next, so right side)
    if (modifire) {
      selectRoomImg.animate(
        { transform: "translateX(-100%)" },
        { duration: 500, fill: "forwards", easing: "ease" }
      );
    } else {
      selectRoomImg.animate(
        { transform: "translateX(100%)" },
        { duration: 500, fill: "forwards", easing: "ease" }
      );
    }
    selectRoomImg.classList.remove("current");
    const divInfo = selectRoomImg.parentElement.parentElement.lastChild;

    setTitle((selectedRoomtitle = objectImages[indexOfObjectImges].title));
    setDescription(
      (selectedRoomDescription =
        objectImages[indexOfObjectImges].moreDescription)
    );
    setImage(
      (moreDetailsImage = objectImages[indexOfObjectImges].moreDetailsImage)
    );

    divInfo.children[0].textContent = selectedRoomtitle;
    divInfo.children[1].innerHTML = `${objectImages[indexOfObjectImges].price} <span>USD / NIGHT</span>`;
    divInfo.children[2].textContent =
      objectImages[indexOfObjectImges].description;

    btnRoom.textContent = selectedRoomtitle;
  };

  const cursorChanger = (selectRoom) => {
    let limitToNextImgCursor = selectRoom.firstChild.offsetWidth / 2;
    selectRoom.addEventListener("mousemove", (e) => {
      if (e.clientX > limitToNextImgCursor) {
        selectRoom.classList.add("select-room--modifire");
      } else {
        selectRoom.classList.remove("select-room--modifire");
      }
    });
  };

  const handleCounter = (e) => {
    e.preventDefault();
    console.log("counter: " + e.target.parentElement);
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
        if (allGuests === maxGuestsOnRoom || adults === 4) {
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
        if (allGuests === maxGuestsOnRoom || adults === 4) {
          return;
        } else {
          adults += 1;
          allGuests += 1;
          if (adults === 4) {
            e.target.parentElement.classList.add(
              "select-guest__counter--disable"
            );
            //dodaj klase disable do plus adult kiedy adult ma 4
          }
          if (allGuests === maxGuestsOnRoom) {
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
        if (allGuests === maxGuestsOnRoom) {
          document
            .querySelector(`.counter-plus-child`)
            .classList.remove("select-guest__counter--disable");
          //usnuń klase disable z plus child

          if (adults !== 4) {
            document
              .querySelector(`.counter-plus-adult`)
              .classList.remove("select-guest__counter--disable");
            //usuń kalse disble również z plus adult jesli jest rózne od 4
          }
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
        if (allGuests === maxGuestsOnRoom) {
          return;
        } else {
          children += 1;
          allGuests += 1;
          if (allGuests === maxGuestsOnRoom) {
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
    btnGuest.innerHTML = `<span>${adults}</span> Adults / <span>${children}</span> Children`;
    spanGuest.textContent = selector === "adult-result" ? adults : children;
  };

  const handleClickBtn = (e) => {
    e.preventDefault();
    const targetWindow = document.querySelector(`.select-${e.target.name}`);
    if (e.target.name === "room") {
      e.target.textContent = objectImages[indexOfObjectImges].title;
      cursorChanger(targetWindow);
    }

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
    //if clicked target is img or container "bgc-room" them have id "roomSel"
    if (e.target.id === "roomSel") {
      //assign img to variable which is shown in the slider, and after whose click changing image
      const selectRoomImg = document.querySelector(
        ".select-room__pictures-img.current"
      );

      //call function "changeImage" with true/false second argument depending on whether main element "select-room" has class "modifire"
      if (
        selectRoomImg.parentElement.parentElement.classList.contains(
          "select-room--modifire"
        )
      ) {
        changeImage(selectRoomImg, true);
      } else changeImage(selectRoomImg, false);
    }

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
                className="book-page__navigation-list-item-btn book-btn room"
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
            Availabilty are rooms with one or 2 bethrooms, every of them comes
            with a King bed
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
            Children under 6 y.o. are not charged
          </p>
        </div>
        <div className="window-to select-room">
          <div id="roomSel" className="bgc-room"></div>
          <div className="select-room__pictures">
            <img
              className="select-room__pictures-img current"
              id="roomSel"
              loading="lazy"
              src={objectImages[1].src}
              alt="apartment-room"
            />
          </div>
          <div className="select-room__info">
            <h3 className="select-room__info-name">{objectImages[1].title}</h3>
            <h4 className="select-room__info-price">
              {objectImages[indexOfObjectImges].price}
              <span> USD / NIGHT</span>
            </h4>
            <div className="select-room__info-details">
              {objectImages[1].description}
            </div>
            <span className="select-room__info__bedIcon">
              <img src={doubleBedIcon} alt="doubleBedIcon" /> King Bed
            </span>
            <Popup
              title={selectedRoomtitle}
              description={selectedRoomDescription}
              moreDetailsImage={moreDetailsImage}
            ></Popup>
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
        <div className="">
          <Availability date={value}></Availability>
        </div>
      </article>
    </section>
  );
}
