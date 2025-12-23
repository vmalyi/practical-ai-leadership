import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  const baseClasses = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return <div className={combinedClasses}>{children}</div>;
}
