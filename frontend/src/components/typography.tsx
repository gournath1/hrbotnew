import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface PageHeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const PageHeading = ({
  className,
  children,
  ...rest
}: PropsWithChildren<PageHeadingProps>) => {
  return (
    <h1 className={cn("text-3xl font-bold mb-2", className)} {...rest}>
      {children}
    </h1>
  );
};

interface PageSubheadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}
export const PageSubheading = ({
  className,
  children,
  ...rest
}: PropsWithChildren<PageSubheadingProps>) => {
  return (
    <p className={cn("", className)} {...rest}>
      {children}
    </p>
  );
};
