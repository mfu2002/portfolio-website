import classes from "./App.module.css";

import { Outlet } from "react-router-dom";
import Profile from "../../components/Profile/Profile";
export default function App() {
  return (
    <main className={classes.mainWrapper}>
      <Profile />
      <Outlet />
    </main>
  );
}
