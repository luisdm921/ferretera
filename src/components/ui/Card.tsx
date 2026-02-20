import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-steel-100 ${
        hover
          ? "hover:shadow-xl hover:shadow-steel-900/5 hover:border-primary-200 hover:-translate-y-1"
          : ""
      } transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
