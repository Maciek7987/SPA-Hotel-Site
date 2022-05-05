import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import Navigation from "./layouts/Navigation";
import "./style/Home.scss";

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
        <Main />
        <Navigation />
        <Footer handelToggle={handelToggle} />
      </section>
    </>
  );
};

export default Home;
