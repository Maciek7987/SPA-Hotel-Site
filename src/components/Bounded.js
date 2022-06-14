import React from "react";
import Popup from "reactjs-popup";
import "./scss/Bounded.scss";

function Ages({ numberOfChild }) {
  return (
    <div className="selectAge">
      <span className="selectAge__label">{numberOfChild}</span>
      <Popup
        trigger={<button type="button" className="selectAge__btn"></button>}
        // position={"button"}
        closeOnDocumentClick
        arrow={false}
      >
        {(close) => (
          <div className="selectAge__btn-menu">
            <button>{"<6"}</button>
            <button
              onClick={() => {
                close();
              }}
            >
              6
            </button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
            <button>11</button>
            <button>12</button>
            <button>13</button>
            <button>14</button>
            <button>15</button>
            <button>16</button>
            <button>17</button>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default function BoundedTooltip() {
  return (
    <div className="tooltipBoundary">
      <Ages numberOfChild="Child 1 Age"></Ages>
      <Ages numberOfChild="Child 2 Age"></Ages>
      <Ages numberOfChild="Child 3 Age"></Ages>
      <Ages numberOfChild="Child 4 Age"></Ages>
      <Ages numberOfChild="Child 5 Age"></Ages>
    </div>
  );
}
