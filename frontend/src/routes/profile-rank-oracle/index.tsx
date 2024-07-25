import { PageContainer } from "@/components/ui/layout";
import {
  PageHeader,
  PageHeaderSubheading,
  PageHeaderTitle,
} from "@/components/ui/page-header";
import ProfileRankOracleTable from "./table";

export default function ProfileRankingOracle() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderTitle>My Job Requisitions</PageHeaderTitle>
        <PageHeaderSubheading>
          Unified sourcing and ranking from internal pool of resumes
        </PageHeaderSubheading>
      </PageHeader>
      <ProfileRankOracleTable />
    </PageContainer>
  );
}
