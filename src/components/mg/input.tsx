import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

const MGInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn("flex border rounded-md", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

MGInput.displayName = "MGInput"; // This is used by React DevTools

export { MGInput };
