import { Component, createRef } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import video from "./videos/pexels-cottonbro-main-xs.mp4";
import "./style/Home.scss";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import Navigation from "./layouts/Navigation";

let whichPageWeAre = "home";

let offSetWidth = window.innerWidth;

//valuesToStopScroll is a initial variable hold number of pixeles since left side of window
let valuesToStopScroll = {
  lobby: -offSetWidth,
  menu: -(2 * offSetWidth),
};

//valuesToPages is a variable hold number of pixels to next site, which left after scroll
let valuesToPages = {
  toHome: 0,
  toLobby: valuesToStopScroll.lobby,
  toMenu: valuesToStopScroll.menu,
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.homePage = createRef();
    this.horizontalScroll = createRef();
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
  };

  handelToggle = (e, link) => {
    //if is e-vent it means it's after click
    if (e) {
      switch (e.target.className) {
        case "home":
          this.setState({ animValue: valuesToPages.toHome });
          break;
        case "lobby":
          this.setState({ animValue: valuesToPages.toLobby });
          break;
        case "menu":
          //new animValue shoud be diffrent than current aniValue
          if (this.state.animValue === valuesToPages.toMenu) {
            this.setState({ animValue: valuesToPages.toMenu - 1 });
          } else {
            this.setState({ animValue: valuesToPages.toMenu });
          }
          break;
        default:
          console.log("You must click");
      }
    }
    //link variable shoud be for every call
    if (link) {
      [...link.children].forEach((item) => {
        if (item.children[0].classList.contains("active")) {
          item.children[0].classList.remove("active");
        }
        //add active class to element which has class witchPageWeAre
        if (item.classList.contains(whichPageWeAre)) {
          item.children[0].classList.add("active");
        }
      });
    }
  };

  componentDidMount() {
    const target = this.homePage.current.firstChild.firstChild;
    const style = window.getComputedStyle(target);
    const link = document.querySelector("nav.footer__navigation");
    const lobbyImg = document.querySelector(".main-section__page-1-image-1");
    let lobbyImgTranslateX = 0;
    let matrix, toHome, toLobby, toMenu;

    // window.addEventListener("wheel", (e) => {});

    const logicOfScroll = (name) => {
      matrix = new DOMMatrix(style.transform);

      // if (
      //   matrix.m41 < this.horizontalScroll.current.state.animValues &&
      //   lobbyImgTranslateX < 8.5
      // ) {
      //   lobbyImgTranslateX += 0.01;
      //   lobbyImg.style.transform = `translateX(${lobbyImgTranslateX}%)`;
      // } else if (
      //   matrix.m41 >
      //   this.horizontalScroll.current.state.animValues >
      //   -8.5
      // ) {
      //   lobbyImgTranslateX -= 0.01;
      //   lobbyImg.style.transform = `translateX(${lobbyImgTranslateX}%)`;
      // }

      if (
        matrix.m41 === this.horizontalScroll.current.state.animValues ||
        matrix.m41 === this.horizontalScroll.current.state.animValues - 1 // if in handleToggle has been subtracted
      ) {
        //check matrix.m41 that is increased or decreased is the same than value end of scroll
        //true value means that translate isn't change
        link.style.opacity = "1";
        link.style.pointerEvents = "";

        toHome = matrix.m41 * -1;
        toLobby = valuesToStopScroll.lobby - matrix.m41;
        toMenu = valuesToStopScroll.menu - matrix.m41;

        valuesToPages = {
          toHome,
          toLobby,
          toMenu,
        };
      } else {
        link.style.opacity = "0.6";
        link.style.pointerEvents = "none";
      }

      //protection from error when page is behind window after resize
      if (matrix.m41 < valuesToStopScroll.menu && name === "resize") {
        console.log(matrix.m41 - valuesToStopScroll.menu);
        this.setState({
          animValue: -(matrix.m41 - valuesToStopScroll.menu),
        });
      }

      if (matrix.m41 <= 0) whichPageWeAre = "home";
      if (matrix.m41 < (valuesToStopScroll.lobby * 80) / 100)
        whichPageWeAre = "lobby";
      if (matrix.m41 < (valuesToStopScroll.menu * 80) / 100)
        whichPageWeAre = "menu";

      this.handelToggle(null, link, matrix.m41);
    };

    window.addEventListener("resize", () => {
      offSetWidth = window.innerWidth;
      valuesToStopScroll = {
        lobby: -offSetWidth,
        menu: -(2 * offSetWidth),
      };
      logicOfScroll("resize");
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        logicOfScroll("observer");
      });
    });
    observer.observe(target, {
      attributes: true,
      attributeFilter: ["style"],
    });
  }

  render() {
    return (
      <>
        {/* <div className="loading-screen">
          <div className="spinner"></div>
        </div> */}
        <section ref={this.homePage} className="home-page">
          <HorizontalScroll
            ref={this.horizontalScroll}
            reverseScroll={true}
            className={"horizontal-scroll"}
            config={{ stiffness: 28, damping: 10 }}
            animValues={this.state.animValue}
          >
            <Main />
          </HorizontalScroll>
          <video className="lazysizes" loop autoPlay muted>
            <source src={video} type="video/mp4" />
          </video>
          <Navigation handleReset={this.resetStateAnimValue} />
          <Footer handelToggle={this.handelToggle} />
        </section>
      </>
    );
  }
}

export default Home;
