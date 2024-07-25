import { cn } from "@/lib/utils";
import React from "react";

export interface PageContainerProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const PageContainer = React.forwardRef<
  HTMLDivElement,
  PageContainerProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("py-20 container max-w-screen-xl", className)}
    {...props}
  >
    {children}
  </div>
));
