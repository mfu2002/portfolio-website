import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
export default function BottomNavigation(props) {

  return (
    <nav className={props.className + ' ' + classes.navigation}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/Resume"
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/Portfolio"
          >
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
