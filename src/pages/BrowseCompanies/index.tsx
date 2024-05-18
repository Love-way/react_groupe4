import React from "react";
import { Helmet } from "react-helmet";
import C12FindJobsHeader2 from "../../components/FindJobsHeader2";
import C13BrowseCompaniesLandingpage from "../../components/BrowseCompaniesLandingpage";
import C13BrowseCompaniesLandingpage1 from "../../components/BrowseCompaniesLandingpage1";
import Footer from "../../components/Footer/footer";

export default function BrowseCompaniesPage() {
  return (
    <>
      <Helmet>
        <title>myviews</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main header section */}
      <div className="w-full bg-white-A700">
        {/* navigation bar section */}
        <C12FindJobsHeader2
          dreamjob="dream companies"
          findyournext="Find the dream companies you dream work for"
          jobtitleor="Company name or keyword"
          popularui="Popular : Twitter, Microsoft, Apple, Facebook"
          className="flex flex-col gap-[65px] pb-[65px] md:pb-5 sm:gap-8"
        />

        {/* recommended companies section */}
        <C13BrowseCompaniesLandingpage className="flex flex-col items-center gap-8 bg-white-A700 pt-[72px] md:pt-5" />

        {/* categories section */}
        <C13BrowseCompaniesLandingpage1 className="relative h-[1095px] overflow-auto" />

        {/* footer section */}
        <Footer className="flex flex-col items-center gap-20 bg-gray-900 pb-10 pt-[66px] md:gap-[60px] md:pt-5 sm:gap-10 sm:py-5" />
      </div>
    </>
  );
}
