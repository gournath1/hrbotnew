import { PageContainer, PageHeaderSection } from "@/components/layout";
import { PageHeading } from "@/components/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JDCreatedTable from "./jd-created/table";

export default function MyActivity() {
  return (
    <PageContainer>
      <PageHeaderSection>
        <PageHeading>My Activity</PageHeading>
      </PageHeaderSection>
      <div>
        <Tabs defaultValue="jdCreated">
          <TabsList className="mb-4 border-b-[1px] border-b-muted w-full justify-start rounded-none">
            <TabsTrigger value="jdCreated">Total JD Created</TabsTrigger>
            <TabsTrigger value="rankedProfile">
              Total Ranked Profile
            </TabsTrigger>
          </TabsList>
          <TabsContent value="jdCreated">
            <JDCreatedTable />
          </TabsContent>
          <TabsContent value="rankedProfile">
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
