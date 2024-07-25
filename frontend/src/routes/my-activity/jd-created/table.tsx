import { DataTableUI } from "@/components/ui/data-table-ui";
import { Search, SearchFilterInput, SearchIcon } from "@/components/ui/search";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { columns } from "./columns";
const data = [
  {
    createOn: "test",
    download: "test",
    fileName: "test",
    jobDescriptionName: "test",
    srNo: "1234",
  },
];

export default function JDCreatedTable() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
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
            columName="jobDescriptionName"
            placeholder="Filter by Description name"
          />
        </Search>
      </div>
      <DataTableUI table={table} />
    </div>
  );
}
