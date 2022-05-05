import { Link } from "react-router-dom";
import "../style/Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <h1 className="logo">Brand</h1>
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <Link className="navigation__list-item-link book" to="/book">
            Book
            <div className="every-line"></div>
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link className="navigation__list-item-link rooms" to="/rooms">
            Roooms
            <div className="every-line"></div>
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link
            className="navigation__list-item-link restaurants"
            to="/restaurants"
          >
            Restaurants
            <div className="every-line"></div>
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link className="navigation__list-item-link spa" to="spa">
            Spa
            <div className="every-line"></div>
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link className="navigation__list-item-link contact" to="contact">
            Contact
            <div className="every-line"></div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
