import React from "react";
import Popup from "reactjs-popup";
import "./scss/Modal.scss";
import calncelIcon from "../pictures/icons/cancel-icon/cancel_96245.svg";
import bedIcon from "../pictures/icons/room-icons/grey-double-bed.svg";
import barIcon from "../pictures/icons/room-icons/grey-bar.svg";
import bellhopIcon from "../pictures/icons/room-icons/grey-bellhop.svg";
import buildingIcon from "../pictures/icons/room-icons/grey-building.svg";
import spaIcon from "../pictures/icons/room-icons/grey-spa.svg";
import tvIcon from "../pictures/icons/room-icons/grey-tv.svg";
import wifiIcon from "../pictures/icons/room-icons/grey-wifi.svg";

const objectIcons = [
  { icon: bedIcon, alt: "bedIcon", specification: "King bed" }, //0
  { icon: barIcon, alt: "barIcon", specification: "Marble bar" }, //1
  {
    icon: bellhopIcon,
    alt: "bellhopIcon",
    specification: "Butler service upon request",
  }, //2
  {
    //3
    exclusive: {
      icon: buildingIcon,
      alt: "buildingIcon",
      specification: "905 sq.ft. / 84 sq.m. Located on floor 1",
    },
    apartment: {
      icon: buildingIcon,
      alt: "buildingIcon",
      specification: "646 sq.ft. / 60 sq.m. Located on floor 3",
    },
    standard: {
      icon: buildingIcon,
      alt: "buildingIcon",
      specification: "345 sq.ft. / 32 sq.m. Located on floor 2",
    },
  },
  {
    icon: spaIcon,
    alt: "spaIcon",
    specification: "SPA daily from 8 a.m. to 7 p.m",
  }, //4

  {
    //5
    exclusive: {
      icon: tvIcon,
      alt: "tvIcon",
      specification: "Curved 65-inch television",
    },
    apartment: {
      icon: tvIcon,
      alt: "tvIcon",
      specification: "50-inch television",
    },
    standard: {
      icon: tvIcon,
      alt: "tvIcon",
      specification: "40-inch television",
    },
  },
  { icon: wifiIcon, alt: "wifiIcon", specification: "Free WiFi" }, //6
];

let li1, li2, li3, li4, li5, li6, li7;
let moreInformation, content;
const modalContent = (title, description) => {
  switch (title) {
    case "Exclusive Room":
      content = `${description} Designed by legendary Vivienne Girard, one of the biggest
      icons of french interior design.`;

      li1 = objectIcons[3].exclusive; // in this object are 2 object (floor)
      li2 = objectIcons[0]; // in this object are 2 object (bed)
      li3 = objectIcons[2]; // in this object are 2 object (butler)
      li4 = objectIcons[1]; // in this object are 2 object (bar)
      li5 = objectIcons[4]; // in this object are 2 object (spa)
      li6 = objectIcons[5].exclusive; // in this object are 2 object (tv)
      li7 = objectIcons[6]; // in this object are 2 object (wifi)

      break;
    case "Apartment Room":
      content = `${description} Designed by legendary Vivienne Girard, one of the biggest
      icons of french interior design.`;

      li1 = objectIcons[3].apartment; // in this object are 2 object (floor)
      li2 = objectIcons[0]; // in this object are 2 object (bed)
      li3 = objectIcons[4]; // in this object are 2 object (spa)
      li4 = objectIcons[5].apartment; // in this object are 2 object (tv)
      li5 = objectIcons[6]; // in this object are 2 object (wifi)
      li6 = "";
      li7 = "";

      break;
    case "Standard Room":
      content = `${description} Designed by legendary Vivienne Girard, one of the biggest
      icons of french interior design.`;

      li1 = objectIcons[3].standard; // in this object are 2 object (floor)
      li2 = objectIcons[0]; // in this object are 2 object (bed)
      li3 = objectIcons[5].standard; // in this object are 2 object (tv)
      li4 = objectIcons[6]; // in this object are 2 object (wifi)
      li5 = "";
      li6 = "";
      li7 = "";

      break;
    default:
      console.log("none");
      break;
  }

  moreInformation = (
    <div className="modal__content-caption">
      <p className="modal__content-caption-paragraph">{content}</p>
      <li>
        <img
          className="modal__content-caption-icon"
          src={li1.icon}
          alt={li1.alt}
        />
        <div className="modal__content-caption-specification">
          {li1.specification}
        </div>
      </li>
      <li>
        <img
          className="modal__content-caption-icon"
          src={li2.icon}
          alt={li2.alt}
        />
        <div className="modal__content-caption-specification">
          {li2.specification}
        </div>
      </li>
      <li>
        <img
          className="modal__content-caption-icon"
          src={li3.icon}
          alt={li3.alt}
        />
        <div className="modal__content-caption-specification">
          {li3.specification}
        </div>
      </li>
      <li>
        <img
          className="modal__content-caption-icon"
          src={li4.icon}
          alt={li4.alt}
        />
        <div className="modal__content-caption-specification">
          {li4.specification}
        </div>
      </li>
      <li>
        <img
          className="modal__content-caption-icon"
          src={li5.icon}
          alt={li5.alt}
        />
        <div className="modal__content-caption-specification">
          {li5.specification}
        </div>
      </li>
      <li>
        <img
          className="modal__content-caption-icon"
          src={li6.icon}
          alt={li6.alt}
        />
        <div className="modal__content-caption-specification">
          {li6.specification}
        </div>
      </li>
      <li>
        <img
          className="modal__content-caption-icon"
          src={li7.icon}
          alt={li7.alt}
        />
        <div className="modal__content-caption-specification">
          {li7.specification}
        </div>
      </li>
    </div>
  );
  return moreInformation;
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
