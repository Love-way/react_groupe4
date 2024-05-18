import React from "react";
import { Helmet } from "react-helmet";
import C12FindJobsHeader2 from "../../components/FindJobsHeader2";
import C14SearchCompaniesResultsLandingpage from "../../components/SearchCompaniesResultsLandingpage";
import Footer from "../../components/Footer/footer";

export default function SearchCompaniesResultsPage() {
  return (
    <>
      <Helmet>
        <title>myviews</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* page layout section */}
      <div className="w-full bg-white-A700">
        {/* header section */}
        <C12FindJobsHeader2
          dreamjob="dream companies"
          findyournext="Find the dream companies you dream work for"
          jobtitleor="Fintech"
          popularui="Popular : Twitter, Microsoft, Apple, Facebook"
          className="flex flex-col gap-[65px] pb-[65px] md:pb-5 sm:gap-8"
        />

        {/* main content section */}
        <C14SearchCompaniesResultsLandingpage className="flex items-center justify-center bg-white-A700 pb-[72px] pt-[70px] md:py-5" />

        {/* footer section */}
        <Footer className="flex items-center justify-center bg-gray-900 pb-10 pt-[66px] md:pt-5 sm:py-5" />
      </div>
    </>
  );
}
