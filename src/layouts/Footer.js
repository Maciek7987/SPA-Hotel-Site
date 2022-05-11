import "../style/Footer.scss";
import { useRef } from "react";

const Footer = ({ handelToggle }) => {
  const link = useRef();

  return (
    <footer className="footer">
      <nav ref={link} className="footer__navigation">
        <a
          onClick={(e) => {
            handelToggle(e, link);
          }}
          className="home"
          href="#"
        >
          home
          <div className="active every-line"></div>
        </a>
        <a
          onClick={(e) => {
            handelToggle(e, link);
          }}
          className="lobby"
          href="#"
        >
          lobby
          <div className="every-line"></div>
        </a>
        <a
          onClick={(e) => {
            handelToggle(e, link);
          }}
          className="menu"
          href="#"
        >
          menu
          <div className="every-line"></div>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
