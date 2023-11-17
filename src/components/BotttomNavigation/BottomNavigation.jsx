import { NavLink } from "react-router-dom";
import classes from "./BotttomNavigation.module.css";
export default function BottomNavigation() {
  return (
    <nav className={classes.BottomNavigation}>
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
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/Contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
