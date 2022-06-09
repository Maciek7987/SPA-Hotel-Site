// import { useState } from "react";

// import "./scss/Availability.scss";

// //50 pokoji zwykłych numery 1-50 włącznie
// //30 apartamentów numery 71-100 włącznie
// //20 exclusive numery 51-70 włacznie

// //pokoje zwykłe z 1 sypialnia (30)
// //pokoje zwykłe z 2 sypialniami (20)

// //apartamenty z 1 sypialnia (20)
// //apartamenty z 2 sypialniami (10)

// //exclusive z 1 sypialnia (10)
// //exclusive z 2 sypialniami (10)

export default function Availability({ roomName, guests }) {
  console.log(roomName, guests);
  //   let [isAvailability, setAvailability] = useState("");
  //   let arrayTerminsReservation = [
  //     {
  //       id: 2222,
  //       numberOfRoom: 63,
  //       name: "Antionio",
  //       surname: "Filipaik",
  //       phone: 897754096,
  //       email: "chiacynt32@gamil.com",
  //       checkIn: new Date(2023, 6, 7),
  //       checkOut: new Date(2023, 6, 10),
  //     },
  //     {
  //       id: 3333,
  //       numberOfRoom: 1,
  //       name: "Maradnionio",
  //       surname: "Delazqz",
  //       phone: 687231902,
  //       email: "fdddsse@gamil.com",
  //       checkIn: new Date(2022, 6, 15),
  //       checkOut: new Date(2022, 6, 18),
  //     },
  //     {
  //       id: 6666,
  //       numberOfRoom: 24,
  //       name: "Nico",
  //       surname: "Alberts",
  //       phone: 876424008,
  //       email: "fdddsse@gamil.com",
  //       checkIn: new Date(2022, 6, 25),
  //       checkOut: new Date(2022, 7, 3),
  //     },
  //     {
  //       id: 3333,
  //       numberOfRoom: 1,
  //       name: "Maradnionio",
  //       surname: "Delazqz",
  //       phone: 687231902,
  //       email: "fdddsse@gamil.com",
  //       checkIn: new Date(2022, 7, 14),
  //       checkOut: new Date(2022, 8, 25),
  //     },
  //   ];

  //   let objectNumberOfRooms = {
  //     exclusive: { min: 51, max: 70, roomsWithTwoBedfrom: 61 },
  //     apartments: { min: 71, max: 100, roomsWithTwoBedfrom: 21 },
  //     standard: { min: 1, max: 50, roomsWithTwoBedfrom: 31 },
  //   };
  //   let terms;

  //   if (date.length === 2) {
  //     terms = {
  //       checkIn: new Date(
  //         date[0].getFullYear(),
  //         date[0].getMonth() + 1,
  //         date[0].getDate()
  //       ),
  //       checkOut: new Date(
  //         date[1].getFullYear(),
  //         date[1].getMonth() + 1,
  //         date[1].getDate()
  //       ),
  //     };
  //   } else {
  //     terms = {
  //       checkIn: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
  //       checkOut: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
  //     };
  //   }
  //   let flg1, flg2, flg3, flg4, flg5;
  //   arrayTerminsReservation.forEach((book, key) => {
  //       //you could say that on the "millisecond" axis we check range from check-in point to check-out point given from user overlaps with any range already booked.
  //     if (terms.checkIn.getTime() > book.checkOut.getTime()) {
  //       //1
  //       key = true;
  //       //   isAvailability = "jest pełna dostępność";
  //     } else if (terms.checkIn.getTime() > book.checkIn.getTime()) {
  //       //2
  //       key = false;
  //       //   isAvailability = "przykro nam w tym terminie nie mamy wybranych pokoji";
  //     } else if (terms.checkOut.getTime() > book.checkIn.getTime()) {
  //       //3
  //       key = false;
  //       //   isAvailability = "przykro nam w tym terminie nie mamy wybranych pokoji";
  //     } else if (terms.checkIn.getTime() === book.checkIn.getTime()) {
  //       //4
  //       key = false;
  //       //   isAvailability = "przykro nam w tym terminie nie mamy wybranych pokoji";
  //     } else if (terms.checkOut.getTime() === book.checkIn.getTime()) {
  //       key = false;
  //       //   isAvailability = "przykro nam w tym terminie nie mamy wybranych pokoji";
  //     } else {
  //       key = true;
  //       //   isAvailability = "jest pełna dostępność";
  //     }
  //     console.log(key);
  //   });

  return <></>;
}
