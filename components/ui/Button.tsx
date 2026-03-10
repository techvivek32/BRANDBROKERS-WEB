import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    
    if (asChild) {
      return children as React.ReactElement;
    }
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 theme-transition",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-105":
              variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
            "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground":
              variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
