// import { useState } from "react";

import "./scss/Availability.scss";
import "./Email";
import Emial from "./Email";

// //20 pokoji zwykłych numery 1-20 włącznie
// //10 apartamentów numery 27-36 włącznie
// //6 exclusive numery 21-26 włacznie

// //pokoje zwykłe z 1 sypialnia (6) 1-6
// //pokoje zwykłe z 2 sypialniami (14) 7-20

// //apartamenty z 1 sypialnia (5) 27-31
// //apartamenty z 2 sypialniami (5) 32-36

// //exclusive z 1 sypialnia (3) 21-23
// //exclusive z 2 sypialniami (3) 24-26

export default function Availability({ roomName, guests, termin, arrayAges }) {
  let flag = false;
  //[0]-adults [1]-children
  let textOfAvailbsBedrooms = "";

  if (guests[0] === 1) {
    textOfAvailbsBedrooms = "one bedroom";
  }
  if (guests[0] + guests[1] >= 2) {
    console.log(arrayAges);
    console.log(arrayAges.child1 === "<6", arrayAges.child2 === "<6");
    if (guests[0] === 2 && guests[1] === 0)
      textOfAvailbsBedrooms = "two or one bedroom";
    if (guests[0] === 1 && guests[1] === 1)
      textOfAvailbsBedrooms = "two or one bedroom";
    if (guests[0] === 1 && guests[1] === 2) {
      if (arrayAges.child1 === "<6" || arrayAges.child2 === "<6")
        textOfAvailbsBedrooms = "two or one bedroom";
      else textOfAvailbsBedrooms = "two bedrooms";
    }
    if (guests[0] === 2 && guests[1] === 1) {
      if (arrayAges.child1 === "<6")
        textOfAvailbsBedrooms = "two or one bedroom";
      else textOfAvailbsBedrooms = "two bedrooms";
    }
  }
  if (guests[0] + guests[1] >= 4 || guests[0] === 3) {
    textOfAvailbsBedrooms = "two bedrooms";
  }

  if (roomName != "Select Room" && termin != "Check In / Check Out")
    flag = true;
  else flag = false;

  const information =
    textOfAvailbsBedrooms === "two or one bedroom"
      ? " in the date tab you can choose between one or two bedrooms"
      : "";
  return (
    <>
      <section className="email">
        <Emial valueToSubmit="Book" flag={flag}></Emial>
      </section>
      <section className="summary">
        <div>
          adults: {guests[0]}, children: {guests[1]}
        </div>
        <div>room: {roomName}</div>
        <div>termin: {termin}</div>
        <div>availbs: {textOfAvailbsBedrooms}</div>
        <div>{information}</div>
      </section>
    </>
  );
}

//show only this date at which haven't free rooms for selected (two or one bedrooms)
// if number of adults is 1 then show only rooms with one bedroom
// if number of guests is 2 or 3 then show one and two bedrooms
// if number of guests is 4 or number of adult is 3 then show only two bedrooms

// for selected room with a given number of bedrooms, check if ten of reservation has common period to disable this termin
// you could say that on the "millisecond" axis we extract ranges which will be already booked
