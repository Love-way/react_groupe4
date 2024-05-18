import React from "react";
import { Text, Button, Img, Heading } from ".";

interface Props {
  className?: string;
  caption?: string;
  line?: boolean;
  captionOne?: string;
  captionTwo?: string;
  button?: string;
  findyour?: string;
  dreamjob?: string;
  findyournext?: string;
  jobtitleor?: string;
  florenceitaly?: string;
  search?: string;
  popularui?: string;
}

export default function FindJobsHeader2({
  caption = "Find Jobs",
  line,
  captionOne = "Browse Companies",
  captionTwo = "Login",
  button = "Sign Up",
  findyour = "Find your",
  dreamjob = "dream job",
  findyournext = "Find your next career at companies like HubSpot, Nike, and Dropbox",
  jobtitleor = "Job title or keyword",
  florenceitaly = "Florence, Italy",
  search = "Search",
  popularui = "Popular : UI Designer, UX Researcher, Android, Admin",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex w-full flex-col items-center gap-[65px] sm:gap-8">
        <header className="flex items-center justify-center self-stretch bg-white-A700">
          <div className="container-sm flex items-center justify-between gap-5 pl-2.5 md:flex-col md:p-5">
            <div className="flex w-[38%] items-center justify-between gap-5 md:w-full sm:flex-col">
              <Img src="images/img_header_logo.png" alt="headerlogo" className="h-[34px] w-[160px] object-cover" />
              <ul className="flex items-start gap-4 pt-6 sm:pt-5">
                <li>
                  <a href="#">
                    <div className="flex flex-col gap-[30px]">
                      <Text as="p" className="!font-medium !text-indigo-A700">
                        {caption}
                      </Text>
                      {!!line ? <div className="h-[4px] bg-indigo-A700" /> : null}
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer">
                    <Text as="p" className="!font-medium hover:text-indigo-A700">
                      {captionOne}
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center pl-6 sm:pl-5">
              <a href="#">
                <Heading size="2xl" as="h6" className="text-center !font-bold !text-indigo-A700">
                  {captionTwo}
                </Heading>
              </a>
              <div className="ml-10 h-[48px] w-px bg-gray-300" />
              <a href="#" className="ml-[15px] flex items-center justify-center bg-indigo-A700 sm:px-5">
                <Heading size="2xl" as="h6" className="px-6 py-4 text-center !font-bold !text-white-A700">
                  {button}
                </Heading>
              </a>
            </div>
          </div>
        </header>
        <div className="container-sm flex flex-col items-center gap-10 md:p-5">
          <div className="flex w-[50%] flex-col items-center gap-7 pb-[5px] md:w-full">
            <div className="flex w-[81%] items-start gap-4 md:w-full sm:flex-col">
              <Heading size="8xl" as="h1" className="text-center">
                {findyour}
              </Heading>
              <div className="flex w-full flex-col sm:w-full">
                <Heading size="8xl" as="h1" className="text-center !text-blue-500">
                  {dreamjob}
                </Heading>
                <Img src="images/img_group.svg" alt="image" className="relative mt-[-7px] h-[14px]" />
              </div>
            </div>
            <Text size="2xl" as="p" className="text-center">
              {findyournext}
            </Text>
          </div>
          <div className="flex flex-col items-start gap-5 self-stretch pb-1">
            <div className="flex items-center justify-center gap-5 self-stretch bg-white-A700 p-6 shadow-xs md:flex-col sm:p-5">
              <div className="flex flex-1 items-center justify-evenly gap-4 md:self-stretch sm:flex-col">
                <Img src="images/img_rewind.svg" alt="rewind" className="h-[24px] w-[24px] sm:w-full" />
                <div className="flex w-[85%] flex-col items-start gap-3.5 pt-3.5 sm:w-full">
                  <Text as="p" className="!text-blue_gray-400">
                    {jobtitleor}
                  </Text>
                  <div className="h-px w-full self-stretch bg-gray-300" />
                </div>
              </div>
              <div className="h-[56px] w-px bg-gray-900_19 md:h-px md:w-[56px] md:p-5" />
              <div className="flex flex-1 items-center justify-center gap-4 md:self-stretch sm:flex-col">
                <Img src="images/img_linkedin.svg" alt="linkedin" className="h-[24px] w-[24px] sm:w-full" />
                <div className="flex flex-1 flex-col gap-2.5 pt-2.5 sm:self-stretch">
                  <div className="flex items-center justify-between gap-5 pb-1">
                    <Text as="p" className="!text-gray-900_e5">
                      {florenceitaly}
                    </Text>
                    <Img
                      src="images/img_arrow_down_blue_gray_900.svg"
                      alt="arrowdown"
                      className="h-[16px] w-[16px] self-end"
                    />
                  </div>
                  <div className="h-px bg-gray-300" />
                </div>
              </div>
              <Button
                size="5xl"
                variant="fill"
                shape="square"
                className="min-w-[113px] self-start font-bold md:p-5 sm:px-5"
              >
                {search}
              </Button>
            </div>
            <Text as="p" className="!text-blue_gray-700_b2">
              {popularui}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
