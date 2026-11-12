import "./SectionTitle.css";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <header
      className={`sl-section-title ${align === "center" ? "sl-section-title--center" : ""}`.trim()}
    >
      {eyebrow && <span className="sl-section-title__eyebrow">{eyebrow}</span>}
      <h2 className="sl-section-title__title">{title}</h2>
      {subtitle && <p className="sl-section-title__subtitle">{subtitle}</p>}
    </header>
  );
}