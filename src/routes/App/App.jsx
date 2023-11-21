import classes from "./App.module.css";

import { Outlet } from "react-router-dom";
import Profile from "../../components/Profile/Profile";
import SectionCard from "../../components/SectionCard/SectionCard";
import BottomNavigation from "../../components/Navigation/Navigation";
export default function App() {
  return (
    <>
      <main className={classes.mainWrapper}>
        <SectionCard>
          <Profile />
        </SectionCard>
        <SectionCard>
          <Outlet />
        </SectionCard>
      </main>
      <BottomNavigation className={classes.bottomNavigation} />
    </>
  );
}
