import classes from "./IconBox.module.css";

export default function IconBox({ Icon, title, value, anchor }) {
  return (
    <li className={classes.iconBox}>
      <Icon className={classes.icon}></Icon>
      <div className={classes.infoBox}>
        <small className={classes.title}>{title}</small>
        <a href={anchor}>{value}</a>
      </div>
    </li>
  );
}
