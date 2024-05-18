import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import FindJobs from "pages/FindJobs";
import BrowseCompanies from "pages/BrowseCompanies";
import SearchCompaniesResults from "pages/SearchCompaniesResults";
import JobDescriptions from "pages/JobDescriptions";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "landingpage",
      element: <LandingPage />,
    },
    {
      path: "findjobs",
      element: <FindJobs />,
    },
    {
      path: "browsecompanies",
      element: <BrowseCompanies />,
    },
    {
      path: "searchcompaniesresults",
      element: <SearchCompaniesResults />,
    },
    {
      path: "jobdescriptions",
      element: <JobDescriptions />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
