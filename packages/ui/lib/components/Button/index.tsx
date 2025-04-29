import { cn } from "@ui-kit/ui/utils";
import { ButtonHTMLAttributes } from "react";

export function Button({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "bg-red-700 text-red-100 dark:bg-red-300 dark:text-red-900",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
