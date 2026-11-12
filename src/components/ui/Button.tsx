import Link from "next/link";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  external = false,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const className = `sl-btn sl-btn--${variant} sl-btn--${size}`;

  if (href && external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}