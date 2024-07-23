import { DataTableUI } from "@/components/ui/data-table-ui";
import { Input } from "@/components/ui/input";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Search } from "lucide-react";
import { useState } from "react";
import { columns, dummyData } from "./column";

export default function ProfileRankOracleTable() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    columns: columns,
    data: dummyData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
    },
  });

  return (
    <div>
      <div className="flex justify-end my-5">
        <div className="flex items-center">
          <Search className="relative z-10 text-neutral-400 -mr-8" size={18} />
          <Input
            className="px-10 rounded-full w-80"
            placeholder="Filter Job Requisition"
            value={
              (table.getColumn("jobRequisition")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn("jobRequisition")
                ?.setFilterValue(event.target.value)
            }
          />
        </div>
      </div>
      <DataTableUI table={table} />
    </div>
  );
}
