import { Link } from "react-router-dom";
import classes from "./PortfolioItem.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
export default function PortfolioItem({ item }) {
  return (
    <div className={classes.PortfolioItem}>
      <div className={classes.header}>
        <h3>{item.title}</h3>
        <div className={classes.links}>
          {item.urls.map((url) => (
            <Link key={url} id={url} to={url} target="_blank">
              {url.toLowerCase().includes("github.com") ? (
                <GitHubIcon />
              ) : (
                <LanguageIcon />
              )}
            </Link>
          ))}
        </div>
      </div>
      <p>{item.description}</p>
    </div>
  );
}
