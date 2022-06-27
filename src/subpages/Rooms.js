import "../style/Rooms.scss"
import natureIconRoom from "../pictures/icons/nature_icon_room.png";

export default function Rooms() {
  return (
    <>
      <section className="room-page">
        <img id="natureIconRoom" src={natureIconRoom} alt="" />
        <header className="room-page__title">
          <h1 className="room-page__title-h1">room</h1>
        </header>
        <article className="room-page__article"></article>
      </section>
    </>
  );
}
