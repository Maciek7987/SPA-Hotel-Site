import React from "react";
import Popup from "reactjs-popup";
import "./scss/Modal.scss";
import calncelIcon from "../pictures/icons/cancel-icon/cancel_96245.svg";
let moreInformation;
export default ({ title, description }) => {
  switch (title) {
    case "Exclusive Room":
      moreInformation =
        description +
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum error distinctio perspiciatis tempore repudiandae voluptatem illum.";
      break;
    case "Apartment Room":
      moreInformation =
        description +
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum error distinctio perspiciatis tempore repudiandae voluptatem illum.";
      break;
    case "Standard Room":
      moreInformation =
        description +
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum error distinctio perspiciatis tempore repudiandae voluptatem illum.";
      break;
    default:
      console.log("none");
      break;
  }
  return (
    <Popup
      trigger={<button className="more-details "> more details </button>}
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
          <div className="modal__content">{moreInformation}</div>
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
