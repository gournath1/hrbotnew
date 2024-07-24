import { cn } from "@/lib/utils";
import { Table } from "@tanstack/react-table";
import { Search as LucidSearch } from "lucide-react";
import React from "react";
import { Input } from "./input";

export interface SearchProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Search = React.forwardRef<HTMLDivElement, SearchProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center", className)} {...props}>
      {children}
    </div>
  )
);

export const SearchInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input>
>(({ className, ...props }, ref) => (
  <Input
    ref={ref}
    className={cn("px-10 rounded-full w-80", className)}
    {...props}
  />
));

export const SearchIcon = React.forwardRef<
  React.ElementRef<typeof LucidSearch>,
  React.ComponentPropsWithoutRef<typeof LucidSearch>
>(({ className, children, size, ...props }, ref) => (
  <LucidSearch
    ref={ref}
    className={cn("relative z-10 text-neutral-400 -mr-8", className)}
    size={size || 18}
    {...props}
  />
));

export const SearchFilerInput = React.forwardRef<
  React.ElementRef<typeof SearchInput>,
  React.ComponentPropsWithoutRef<typeof SearchInput> & {
    table: Table<any>;
    columName: string;
  }
>(({ className, table, columName, ...props }, ref) => (
  <SearchInput
    ref={ref}
    className={cn("", className)}
    value={(table.getColumn(columName)?.getFilterValue() as string) ?? ""}
    onChange={(event) =>
      table.getColumn(columName)?.setFilterValue(event.target.value)
    }
    {...props}
  />
));
