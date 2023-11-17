import PortfolioItem from "../components/PortfolioItem/PortfolioItem";
import ProjectInfo from "../components/PortfolioItem/ProjectInfo";

const projects = [
  new ProjectInfo(
    "test",
    "Portfolio Website",
    [
      "https://github.com/mfu2002/portfolio-website",
      "https://www.faisal-karim.com/",
    ],
    "This is my portfolio website",
    ["React", "Website", "Javascript"]
  ),
];
export default function Portfolio(props) {
  return (
    <div>
      {projects.map((item) => (
        <PortfolioItem item={item} />
      ))}
    </div>
  );
}
