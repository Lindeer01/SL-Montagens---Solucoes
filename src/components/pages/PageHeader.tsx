import Container from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <section className="sl-page-header">
      <Container className="sl-page-header__inner">
        {eyebrow && <span className="sl-page-header__eyebrow">{eyebrow}</span>}
        <h1 className="sl-page-header__title">{title}</h1>
        {subtitle && <p className="sl-page-header__subtitle">{subtitle}</p>}
      </Container>
    </section>
  );
}