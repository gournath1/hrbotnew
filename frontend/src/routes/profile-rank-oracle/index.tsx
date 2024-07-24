import { PageContainer, PageHeaderSection } from "@/components/layout";
import { PageHeading, PageSubheading } from "@/components/typography";
import ProfileRankOracleTable from "./table";

export default function ProfileRankingOracle() {
  return (
    <PageContainer>
      <PageHeaderSection>
        <PageHeading>My Job Requisitions</PageHeading>
        <PageSubheading>
          Unified sourcing and ranking from internal pool of resumes
        </PageSubheading>
      </PageHeaderSection>
      <ProfileRankOracleTable />
    </PageContainer>
  );
}
