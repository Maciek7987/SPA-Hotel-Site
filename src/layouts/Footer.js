import "../style/Footer.scss";
import { useRef } from "react";

const Footer = ({ handelToggle }) => {
  const link = useRef();

  const ArryLinks = ({ linkName }) => {
    return (
      <a
        onClick={(e) => {
          handelToggle(e, link);
        }}
        className={linkName}
        href="#"
      >
        {linkName}
        <div
          className={`${linkName == "home" ? "active" : ""} every-line`}
        ></div>
      </a>
    );
  };

  return (
    <footer className="footer">
      <nav ref={link} className="footer__navigation">
        <ArryLinks linkName={"home"} />
        <ArryLinks linkName={"lobby"} />
        <ArryLinks linkName={"menu"} />
      </nav>
    </footer>
  );
};

export default Footer;
