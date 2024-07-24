import { DataTableUI } from "@/components/ui/data-table-ui";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "./columns";

export default function JDCreatedTable() {
  const table = useReactTable({
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <DataTableUI table={table}></DataTableUI>
    </div>
  );
}
