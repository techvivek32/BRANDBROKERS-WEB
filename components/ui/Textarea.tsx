import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full px-4 py-3 rounded-lg bg-background border border-border theme-transition",
          "text-foreground placeholder:text-foreground/50 backdrop-blur-sm",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring",
          "transition-all duration-300 resize-none",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
