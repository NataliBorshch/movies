import { NavLink } from "react-router-dom";
import router from "../../../router";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav>
      <ul className="box-nav">
        <li>
          <NavLink
            exact
            to={router.home}
            activeClassName="activ"
            className="nav-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={router.movies}
            activeClassName="activ"
            className="nav-link"
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to={router.tv} activeClassName="activ" className="nav-link">
            TV
          </NavLink>
        </li>
        <li>
          <NavLink
            to={router.actors}
            activeClassName="activ"
            className="nav-link"
          >
            Actors
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
