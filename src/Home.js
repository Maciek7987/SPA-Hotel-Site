import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import Navigation from "./layouts/Navigation";
import "./style/Home.scss";

//try import library to scroll
import HorizontalScroll from "react-scroll-horizontal";

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

const Home = () => {
  return (
    <>
      <section className="home-page">
        <HorizontalScroll
          pageLock={true}
          config={{ stiffness: 28, damping: 10 }}
        >
          <Main/>
        </HorizontalScroll>
        <Navigation />
        <Footer handelToggle={handelToggle} />
      </section>
    </>
  );
};

export default Home;
