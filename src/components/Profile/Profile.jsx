import IconBox from "../IconBox/IconBox";
import classes from "./Profile.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import myAvatar from "./my-avatar.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Profile() {
  return (
    <div className={classes.profile}>
      <div className={classes.header}>
        <figure>
          <img src={myAvatar} />
        </figure>
        <div>
          <h1>Faisal Karim</h1>
          <p>Junior Developer</p>
        </div>
      </div>
      <hr className={classes.divider} />
      <ul>
        <li>
          <IconBox
            Icon={EmailIcon}
            title="Email"
            value="FaisalK02115@gmail.com"
            anchor="mailto:FaisalK02115@gmail.com"
          />
        </li>
        <li>
          <IconBox
            Icon={LocalPhoneIcon}
            title="Phone"
            value="0406043115"
            anchor="tel:0406043115"
          />
        </li>
        <li>
          <IconBox
            Icon={LocationOnIcon}
            title="Location"
            value="Hampton Park, VIC"
          />
        </li>
      </ul>
      <hr className={classes.divider} />
      <div className={classes.socialLinks}>
        <a href="https://github.com/mfu2002">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/faisal-karim-02115/">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}
