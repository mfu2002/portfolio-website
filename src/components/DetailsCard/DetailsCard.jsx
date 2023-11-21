import { NavLink } from "react-router-dom";
import classes from "./DetailsCard.module.css"
import BottomNavigation from "../Navigation/Navigation";
export default function DetailsCard({ title, children }) {
  return (
    <>
      <div className={classes.header}>
        <h1>{title}</h1>
        <BottomNavigation className={classes.topNavigation} />
      </div>
      <div>{children}</div>
    </>
  );
}
