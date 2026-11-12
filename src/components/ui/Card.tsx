import "./Card.css";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return <div className={`sl-card ${className}`.trim()}>{children}</div>;
}