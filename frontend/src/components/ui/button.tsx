import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

export interface LargeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const LargeButton = React.forwardRef<
  HTMLButtonElement,
  LargeButtonProps
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex items-center justify-center border-[1px] border-muted-foreground/20 p-8 rounded-md w-full",
      className
    )}
    {...props}
  >
    {children}
  </button>
));

export interface LargeButtonIconProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const LargeButtonIcon = React.forwardRef<
  HTMLDivElement,
  LargeButtonIconProps
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("mr-2", className)} {...props}>
    {children}
  </div>
));

export interface LargeButtonContentProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const LargeButtonContent = React.forwardRef<
  HTMLDivElement,
  LargeButtonContentProps
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("text-left", className)} {...props}>
    {children}
  </div>
));

export interface LargeButtonTitleProps
  extends React.HtmlHTMLAttributes<HTMLSpanElement> {}

export const LargeButtonTitle = React.forwardRef<
  HTMLSpanElement,
  LargeButtonTitleProps
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "block text-muted-foreground text-lg font-semibold",
      className
    )}
    {...props}
  >
    {children}
  </span>
));

export interface LargeButtonSubtitleProps
  extends React.HtmlHTMLAttributes<HTMLSpanElement> {}

export const LargeButtonSubtitle = React.forwardRef<
  HTMLSpanElement,
  LargeButtonSubtitleProps
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("block text-sm text-muted-foreground/80", className)}
    {...props}
  >
    {children}
  </span>
));
