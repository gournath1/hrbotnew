import { Table } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { Input } from "./input";

interface Props<T> {
  table: Table<T>;
}

export function TableFilterSearch<T>({ table }: Props<T>) {
  return (
    <div>
      <Search className="relative z-10 text-neutral-400 -mr-8" size={18} />
      <Input
        className="px-10 rounded-full w-80"
        placeholder="Filter Job Requisition"
        value={
          (table.getColumn("jobRequisition")?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table.getColumn("jobRequisition")?.setFilterValue(event.target.value)
        }
      />
    </div>
  );
}
