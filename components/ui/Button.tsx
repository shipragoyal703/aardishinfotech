
import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  target?: "_blank" | "_self";
  rel?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function Button({
  children,
  href,
  variant = "primary",
  target,
  rel,
  className = "",
  onClick,
}: ButtonProps) {
  const external = target === "_blank";

  return (
    <Link
      href={href}
      target={target}
      rel={rel || (external ? "noopener noreferrer" : undefined)}
      onClick={onClick}
      className={`site-button site-button--${variant} ${className}`}
    >
      <span>{children}</span>
    </Link>
  );
}
