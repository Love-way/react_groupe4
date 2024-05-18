import React from "react";
import { Text, Button, Img, Heading } from ".";

interface Props {
  className?: string;
  findjobstext?: string;
  browsecompaniestext?: string;
  logintext?: string;
  signupbutton?: string;
  discovermoretext?: string;
  greatplatformtext?: string;
  jobtitleorkeywordtext?: string;
  locationtext?: string;
  searchmyjobbutton?: string;
  popularuitext?: string;
}

export default function LandingPageHeader1({
  findjobstext = "Find Jobs",
  browsecompaniestext = "Browse Companies",
  logintext = "Login",
  signupbutton = "Sign Up",
  discovermoretext,
  greatplatformtext = "Great platform for the job seeker that searching for new career heights and passionate about startups.",
  jobtitleorkeywordtext = "Job title or keyword",
  locationtext = "Florence, Italy",
  searchmyjobbutton = "Search my job",
  popularuitext,
  ...props
}: Props) {
  return (
    <div {...props}>
      <Img
        src="images/img_pic.png"
        alt="pic"
        className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[239px] w-[39%] object-cover"
      />
      <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full flex-col items-center gap-[82px] md:gap-[61px] sm:gap-[41px]">
        <header className="flex items-center justify-center self-stretch py-3.5">
          <div className="container-sm flex items-center justify-between gap-5 pl-2.5 md:flex-col md:p-5">
            <div className="mb-1.5 flex w-[38%] items-start justify-center self-end md:w-full sm:flex-col">
              <Img src="images/img_header_logo.png" alt="headerlogo" className="h-[34px] w-[160px] object-cover" />
              <a href="#" className="ml-12 sm:ml-0">
                <Text as="p" className="!font-medium">
                  {findjobstext}
                </Text>
              </a>
              <a href="#" className="ml-4 mt-[5px] sm:ml-0">
                <Text as="p" className="!font-medium">
                  {browsecompaniestext}
                </Text>
              </a>
            </div>
            <div className="flex items-center">
              <a href="#">
                <Heading size="2xl" as="h6" className="text-center !font-bold !text-indigo-A700">
                  {logintext}
                </Heading>
              </a>
              <div className="ml-10 h-[48px] w-px bg-gray-300" />
              <a href="#" className="ml-[15px] flex items-center justify-center bg-indigo-A700 sm:px-5">
                <Heading size="2xl" as="h6" className="px-6 py-4 text-center !font-bold !text-white-A700">
                  {signupbutton}
                </Heading>
              </a>
            </div>
          </div>
        </header>
        <div className="container-sm pl-[11px] pr-[341px] md:p-5 md:pr-5">
          <div className="flex flex-col gap-[23px]">
            <div className="flex w-[63%] flex-col gap-3 md:w-full">
              <Heading size="9xl" as="h1" className="leading-[110%]">
                <span className="text-blue_gray-900">Discover more than</span>
                <span className="text-blue_gray-900">&nbsp;</span>
                <span className="text-blue-500">5000+ Jobs</span>
              </Heading>
              <Img src="images/img_group.svg" alt="image" className="h-[39px] w-[85%]" />
            </div>
            <Text size="3xl" as="p" className="w-[61%] leading-[160%] !text-blue_gray-700_b2 md:w-full">
              {greatplatformtext}
            </Text>
            <div className="flex flex-col items-start gap-5 pb-1">
              <div className="flex justify-center self-stretch bg-white-A700 p-4 shadow-xs md:flex-col">
                <div className="flex flex-1 items-center justify-evenly gap-4 md:self-stretch">
                  <Img src="images/img_rewind.svg" alt="rewind" className="h-[24px] w-[24px]" />
                  <div className="flex w-[76%] flex-col items-start gap-3.5 pt-6 sm:pt-5">
                    <Text as="p" className="!text-blue_gray-400_7f">
                      {jobtitleorkeywordtext}
                    </Text>
                    <div className="h-px w-full self-stretch bg-gray-300" />
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center gap-4 pl-2 pr-6 md:self-stretch sm:pr-5">
                  <Img src="images/img_linkedin.svg" alt="linkedin" className="h-[24px] w-[24px]" />
                  <div className="flex flex-1 flex-col gap-2.5 pt-5">
                    <div className="flex items-center justify-between gap-5 pb-1">
                      <Text as="p" className="!text-blue_gray-900_e5">
                        {locationtext}
                      </Text>
                      <Img src="images/img_arrow_down.svg" alt="arrowdown" className="h-[16px] w-[16px] self-end" />
                    </div>
                    <div className="h-px bg-gray-300" />
                  </div>
                </div>
                <Button size="7xl" variant="fill" shape="square" className="min-w-[209px] font-bold md:p-5 sm:px-5">
                  {searchmyjobbutton}
                </Button>
              </div>
              <Text as="p" className="!text-gray-900_b2">
                <span className="text-gray-900_b2">Popular :&nbsp;</span>
                <span className="font-medium text-gray-900_b2">UI Designer, UX Researcher, Android, Admin</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
