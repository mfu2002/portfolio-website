import IconBox from "../IconBox/IconBox";
import classes from "./Timeline.module.css";
export default function Timeline({ sectionTitle, Icon, children }) {
  console.log(Icon);
  return (
    <section>
      <div className={classes.timelineHeader}>
        <IconBox Icon={Icon} />
        <h3>{sectionTitle}</h3>
      </div>

      <ol className={classes.timelineList}>{children}</ol>
    </section>
  );
}

export function TimelineItem({ title, subtitle, period, children }) {
  console.log(children);
  return (
    <li>
      <h4>{title}</h4>
      <span className={classes.time}>{period}</span> /{" "}
      <span className={classes.subtitle}>{subtitle}</span>
      {children && (
        <ul>
          {children.map((item) => (
            <li dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )}
    </li>
  );
}
