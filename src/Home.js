import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import Navigation from "./layouts/Navigation";
import "./style/Home.scss";

//try import library to scroll
import HorizontalScroll from "react-scroll-horizontal";
import { Component, createRef } from "react";

const handelToggle = (e, link) => {
  if (link) {
    [...link.current.children].forEach((item) => {
      if (item.children[0].classList.contains("active")) {
        item.children[0].classList.remove("active");
      }
    });
    e.target.lastChild.classList.add("active");
  }
};

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

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        matrix = new DOMMatrix(style.transform);
        console.log(matrix.m41);
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
