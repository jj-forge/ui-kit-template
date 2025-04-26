import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

export function Button({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn("bg-red-500", className)} {...props}>
      {children}
    </button>
  );
}
