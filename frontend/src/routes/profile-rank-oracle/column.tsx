import { ColumnDef } from "@tanstack/react-table";

export type JobRequisition = {
  srNo: string;
  jobRequisition: string;
  id: string;
  location: string;
  application: string;
};

export const columns: ColumnDef<JobRequisition>[] = [
  {
    accessorKey: "srNo",
    header: "Sr No",
  },
  {
    accessorKey: "jobRequisition",
    header: "Job Requisition",
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "application",
    header: "Application",
  },
];
