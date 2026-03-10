import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full px-4 py-3 rounded-lg bg-background border border-border theme-transition",
          "text-foreground placeholder:text-foreground/50 backdrop-blur-sm",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring",
          "transition-all duration-300",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
