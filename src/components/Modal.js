import React from "react";
import Popup from "reactjs-popup";
import "./scss/Modal.scss";
import calncelIcon from "../pictures/icons/cancel-icon/cancel_96245.svg";

export default () => {
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
            <h3> csssss </h3>
          </header>
          <div className="modal__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
            quibusdam voluptates delectus doloremque, explicabo tempore dicta
            adipisci fugit amet dignissimos? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Consequatur sit commodi beatae optio
            voluptatum sed eius cumque, delectus saepe repudiandae explicabo
            nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
          </div>
          <footer className="modal__actions">
            <button
              className="modal__actions-more-details"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close modal
            </button>
          </footer>
        </main>
      )}
    </Popup>
  );
};
