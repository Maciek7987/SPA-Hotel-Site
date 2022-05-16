import "../style/Main.scss";
import lobbyImg from "../pictures/pexels-pixabay-hotel-lobby-cut.jpg";
import plantsImg from "../pictures/bg-plants-mid.jpg";

const Main = () => {
  return (
    <section className="main-section">
      <article className="main-section__page-1">
        <div className="bgc-color-1"></div>
        <div className="bgc-color-2">
          <h2>amazing interior</h2>
          <div className="wrapper">
            <img
              className="main-section__page-1-image-1"
              src={lobbyImg}
              alt="lobby-image"
            />
          </div>
          <img
            className="main-section__page-1-image-2"
            src={plantsImg}
            alt="plants-background-image"
          />
        </div>
      </article>
      <article className="main-section__page-2"></article>
    </section>
  );
};
export default Main;
