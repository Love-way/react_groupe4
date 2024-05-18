import React from "react";
import { Helmet } from "react-helmet";
import C12FindJobsHeader2 from "../../components/FindJobsHeader2";
import C12FindJobsLandingpage from "../../components/FindJobsLandingpage";
import Footer from "../../components/Footer/footer";

export default function FindJobsPage() {
  return (
    <>
      <Helmet>
        <title>myviews</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* header section */}
        <C12FindJobsHeader2
          line={true}
          className="h-[514px] bg-[url(/public/images/img_header_2_desktop.svg)] bg-cover bg-no-repeat pb-[65px] md:h-auto md:pb-5"
        />
        <C12FindJobsLandingpage className="flex items-center justify-center bg-white-A700 pb-[72px] pt-[70px] md:py-5" />

        {/* footer section */}
        <Footer className="flex flex-col items-center gap-20 bg-gray-900 pb-10 pt-[66px] md:gap-[60px] md:pt-5 sm:gap-10 sm:py-5" />
      </div>
    </>
  );
}
