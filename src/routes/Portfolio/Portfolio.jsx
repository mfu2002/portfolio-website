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
    "This is my portfolio website. ",
    ["React", "Website", "Javascript"],
    new Date(2023, 10, 17)
  ),
  new ProjectInfo(
    "Solidworks Portfolio",
    ["https://github.com/mfu2002/SolidWorks-Portfolio"],
    "This is my SolidWorks portfolio",
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
];
export default function Portfolio(props) {
  const [searchString, setSearchString] = useState("");
  const [selectedSort, setSelectedSort] = useState(1);
  const [selectedSortDirection, setSelectedSortDirection] = useState(1);
  const projects = [...PROJECTS].filter(function (item) {
    if (item.title.toLowerCase().includes(searchString.toLowerCase())) {
      return true;
    }
    for (let i = 0; i < item.tags.length - 1; i++) {
      if (item.tags[i].toLowerCase().includes(searchString.toLowerCase())) {
        return true;
      }
    }
    return false;
  }).sort(function(a, b) {
    if(selectedSort === 0){
      return (b.tags.length - a.tags.length) * selectedSortDirection;
    }else if (selectedSort === 1){
      return (b.lastModified - a.lastModified) * selectedSortDirection;
    } else if (selectedSort === 2){
      return a.title.localeCompare(b.title) * selectedSortDirection;
    }
    return 0
  });
  return (
    <>
      <div className={classes.PortfolioSearch}>
        <SearchIcon className={classes.searchIcon} />
        <input onChange={(event) => setSearchString(event.target.value)} />
      </div>
      <div className={classes.sortContainer}>
        <div onClick={()=> setSelectedSort(0)} className={selectedSort === 0 ? classes.active : null}>
          Project Size
        </div>
        <div onClick={()=> setSelectedSort(1)} className={selectedSort === 1 ? classes.active : null}>
          Last Updated
        </div>
        <div onClick={()=> setSelectedSort(2)} className={selectedSort === 2 ? classes.active : null}>
          Alphabetical
        </div>
        <div onClick={()=> setSelectedSortDirection((direction) => direction * -1)} >
          {selectedSortDirection === 1 ? '↓' : '↑'}
        </div>
      </div>
      <div>
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
