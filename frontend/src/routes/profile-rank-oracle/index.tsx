import { PageHeading, PageSubheading } from "@/components/typography";
import ProfileRankOracleTable from "./table";

export default function ProfileRankingOracle() {
  return (
    <div className="py-20 container max-w-screen-xl">
      <div className="mb-10">
        <PageHeading>My Job Requisitions</PageHeading>
        <PageSubheading>
          Unified sourcing and ranking from internal pool of resumes
        </PageSubheading>
      </div>
      <ProfileRankOracleTable />
    </div>
  );
}
