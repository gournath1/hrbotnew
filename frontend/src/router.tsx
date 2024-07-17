import { createBrowserRouter } from "react-router-dom";
import { routes } from "./links";
import GenerateJD from "./routes/generate-jd";
import Home from "./routes/home";
import MyActivity from "./routes/my-activity";
import ProfileRankingManual from "./routes/profile-rank-manual";
import ProfileRankingOracle from "./routes/profile-rank-oracle";
import Root from "./routes/root";

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: routes.createJD, element: <GenerateJD /> },
      { path: routes.profileRankingOracle, element: <ProfileRankingOracle /> },
      { path: routes.profileRankingManual, element: <ProfileRankingManual /> },
      { path: routes.myActivity, element: <MyActivity /> },
    ],
  },
]);
