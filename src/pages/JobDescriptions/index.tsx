import React from "react";
import { Helmet } from "react-helmet";
import LandingPageLandingpage4 from "../../components/Landingpage4";
import JobDescriptionsHeader3 from "../../components/JobDescriptionsHeader3";
import JobDescriptionsLandingpage from "../../components/JobDescriptionsLandingpage";
import JobDescriptionsLandingpage1 from "../../components/JobDescriptionsLandingpage1";
import JobDescriptionsLandingpage2 from "../../components/JobDescriptionsLandingpage2";
import Footer from "../../components/Footer/footer";

export default function JobDescriptionsPage() {
  return (
    <>
      <Helmet>
        <title>myviews</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <JobDescriptionsHeader3 className="flex flex-col items-center gap-11 bg-gray-50 pb-[71px] md:pb-5" />

        {/* job description section */}
        <JobDescriptionsLandingpage className="flex flex-col items-center gap-[72px] bg-white-A700 pt-[70px] md:gap-[54px] md:pt-5 sm:gap-9" />

        {/* benefits section */}
        <JobDescriptionsLandingpage1 className="flex flex-col items-center bg-white-A700 pt-[70px] md:pt-5" />

        {/* company overview section */}
        <JobDescriptionsLandingpage2 className="flex items-center justify-center rounded-lg bg-white-A700 py-[72px] md:py-5" />

        {/* similar jobs section */}
        <LandingPageLandingpage4
          latestjobstext="Similiar Jobs"
          className="relative h-[877px] bg-[url(/public/images/img_landing_page_latest.svg)] bg-cover bg-no-repeat pt-[70px] md:pt-5"
        />

        {/* footer section */}
        <Footer className="flex items-center justify-center bg-gray-900 pb-10 pt-[66px] md:pt-5 sm:py-5" />
      </div>
    </>
  );
}
