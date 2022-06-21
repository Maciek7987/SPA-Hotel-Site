import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./scss/Tooltips.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faMinus } from "@fortawesome/free-solid-svg-icons";
let arrayAges = ["", "", "", "", ""];

function Ages({ numberOfChild, guests, name, active, func }) {
  const index = Number(name);
  let [spanContent, setSpan] = useState(
    <span className="open">
      <FontAwesomeIcon className="dash dash--open" icon={faMinus} />
      <FontAwesomeIcon className="dash dash--open" icon={faMinus} />
    </span>
  );

  if (guests === "disable") arrayAges[index] = "<6";

  const selectBtnMenu = (e, close) => {
    e.preventDefault();

    setSpan((spanContent = e.target.textContent));
    arrayAges[index] = spanContent;
    func(arrayAges);
    close();
  };

  return (
    <div className={`selectAge selectAge--${active}`}>
      <span className="selectAge__label">{numberOfChild}</span>
      <Popup
        trigger={(open) => (
          <button
            type="button"
            className={`selectAge__btn selectAge__btn--${guests}`}
          >
            {guests === "enable" ? (
              open ? (
                <>
                  {spanContent}

                  <FontAwesomeIcon
                    className="selectAge__btn-icon selectAge__btn-icon--open"
                    icon={faCaretDown}
                  />
                </>
              ) : (
                <>
                  {spanContent}

                  <FontAwesomeIcon
                    className="selectAge__btn-icon"
                    icon={faCaretDown}
                  />
                </>
              )
            ) : (
              "<6"
            )}
          </button>
        )}
        closeOnDocumentClick
        arrow={false}
      >
        {(close) => (
          <div className="selectAge__btn-menu">
            <button onClick={(e) => selectBtnMenu(e, close)}>{"<6"}</button>
            <button onClick={(e) => selectBtnMenu(e, close)}>6</button>
            <button onClick={(e) => selectBtnMenu(e, close)}>8</button>
            <button onClick={(e) => selectBtnMenu(e, close)}>9</button>
            <button onClick={(e) => selectBtnMenu(e, close)}>10</button>
            <button onClick={(e) => selectBtnMenu(e, close)}>11</button>
            <button onClick={(e) => selectBtnMenu(e, close)}>12</button>
            <button onClick={(e) => selectBtnMenu(e, close)}>13</button>
            <button onClick={(e) => selectBtnMenu(e, close)}>14</button>
            <button onClick={(e) => selectBtnMenu(e, close)}>15</button>
            <button onClick={(e) => selectBtnMenu(e, close)}>16</button>
            <button onClick={(e) => selectBtnMenu(e, close)}>17</button>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default function Tooltips({ children, transferAgesFromChild }) {
  return (
    <div className="tooltipBoundary">
      <Ages
        numberOfChild="Child 1 Age"
        guests={1 + children[0] >= 5 ? "disable" : "enable"}
        name="0"
        active={children[1] >= 1 ? "active" : ""}
        func={transferAgesFromChild}
      ></Ages>
      <Ages
        numberOfChild="Child 2 Age"
        guests={2 + children[0] >= 5 ? "disable" : "enable"}
        name="1"
        active={children[1] >= 2 ? "active" : ""}
        func={transferAgesFromChild}
      ></Ages>
      <Ages
        numberOfChild="Child 3 Age"
        guests={3 + children[0] >= 5 ? "disable" : "enable"}
        name="2"
        active={children[1] >= 3 ? "active" : ""}
        func={transferAgesFromChild}
      ></Ages>
      <Ages
        numberOfChild="Child 4 Age"
        guests="disable"
        name="3"
        active={children[1] >= 4 ? "active" : ""}
        func={transferAgesFromChild}
      ></Ages>
      <Ages
        numberOfChild="Child 5 Age"
        guests="disable"
        name="4"
        active={children[1] >= 5 ? "active" : ""}
        func={transferAgesFromChild}
      ></Ages>
    </div>
  );
}
