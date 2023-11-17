import classes from "./SectionCard.module.css";

export default function SectionCard({ children, className, ...props }) {
  let cssClass = classes.sectionCard;
  if (className) {
    cssClass += " " + className;
  }
  return (
    <section className={cssClass} {...props}>
      {children}
    </section>
  );
}
