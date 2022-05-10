import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import Navigation from "./layouts/Navigation";
import "./style/Home.scss";

//try import library to scroll
import HorizontalScroll from "react-scroll-horizontal";
import { Component, createRef } from "react";

let whichPageWeAre = "home";

const handelToggle = (e, link) => {
  if (link && e) {
    [...link.current.children].forEach((item) => {
      if (item.children[0].classList.contains("active")) {
        item.children[0].classList.remove("active");
      }
    });
    e.target.lastChild.classList.add("active");
  } else if (link) {
    [...link.children].forEach((item) => {
      if (item.children[0].classList.contains("active")) {
        item.children[0].classList.remove("active");
      }
      if (item.classList.contains(whichPageWeAre)) {
        item.children[0].classList.add("active");
      }
    });
  }
};

let offSetWidth = window.innerWidth;
const valuesToStopScroll = {
  lobby: -offSetWidth,
  menu: -(2 * offSetWidth),
};
window.addEventListener("resize", () => {
  offSetWidth = window.innerWidth;
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.homePage = createRef();
    this.pauseScrollElement = createRef();
  }

  componentDidMount() {
    const target = this.homePage.current.firstChild.firstChild;
    const style = window.getComputedStyle(target);
    let matrix;
    const link = document.querySelector("nav.footer__navigation");

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        matrix = new DOMMatrix(style.transform);

        if (matrix.m41 <= 0) whichPageWeAre = "home";
        if (matrix.m41 < valuesToStopScroll.lobby - 30)
          whichPageWeAre = "lobby";
        if (matrix.m41 < valuesToStopScroll.menu - 30) whichPageWeAre = "menu";

        if (matrix.m41 < valuesToStopScroll.menu + 3) {
          target.style.transform = `translateX(${valuesToStopScroll.menu}px)`;
          whichPageWeAre = "menu";
        }

        handelToggle(null, link);
      });
    });

    observer.observe(target, { attributes: true, attributeFilter: ["style"] });
  }

  render() {
    return (
      <>
        <div ref={this.pauseScrollElement} className="pauseScrollElement"></div>
        <section ref={this.homePage} className="home-page">
          <HorizontalScroll
            pageLock={true}
            reverseScroll={true}
            className={"horizontal-scroll"}
            config={{ stiffness: 28, damping: 10 }}
          >
            <Main />
          </HorizontalScroll>
          <Navigation />
          <Footer handelToggle={handelToggle} />
        </section>
      </>
    );
  }
}

export default Home;
