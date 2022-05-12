import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import Navigation from "./layouts/Navigation";
import "./style/Home.scss";

//try import library to scroll
import HorizontalScroll from "react-scroll-horizontal";
import { Component, createRef } from "react";

let whichPageWeAre = "home";
let toShowLinks = true;
let offSetWidth = window.innerWidth;

let valuesToStopScroll = {
  lobby: -offSetWidth,
  menu: -(2 * offSetWidth),
};
let valuesToPages = {
  toHome: 0,
  toLobby: valuesToStopScroll.lobby,
  toMenu: valuesToStopScroll.menu,
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.homePage = createRef();
    this.pauseScrollElement = createRef();
    this.dsfds = createRef();
    this.state = {
      animValue: 0,
    };
  }

  resetStateAnimValue = () => {
    this.setState({ animValue: 0 });
    valuesToPages = {
      toHome: 0,
      toLobby: valuesToStopScroll.lobby,
      toMenu: valuesToStopScroll.menu,
    };
    toShowLinks = true;
  };

  handelToggle = (e, link, matrix) => {
    if (e) {
      switch (e.target.className) {
        case "home":
          this.setState({ animValue: valuesToPages.toHome });
          break;
        case "lobby":
          this.setState({ animValue: valuesToPages.toLobby });
          break;
        case "menu":
          if (this.state.animValue == valuesToPages.toMenu) {
            this.setState({ animValue: valuesToPages.toMenu - 1 });
          } else {
            this.setState({ animValue: valuesToPages.toMenu });
          }
          break;
      }
    }
    if (link) {
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

  componentDidMount() {
    const target = this.homePage.current.firstChild.firstChild;
    const style = window.getComputedStyle(target);
    let matrix;
    let toHome;
    let toLobby;
    let toMenu;
    let link = document.querySelector("nav.footer__navigation");

    window.addEventListener("resize", () => {
      offSetWidth = window.innerWidth;
      valuesToStopScroll = {
        lobby: -offSetWidth,
        menu: -(2 * offSetWidth),
      };

      matrix = new DOMMatrix(style.transform);

      if (
        matrix.m41 === this.dsfds.current.state.animValues ||
        matrix.m41 === this.dsfds.current.state.animValues - 1
      ) {
        toShowLinks = true;
        [...link.children].forEach((item) => {
          item.style.color = "blue";
        });
        toHome = matrix.m41 * -1;
        toLobby = valuesToStopScroll.lobby - matrix.m41;
        toMenu = valuesToStopScroll.menu - matrix.m41;

        valuesToPages = {
          toHome,
          toLobby,
          toMenu,
        };
      } else {
        toShowLinks = false;
        [...link.children].forEach((item) => {
          item.style.color = "yellow";
        });
      }

      if (matrix.m41 < valuesToStopScroll.menu) {
        this.setState({ animValue: -(matrix.m41 - valuesToStopScroll.menu) });
      }

      if (matrix.m41 <= 0) whichPageWeAre = "home";
      if (matrix.m41 < (valuesToStopScroll.lobby * 80) / 100)
        whichPageWeAre = "lobby";
      if (matrix.m41 < (valuesToStopScroll.menu * 80) / 100)
        whichPageWeAre = "menu";

      this.handelToggle(null, link, matrix.m41);
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        matrix = new DOMMatrix(style.transform);

        if (
          matrix.m41 === this.dsfds.current.state.animValues ||
          matrix.m41 === this.dsfds.current.state.animValues - 1
        ) {
          toShowLinks = true;
          [...link.children].forEach((item) => {
            item.style.color = "blue";
          });
          toHome = matrix.m41 * -1;
          toLobby = valuesToStopScroll.lobby - matrix.m41;
          toMenu = valuesToStopScroll.menu - matrix.m41;

          valuesToPages = {
            toHome,
            toLobby,
            toMenu,
          };
        } else {
          toShowLinks = false;
          [...link.children].forEach((item) => {
            item.style.color = "yellow";
          });
        }

        if (matrix.m41 <= 0) whichPageWeAre = "home";
        if (matrix.m41 < (valuesToStopScroll.lobby * 80) / 100)
          whichPageWeAre = "lobby";
        if (matrix.m41 < (valuesToStopScroll.menu * 80) / 100)
          whichPageWeAre = "menu";

        this.handelToggle(null, link);
      });
    });

    observer.observe(target, { attributes: true, attributeFilter: ["style"] });
  }

  render() {
    return (
      <>
        <div ref={this.pauseScrollElement} className="pauseScrollElement">
          chuj
        </div>
        <section ref={this.homePage} className="home-page">
          <HorizontalScroll
            ref={this.dsfds}
            pageLock={true}
            reverseScroll={true}
            className={"horizontal-scroll"}
            config={{ stiffness: 28, damping: 10 }}
            animValues={this.state.animValue}
          >
            <Main />
          </HorizontalScroll>
          <Navigation handleReset={this.resetStateAnimValue} />
          <Footer handelToggle={this.handelToggle} />
        </section>
      </>
    );
  }
}

export default Home;
