import "../style/Footer.scss";

const Footer = ({ handelToggle }) => {
  let link = document.querySelector("nav.footer__navigation");

  return (
    <footer className="footer">
      <nav className="footer__navigation">
        <button
          onClick={(e) => {
            handelToggle(e, link);
          }}
          className="home"
          id="footer__navigation-btn"
        >
          home
          <div className="active every-line"></div>
        </button>
        <button
          onClick={(e) => {
            handelToggle(e, link);
          }}
          className="lobby"
          id="footer__navigation-btn"
        >
          lobby
          <div className="every-line"></div>
        </button>
        <button
          onClick={(e) => {
            handelToggle(e, link);
          }}
          className="menu"
          id="footer__navigation-btn"
        >
          menu
          <div className="every-line"></div>
        </button>
      </nav>
    </footer>
  );
};

export default Footer;
