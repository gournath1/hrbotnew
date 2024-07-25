import { DataTableUI } from "@/components/ui/data-table-ui";
import { Search, SearchFilterInput, SearchIcon } from "@/components/ui/search";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
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
        <Search>
          <SearchIcon />
          <SearchFilterInput
            table={table}
            columName="jobRequisition"
            placeholder="Filter by Job"
          />
        </Search>
      </div>
      <DataTableUI table={table} />
    </div>
  );
}
