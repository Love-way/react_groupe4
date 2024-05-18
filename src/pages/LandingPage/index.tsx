import React from "react";
import { Helmet } from "react-helmet";
import LandingPageHeader1 from "../../components/pageHeader1";
import LandingPageLandingpage from "../../components/Landingpage";
import LandingPageLandingpage1 from "../../components/Landingpage1";
import LandingPageLandingpage2 from "../../components/Landingpage2";
import LandingPageLandingpage3 from "../../components/Landingpage3";
import LandingPageLandingpage4 from "../../components/Landingpage4";
import Footer from "../../components/Footer/footer";

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>myviews</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* header section */}
        <LandingPageHeader1 className="relative h-[794px] bg-gray-50" />

        {/* companies section */}
        <LandingPageLandingpage className="flex flex-col items-center gap-[37px] bg-white-A700 pb-12 pt-[52px] md:py-5" />

        {/* categories section */}
        <LandingPageLandingpage1 className="flex flex-col items-center gap-[41px] bg-white-A700 pt-[72px] md:pt-5" />
        <LandingPageLandingpage2 className="flex items-center justify-center bg-white-A700 py-[72px] md:py-5" />

        {/* featured jobs section */}
        <LandingPageLandingpage3 className="flex flex-col items-center gap-[41px] bg-white-A700 pb-[72px] md:pb-5" />

        {/* latest jobs section */}
        <LandingPageLandingpage4 className="relative h-[877px] bg-[url(/public/images/img_landing_page_latest.svg)] bg-cover bg-no-repeat pt-[72px] md:pt-5" />

        {/* footer section */}
        <Footer className="flex items-center justify-center bg-gray-900 pb-10 pt-[66px] md:pt-5 sm:py-5" />
      </div>
    </>
  );
}
