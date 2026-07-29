import "./SectionTitle.css"

export default function SectionTitle({icon, title}) {

  return (
    <h4 className="about-title">
      {icon}
      {title}
    </h4>
  );
}
