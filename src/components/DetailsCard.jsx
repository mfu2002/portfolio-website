export default function DetailsCard({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {/* TODO: Add Underline under the title */}
      <div>{children}</div>
    </>
  );
}
