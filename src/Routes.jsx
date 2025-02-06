import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HomepageDashboard from "./pages/HomepageDashboard";
import ChallengesHackathons from "./pages/ChallengesHackathons";
import ChallengeDetails from "./pages/ChallengeDetails";
import Home1 from "./pages/Home1";
import CHALLENGESHACKHATONSPAGE from "./pages/CHALLENGESHACKHATONSPAGE";
import ABOUT from "./pages/ABOUT";
import FORLEARNINGINSTITUTIONSPAGE from "./pages/FORLEARNINGINSTITUTIONSPAGE";
import HomepageDashboardOne from "./pages/HomepageDashboardOne";
import ChallengesHackathonsOne from "./pages/ChallengesHackathonsOne";
import ChallengesHackathonsTwo from "./pages/ChallengesHackathonsTwo";
import ChallengeDetailsOne from "./pages/ChallengeDetailsOne";
import EditChallengesHackathons from "./pages/EditChallengesHackathons";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "homepagedashboard",
      element: <HomepageDashboard />,
    },
    {
      path: "challengeshackathons",
      element: <ChallengesHackathons />,
    },
    {
      path: "challengedetails",
      element: <ChallengeDetails />,
    },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "challengeshackhatonspage",
      element: <CHALLENGESHACKHATONSPAGE />,
    },
    {
      path: "about",
      element: <ABOUT />,
    },
    {  path: "forlearninginstitutionspage", 
       element: <FORLEARNINGINSTITUTIONSPAGE/>,
    },
    {
      path: "homepagedashboardone",
      element: <HomepageDashboardOne/>,
      },
    {
      path: "challengeshackathonsone",
      element: <ChallengesHackathonsOne />,
      },
    {
      path: "challengeshackathontwo",
      element: <ChallengesHackathonsTwo />,
      },
    {
      path: "challengedetailsone",
      element: <ChallengeDetailsOne />,
      },
    {
      path: "editchallengeshackathons",
      element: <EditChallengesHackathons />,
      },
  ]);
  return element;
};

export default ProjectRoutes;

































