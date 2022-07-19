import Popup from "reactjs-popup";

import "../style/Rooms.scss";
import natureIconRoom from "../pictures/icons/nature_icon_room.png";
import calncelIcon from "../pictures/icons/modal-icon/cancel_96245.svg";

import exclusiveRoom from "../pictures/rooms/exclusive/pexels-cottonbro-2.jpg";
import exclusiveRoomLarge from "../pictures/rooms/exclusive/pexels-cottonbro-2-lg.jpg";
import exclusiveRoomDetails1 from "../pictures/rooms/exclusive/pexels-cottonbro-1-mid.jpg";
import exclusiveRoomDetails1Large from "../pictures/rooms/exclusive/pexels-cottonbro-1-lg.jpg";
import exclusiveRoomDetails2 from "../pictures/rooms/exclusive/pexels-abdel-rahman-abu-baker-3.jpg";
import exclusiveRoomDetails2Large from "../pictures/rooms/exclusive/pexels-abdel-rahman-abu-baker-3-lg.jpg";
import exclusiveRoomDetails3 from "../pictures/rooms/exclusive/pexels-cottonbro-4.jpg";
import exclusiveRoomDetails3Large from "../pictures/rooms/exclusive/pexels-cottonbro-4-lg.jpg";

import apartmentRoom from "../pictures/rooms/apartment/pexels-elina-sazonova-room-1.jpg";
import apartmentRoomLarge from "../pictures/rooms/apartment/pexels-elina-sazonova-room-1-lg.jpg";
import apartmentRoomDetails1 from "../pictures/rooms/apartment/pexels-maria-orlova-2.jpg";
import apartmentRoomDetails1Large from "../pictures/rooms/apartment/pexels-maria-orlova-2-lg.jpg";
import apartmentRoomDetails2 from "../pictures/rooms/apartment/pexels-cottonbro-3.jpg";
import apartmentRoomDetails2Large from "../pictures/rooms/apartment/pexels-cottonbro-3-lg.jpg";

import standardRoom from "../pictures/rooms/standard/pexels-natasha-filippovskaya-1.jpg";
import standardRoomLarge from "../pictures/rooms/standard/pexels-natasha-filippovskaya-1-lg.jpg";
import standardRoomDetails1 from "../pictures/rooms/standard/pexels-donald-tong-2.jpg";
import standardRoomDetails1Large from "../pictures/rooms/standard/pexels-donald-tong-2-lg.jpg";
import standardRoomDetails2 from "../pictures/rooms/standard/pexels-cottonbro-3.jpg";
import standardRoomDetails2Large from "../pictures/rooms/standard/pexels-cottonbro-3-lg.jpg";
import standardRoomDetails3 from "../pictures/rooms/standard/pexels-polina-kovaleva-4.jpg";
import standardRoomDetails3Large from "../pictures/rooms/standard/pexels-polina-kovaleva-4-lg.jpg";

const ModalPhoto = ({ source, fullSizeSrc }) => {
  return (
    <Popup
      className="rooms-popup"
      trigger={
        <div>
          <img loading="lazy" src={source} alt={source} />
        </div>
      }
      modal
      nested
      lockScroll={true}
    >
      {(close) => (
        <main className="fullSizePhoto">
          <button className="fullSizePhoto__close" onClick={close}>
            <img src={calncelIcon} alt="calncelIcon" />
          </button>
          <section className="fullSizePhoto__content">
            <img loading="lazy" src={fullSizeSrc} alt={fullSizeSrc} />
          </section>
        </main>
      )}
    </Popup>
  );
};

export default function Rooms() {
  return (
    <>
      <main className="room-page">
        <img id="natureIconRoom" src={natureIconRoom} alt="" />
        <header className="room-page__title">
          <h1 className="room-page__title-h1">rooms</h1>
        </header>
        <section id="room-page-section" className="exclusive">
          <article className="room-page__articles">
            <div className="background2"></div>
            <div className="background"></div>
            <h2>Exclusive</h2>
            <div className="room-page__articles-gallery">
              <ModalPhoto
                source={exclusiveRoom}
                fullSizeSrc={exclusiveRoomLarge}
              ></ModalPhoto>
              <ModalPhoto
                source={exclusiveRoomDetails1}
                fullSizeSrc={exclusiveRoomDetails1Large}
              ></ModalPhoto>
              <ModalPhoto
                source={exclusiveRoomDetails2}
                fullSizeSrc={exclusiveRoomDetails2Large}
              ></ModalPhoto>
              <ModalPhoto
                source={exclusiveRoomDetails3}
                fullSizeSrc={exclusiveRoomDetails3Large}
              ></ModalPhoto>
            </div>
            <div className="room-page__articles-description">
              Our the most luxory and elegante Exclusive Rooms offer Incredible
              interior furnished in the richly decorative style. The marble
              bathroom with details include 24-carat gold-plated, designed by
              legendary Vivienne Girard, one of the biggest icons of french
              interior design. Dining area with unparalleled view, large
              comfortable sofa in living room. Upon check-in guests can expect
              to personal butler service receive 24-hour.
            </div>
          </article>
        </section>
        <section id="room-page-section" className="apartments">
          <article className="room-page__articles">
            <div className="background2"></div>
            <div className="background"></div>
            <h2>Apartment</h2>
            <div className="room-page__articles-gallery">
              <ModalPhoto
                source={apartmentRoom}
                fullSizeSrc={apartmentRoomLarge}
              ></ModalPhoto>
              <ModalPhoto
                source={apartmentRoomDetails1}
                fullSizeSrc={apartmentRoomDetails1Large}
              ></ModalPhoto>
              <ModalPhoto
                source={apartmentRoomDetails2}
                fullSizeSrc={apartmentRoomDetails2Large}
              ></ModalPhoto>
            </div>
            <div className="room-page__articles-description">
              Our Suites ensure amazing experience. Luxury and comfortable
              interior designed for our the most demanding guests. Bathroom
              features beautiful mosaic floors. One king bed, plus one queen
              size sofa bed. The privace terrace with breathtaking view. Enjoy a
              well-earned rest in one of the your dreamed interior.
            </div>
          </article>
        </section>
        <section id="room-page-section" className="standard">
          <article className="room-page__articles">
            <div className="background2"></div>
            <div className="background"></div>
            <h2>Standard</h2>

            <div className="room-page__articles-gallery">
              <ModalPhoto
                source={standardRoomDetails1}
                fullSizeSrc={standardRoomDetails1Large}
              ></ModalPhoto>
              <ModalPhoto
                source={standardRoom}
                fullSizeSrc={standardRoomLarge}
              ></ModalPhoto>

              <ModalPhoto
                source={standardRoomDetails2}
                fullSizeSrc={standardRoomDetails2Large}
              ></ModalPhoto>
              <ModalPhoto
                source={standardRoomDetails3}
                fullSizeSrc={standardRoomDetails3Large}
              ></ModalPhoto>
            </div>
            <div className="room-page__articles-description">
              Our Standard Rooms offer unparalleled rest, come with a King bed.
              Let yourself a relaxing night. Living room with sofa and two
              comfortable armchairs, bathroom is finished in rustic style. The
              perfect blend of luxury and elegant with contemporary décor.
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
