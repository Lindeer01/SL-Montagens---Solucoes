import "./Container.css";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return <div className={`sl-container ${className}`.trim()}>{children}</div>;
}