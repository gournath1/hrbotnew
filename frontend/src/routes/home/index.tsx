import CreateJDIcon from "@/assets/jd.svg";
import OracleRankIcon from "@/assets/rank-profile.svg";
import ActivityIcon from "@/assets/results.svg";
import ManualRankIcon from "@/assets/stars.svg";
import { PageContainer } from "@/components/ui/layout";
import { routes } from "@/links";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    heading: "Generate Job Description",
    subheading: "GenAI driven job description",
    iconSrc: CreateJDIcon,
    href: routes.createJD,
  },
  {
    heading: "Profile Ranking - Oracle",
    subheading: "Unified sourcing and ranking from internal pool of resumes",
    iconSrc: OracleRankIcon,
    href: routes.profileRankingOracle,
  },
  {
    heading: "Profile Ranking - Manual",
    subheading: "Sourcing talent from manually created pool of resumes",
    iconSrc: ManualRankIcon,
    href: routes.profileRankingManual,
  },
  {
    heading: "My Activity",
    subheading: "View saved Job description, Resumes & Ranked profiles",
    iconSrc: ActivityIcon,
    href: routes.myActivity,
  },
];

export default function Home() {
  return (
    <div>
      <PageContainer className="pb-0">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-2">
            Talent Acquisition Platform
          </h1>
          <p className="text-lg text-muted-foreground">
            Create inclusive job description, find befitting candidate profiles
          </p>
        </div>
      </PageContainer>

      <div className="bg-homePattern bg-contain bg-no-repeat bg-center">
        <PageContainer className="grid grid-cols-4 pb-20 gap-5">
          {cards.map((card) => (
            <Link
              to={card.href}
              className="group rounded-xl border p-6 flex flex-col bg-white hover:shadow-lg transition-shadow"
              key={card.href}
            >
              <div>
                <img src={card.iconSrc} />
              </div>
              <div className="my-6">
                <h2 className="text-xl font-bold">{card.heading}</h2>
                <p className="text-muted-foreground text-sm">
                  {card.subheading}
                </p>
              </div>
              <div className="mt-auto">
                <MoveRight
                  size={32}
                  className="group-hover:translate-x-4 transition-transform"
                />
              </div>
            </Link>
          ))}
        </PageContainer>
      </div>
    </div>
  );
}
