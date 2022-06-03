import React from "react";
import Popup from "reactjs-popup";
import "./scss/Modal.scss";
import calncelIcon from "../pictures/icons/cancel-icon/cancel_96245.svg";
import bedIcon from "../pictures/icons/room-icons/double_bed_icon_150149.svg";
import barIcon from "../pictures/icons/room-icons/grey-bar.svg";
import bellhopIcon from "../pictures/icons/room-icons/grey-bellhop.svg";
import buildingIcon from "../pictures/icons/room-icons/grey-building.svg";
import spaIcon from "../pictures/icons/room-icons/grey-spa.svg";
import tvIcon from "../pictures/icons/room-icons/grey-tv.svg";
import wifiIcon from "../pictures/icons/room-icons/grey-wifi.svg";

const objectIcons = [
  { icon: bedIcon, specification: "King bed" },
  { icon: barIcon, specification: "Marble bar" },
  { icon: bellhopIcon, specification: "Butler service upon request" },
  {
    exclusive: {
      icon: buildingIcon,
      specification: "905 sq.ft. / 84 sq.m. Located on floor 1",
    },
    apartment: {
      icon: buildingIcon,
      specification: "646 sq.ft. / 60 sq.m. Located on floor 2",
    },
    standard: {
      icon: buildingIcon,
      specification: "345 sq.ft. / 32 sq.m.",
    },
  },
  { icon: spaIcon, specification: "SPA daily from 8 a.m. to 7 p.m" },
  { icon: spaIcon, specification: "SPA daily from 8 a.m. to 7 p.m" },
  {
    exclusive: {
      icon: tvIcon,
      specification: "Curved 65-inch television",
    },
    apartment: {
      icon: tvIcon,
      specification: "50-inch television",
    },
    standard: {
      icon: wifiIcon,
      specification: "Free WiFi",
    },
  },
];

let moreInformation;
let caption = document.createElement("div");
const modalContent = (title, description) => {
  let indexOfObjectIcons;
  switch (title) {
    case "Exclusive Room":
      indexOfObjectIcons = 7;

      break;
    case "Apartment Room":
      indexOfObjectIcons = 5;

      break;
    case "Standard Room":
      indexOfObjectIcons = 4;

      break;
    default:
      console.log("none");
      break;
  }
  caption.setAttribute("class", "modal__content-caption");
  caption.innerHTML += `${description} Designed by legendary Vivienne Girard, one of the biggest
      icons of french interior design.`;
  for (let i = 0; i < indexOfObjectIcons; i++) {
    caption.innerHTML += `
    <li> 
    <div className="modal__content-caption-icon"></div>
    <div className="modal__content-caption-specification"></div>
    </li>`;
  }
};

export default ({ title, description }) => {
  return (
    <Popup
      trigger={<button className="more-details"> more details </button>}
      modal
      nested
    >
      {(close) => (
        <main className="modal">
          <button className="modal__close" onClick={close}>
            <img src={calncelIcon} alt="calncelIcon" />
          </button>
          <header className="modal__header">
            <h3> {title} </h3>
          </header>
          <div className="modal__content">
            {modalContent(title, description)}
          </div>
          <footer className="modal__actions">
            <button
              className="modal__actions-more-details"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </footer>
        </main>
      )}
    </Popup>
  );
};

//  <div className="modal__content-caption">
//    <li>
//      <div className="modal__content-caption-icon"></div>
//      <div className="modal__content-caption-specification"></div>
//    </li>
//    <li>
//      <div className="modal__content-caption-icon"></div>
//      <div className="modal__content-caption-specification"></div>
//    </li>
//    <li>
//      <div className="modal__content-caption-icon">sdfdsf</div>
//      <div className="modal__content-caption-specification">dfsdfdsf</div>
//    </li>
//    <li>
//      <div className="modal__content-caption-icon">dsfsdfs</div>
//      <div className="modal__content-caption-specification">dfsdf</div>
//    </li>
//    <li>
//      <div className="modal__content-caption-icon">dsfds</div>
//      <div className="modal__content-caption-specification">dfsdfds</div>
//    </li>
//    <li>
//      <div className="modal__content-caption-icon">sdfsfsdfs</div>
//      <div className="modal__content-caption-specification">fdsfdsf</div>
//    </li>
//    <li>
//      <div className="modal__content-caption-icon"></div>
//      <div className="modal__content-caption-specification"></div>
//    </li>
//    <li>
//      <div className="modal__content-caption-icon"></div>
//      <div className="modal__content-caption-specification"></div>
//    </li>
//  </div>;
