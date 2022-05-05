import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./style/index.scss";
import Home from "./Home";
import Book from "./subpages/Book";
import Restaurants from "./subpages/Restaurants";
import Rooms from "./subpages/Rooms";
import Spa from "./subpages/Spa";
import Contact from "./subpages/Contact";
const root = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="book" element={<Book />} />
      <Route path="rooms" element={<Rooms />} />
      <Route path="restaurants" element={<Restaurants />} />
      <Route path="spa" element={<Spa />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </Router>,
  root
);
