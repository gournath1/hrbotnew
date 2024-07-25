import { cn } from "@/lib/utils";
import React from "react";

export interface PageHeaderProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("mb-10", className)} {...props}>
      {children}
    </div>
  )
);

export interface PageHeaderTitleProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {}

export const PageHeaderTitle = React.forwardRef<
  HTMLHeadingElement,
  PageHeaderTitleProps
>(({ className, children, ...props }, ref) => (
  <h1 ref={ref} className={cn("text-3xl font-bold mb-2", className)} {...props}>
    {children}
  </h1>
));

export interface PageHeaderSubheadingProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {}

export const PageHeaderSubheading = React.forwardRef<
  HTMLParagraphElement,
  PageHeaderSubheadingProps
>(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn("", className)} {...props}>
    {children}
  </p>
));
