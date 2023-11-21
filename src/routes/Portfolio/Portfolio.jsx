import { useState } from "react";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import ProjectInfo from "../../components/PortfolioItem/ProjectInfo";
import classes from "./Portfolio.module.css";
import SearchIcon from "@mui/icons-material/Search";
const PROJECTS = [
  new ProjectInfo(
    "Portfolio Website",
    [
      "https://github.com/mfu2002/portfolio-website",
      "https://www.faisal-karim.com/",
    ],
    "This is my portfolio website. The code behind the website you are currently looking at. I made the website in React.js and is hosted on GitHub Pages.",
    ["React", "Website", "Javascript", "Web development", "Github Pages", "CSS", "Portfolio"],
    new Date(2023, 10, 17)
  ),
  new ProjectInfo(
    "Solidworks Portfolio",
    ["https://github.com/mfu2002/SolidWorks-Portfolio"],
    "This is my SolidWorks portfolio where I developed simple and complex 3D features. I also demostrate my ability to create technical drawings from models.",
    [
      "Solidworks",
      "CAD",
      "Modelling",
      "Sketching",
      "Cat Feeder",
      "Assembly",
      "Technical Drawings",
    ],
    new Date(2023, 0, 5)
  ),
  new ProjectInfo(
    "Arduino Portfolio",
    ["https://github.com/mfu2002/Arduino-Portfolio"],
    "This is an Arduino Project I created for my university unit, EEE20003, and scored 99% for it. We covered basic features and techniques in this unit, including EEPROM, interrupts and functional Arduino programming.",
    ["Arduino", "EEPROM", "interrupts", "Microcontrollers"],
    new Date(2023, 0, 1)
  ),
  new ProjectInfo(
    "Facebook Clone",
    ["https://github.com/mfu2002/FaceBook-Clone"],
    "This is a simple project where I attempted to replicate the home screen of Facebook. The project utilises FireAuth for authentication functionality and FireStore to store posts.",
    [
      "React",
      "Javascript",
      "css",
      "html",
      "web development",
      "firebase",
      "fireauth",
      "firestore",
      "Authentication",
    ],
    new Date(2023, 8, 18)
  ),
  new ProjectInfo(
    "Elections Project",
    ["https://github.com/mfu2002/Elections-Project"],
    "This project was created as a group in my second year of University. I wrote most of the skeleton code for this project where my team members wrote the implementation code of the functions I created. I also worked on the File IO sections of the proeject by myself.",
    ["C++", "Team Work", "Group Project", "File IO"],
    new Date(2022, 4, 18)
  ),
  new ProjectInfo(
    "Maze Game",
    ["https://github.com/mfu2002/final_project_maze_game"],
    "I developed this project for my second year university unit. The limitations I had when developing this project was I was not allowed to use any OOP techniques. I developed the game in Ruby using Gosu library. For this project, I achieved a perfect score of 100% in this unit.",
    ["Ruby", "Game", "Structured Programming", "Gosu", "Graphics"],
    new Date(2021, 9, 5)
  ),
  new ProjectInfo(
    "Chatting Software",
    ["https://github.com/mfu2002/flutter_chat"],
    "This application demonstrates my ability to create a chat system app. I developed this software in flutter using Firebase to store user data, chats and to authenticate them.",
    [
      "Chat",
      "Dart",
      "Flutter",
      "Authentication",
      "Firebase",
      "cloud",
      "Fireauth",
    ],
    new Date(2021, 9, 5)
  ),
  new ProjectInfo(
    "Chatting Software",
    ["https://github.com/mfu2002/flutter_chat"],
    "This application demonstrates my ability to create a chat system app. I developed this software in flutter using Firebase to store user data, chats and to authenticate them.",
    [
      "Chat",
      "Dart",
      "Flutter",
      "Authentication",
      "Firebase",
      "cloud",
      "Fireauth",
    ],
    new Date(2021, 9, 5)
  ),
  new ProjectInfo(
    "DiskByte",
    ["https://github.com/mfu2002/DiskByte"],
    "This is disk analyses software I created to create a more mordern looking version of the WinDirStat software. It is developed in WPF.NET and C# and demonstrates my ability to use OOP concepts and different design patterns. ",
    ["C#", ".Net Framework", "WPF", "File IO"],
    new Date(2020, 10, 29)
  ),
];
export default function Portfolio(props) {
  const [searchString, setSearchString] = useState("");
  const [selectedSort, setSelectedSort] = useState(1);
  const [selectedSortDirection, setSelectedSortDirection] = useState(1);
  const projects = [...PROJECTS]
    .filter(function (item) {
      if (item.title.toLowerCase().includes(searchString.toLowerCase())) {
        return true;
      }
      for (let i = 0; i < item.tags.length - 1; i++) {
        if (item.tags[i].toLowerCase().includes(searchString.toLowerCase())) {
          return true;
        }
      }
      return false;
    })
    .sort(function (a, b) {
      if (selectedSort === 0) {
        return (b.tags.length - a.tags.length) * selectedSortDirection;
      } else if (selectedSort === 1) {
        return (b.lastModified - a.lastModified) * selectedSortDirection;
      } else if (selectedSort === 2) {
        return a.title.localeCompare(b.title) * selectedSortDirection;
      }
      return 0;
    });
  return (
    <>
      <div className={classes.PortfolioSearch}>
        <SearchIcon className={classes.searchIcon} />
        <input onChange={(event) => setSearchString(event.target.value)} />
      </div>
      <div className={classes.sortContainer}>
        <div
          onClick={() => setSelectedSort(0)}
          className={selectedSort === 0 ? classes.active : null}
        >
          Project Size
        </div>
        <div
          onClick={() => setSelectedSort(1)}
          className={selectedSort === 1 ? classes.active : null}
        >
          Last Updated
        </div>
        <div
          onClick={() => setSelectedSort(2)}
          className={selectedSort === 2 ? classes.active : null}
        >
          Alphabetical
        </div>
        <div
          onClick={() =>
            setSelectedSortDirection((direction) => direction * -1)
          }
        >
          {selectedSortDirection === 1 ? "↓" : "↑"}
        </div>
      </div>
      <div className={classes.portfolioItemContainer}>
        {projects.length ? (
          projects.map((item) => <PortfolioItem item={item} />)
        ) : (
          <div className={classes.notFoundMessage}>
            Sorry, we couldn't find any projects that match your search query.
            New project ideas are always welcome and you can let us know about
            them via our contacts page.{" "}
          </div>
        )}
      </div>
    </>
  );
}
