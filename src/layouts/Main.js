import "../style/Main.scss";
import lobbyImg from "../pictures/pexels-pixabay-hotel-lobby-cut.jpg";
import plantsImg from "../pictures/bg-plants-mid.jpg";
import baroqueImg from "../pictures/pexels-baroque.jpg";
import natureIconLobby from "../pictures/icons/nature_icon_lobby.png";
import natureIconMenu from "../pictures/icons/nature_icon_menu.png";

const Main = () => {
  return (
    <section className="main-section">
      <article className="main-section__page-1">
        <img id="natureIconLobby" src={natureIconLobby} alt="" />
        <h3 className="main-section__page-1-description">
          <span>a </span>
          lot of hotels offer luxory standards, but since you are here,
          certainly you will interesting our unique style and atomsfer.
        </h3>
        <div className="bgc-color-1" />
        <div className="bgc-color-2">
          <h2>amazing interior</h2>
          <div className="wrapper">
            <img
              loading="lazy"
              className="main-section__page-1-lobby"
              src={lobbyImg}
              alt="lobby"
            />
          </div>
          <div className="main-section__page-1-wrap">
            <img
              loading="lazy"
              className="main-section__page-1-wrap-plants"
              src={plantsImg}
              alt="plants-background"
            />
            <p className="main-section__page-1-wrap-quote">
              "Truth, when it is more difficult, is more pleasant, and knowledge
              that costs is more valued."
            </p>
          </div>
        </div>
      </article>

      <article className="main-section__page-2">
        <img id="natureIconMenu" src={natureIconMenu} alt="" />
        <div className="wrapper2">
          <img
            loading="lazy"
            className="main-section__page-1-baroque"
            src={baroqueImg}
            alt="baroque"
          />
        </div>
      </article>
    </section>
  );
};
export default Main;
