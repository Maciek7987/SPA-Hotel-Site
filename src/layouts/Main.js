import "../style/Main.scss";
import lobbyImg from "../pictures/pexels-pixabay-hotel-lobby-cut.jpg";
import plantsImg from "../pictures/bg-plants-mid.jpg";

const Main = () => {
  return (
    <section className="main-section">
      <article className="main-section__page-1">
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
              className="main-section__page-1-lobby"
              src={lobbyImg}
              alt="lobby-image"
            />
          </div>
          <img
            className="main-section__page-1-plants"
            src={plantsImg}
            alt="plants-background-image"
          />
          <p className="main-section__page-1-quote">
            "Truth, when it is more difficult, is more pleasant, and knowledge
            that costs is more valued."
          </p>
        </div>
      </article>

      <article className="main-section__page-2"></article>
    </section>
  );
};
export default Main;
