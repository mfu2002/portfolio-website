import classes from "./IconBox.module.css";

export default function IconBox({ Icon, title, value, anchor }) {
  const ValueElement = anchor ? "a" : "p";
  return (
    <div className={classes.iconBox}>
      <Icon className={classes.icon}></Icon>
      {title || value ? (
        <div className={classes.infoBox}>
          <small className={classes.title}>{title}</small>
          <ValueElement href={anchor}>{value}</ValueElement>
        </div>
      ) : null}
    </div>
  );
}
