import React from "react";
import { Button, Img, Text, Heading } from ".";

interface Props {
  className?: string;
  caption?: string;
  captionOne?: string;
  captionTwo?: string;
  button?: string;
  homecompanies?: string;
  socialmedia?: string;
  nomad?: string;
  parisfrance?: string;
  fulltime?: string;
  apply?: string;
}

export default function JobDescriptionsHeader3({
  caption = "Find Jobs",
  captionOne = "Browse Companies",
  captionTwo = "Login",
  button = "Sign Up",
  homecompanies = "Home / Companies / Nomad / Social Media Assistant",
  socialmedia = "Social Media Assistant",
  nomad = "Stripe",
  parisfrance = "Paris, France",
  fulltime = "Full-Time",
  apply = "Apply",
  ...props
}: Props) {
  return (
    <div {...props}>
      <header className="flex items-center justify-center self-stretch bg-white-A700">
        <div className="container-sm flex justify-between gap-5 pl-[9px] md:flex-col md:p-5">
          <div className="flex w-[38%] items-center justify-between gap-5 md:w-full sm:flex-col">
            <Img src="images/img_header_logo.png" alt="headerlogo" className="h-[34px] w-[160px] object-cover" />
            <ul className="flex items-start gap-4 pt-6 sm:pt-5">
              <li>
                <a href="#">
                  <Text as="p" className="!font-medium">
                    {caption}
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="flex flex-col gap-7">
                    <Text as="p" className="cursor-pointer !font-medium !text-indigo-A700 hover:!text-blue_gray-700">
                      {captionOne}
                    </Text>
                    <div className="h-[4px] bg-indigo-A700" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center py-3.5 pl-3.5">
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
      <div className="container-sm flex flex-col gap-[45px] md:p-5">
        <div className="flex flex-col items-center pl-[9px] pr-[783px] md:pr-5">
          <Text as="p" className="!text-gray-900">
            {homecompanies}
          </Text>
        </div>
        <div className="flex items-center justify-between gap-5 border border-solid border-gray-300 bg-white-A700 py-6 pl-[33px] pr-[31px] md:flex-col sm:p-5">
          <div className="flex w-[41%] items-center justify-center gap-6 md:w-full sm:flex-col">
            <div className="w-[20%] sm:w-full">
              <Img
                src="images/img_stripe_logo_dp4f5yykm.png"
                alt="stripelogo"
                className="h-[82px] w-full object-cover md:h-auto"
              />
            </div>
            <div className="flex flex-1 flex-col items-start gap-[7px] sm:self-stretch">
              <Heading size="7xl" as="h2">
                {socialmedia}
              </Heading>
              <div className="flex w-[89%] items-center gap-2 pb-1 md:w-full">
                <Text size="3xl" as="p" className="self-end">
                  {nomad}
                </Text>
                <div className="h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-700" />
                <Text size="3xl" as="p">
                  {parisfrance}
                </Text>
                <div className="h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-700" />
                <Text size="3xl" as="p" className="self-start">
                  {fulltime}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex w-[22%] items-center justify-between gap-5 md:w-full">
            <Img src="images/img_icon_blue_gray_400.svg" alt="icon" className="h-[33px] w-[32px]" />
            <div className="h-full w-px bg-gray-300" />
            <Button size="7xl" variant="fill" shape="square" className="min-w-[164px] font-bold sm:px-5">
              {apply}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
