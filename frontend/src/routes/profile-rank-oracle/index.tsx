import { PageHeading, PageSubheading } from "@/components/typography";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { columns } from "./column";

export default function ProfileRankingOracle() {
  return (
    <div className="py-20 container max-w-screen-xl">
      <div className="mb-10">
        <PageHeading>My Job Requisitions</PageHeading>
        <PageSubheading>
          Unified sourcing and ranking from internal pool of resumes
        </PageSubheading>
      </div>

      <div className="flex justify-end my-5">
        <div className="flex items-center">
          <Search className="relative z-10 text-neutral-400 -mr-8" size={18} />
          <Input
            className="px-10 rounded-full w-80"
            placeholder="Enter keywords ..."
          />
        </div>
      </div>

      <div>
        <DataTable data={[]} columns={columns} />
      </div>
    </div>
  );
}
