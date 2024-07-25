import {
  LargeButton,
  LargeButtonContent,
  LargeButtonIcon,
  LargeButtonSubtitle,
  LargeButtonTitle,
} from "@/components/ui/button";
import { PageContainer } from "@/components/ui/layout";
import {
  PageHeader,
  PageHeaderSubheading,
  PageHeaderTitle,
} from "@/components/ui/page-header";
import { PlusCircle } from "lucide-react";
import ParameterWeightage from "./parameter-weightage";

export default function ProfileRankingManual() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderTitle>Rank Profile Manually</PageHeaderTitle>
        <PageHeaderSubheading>
          Rank profile in just few steps
        </PageHeaderSubheading>
      </PageHeader>

      <div className="grid md:grid-cols-2 gap-5 mb-20">
        <LargeButton>
          <LargeButtonIcon>
            <PlusCircle className="fill-black stroke-white" />
          </LargeButtonIcon>
          <LargeButtonContent>
            <LargeButtonTitle>Upload Job Description</LargeButtonTitle>
            <LargeButtonSubtitle>
              Accepted is Docx and PDF format
            </LargeButtonSubtitle>
          </LargeButtonContent>
        </LargeButton>

        <LargeButton>
          <LargeButtonIcon>
            <PlusCircle className="fill-black stroke-white" />
          </LargeButtonIcon>
          <LargeButtonContent>
            <LargeButtonTitle>Upload Resume Folder</LargeButtonTitle>
            <LargeButtonSubtitle>
              Accepted is Docx and PDF format
            </LargeButtonSubtitle>
          </LargeButtonContent>
        </LargeButton>
      </div>

      <ParameterWeightage />
    </PageContainer>
  );
}
