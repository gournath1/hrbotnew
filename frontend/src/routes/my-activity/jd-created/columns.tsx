import { ColumnDef } from "@tanstack/react-table";

export type JDCreatedTableProps = {
  srNo: string;
  jobDescriptionName: string;
  fileName: string;
  createOn: string;
  download: string;
};

export const columns: ColumnDef<JDCreatedTableProps>[] = [
  {
    accessorKey: "srNo",
    header: "Sr No",
  },
  {
    accessorKey: "jobDescriptionName",
    header: "Job Description Name",
  },
  {
    accessorKey: "fileName",
    header: "File Name",
  },
  {
    accessorKey: "createOn",
    header: "Created On",
  },
  {
    accessorKey: "download",
    header: "Download",
  },
];
