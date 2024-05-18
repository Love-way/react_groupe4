import React from "react";
import { Button, Img, Text, Input, Heading } from "..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="container-sm flex flex-col pl-2.5 md:p-5">
        <div className="flex items-start justify-between gap-5 md:flex-col">
          <div className="flex w-[32%] flex-col gap-[31px] md:w-full">
            <Img src="images/img_footer_logo.png" alt="footerlogo" className="h-[34px] w-[160px] object-cover" />
            <Text as="p" className="leading-[160%] !text-gray-300">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </Text>
          </div>
          <div className="flex w-[25%] items-start justify-between gap-5 md:w-full">
            <div className="flex flex-col gap-[29px]">
              <Heading size="3xl" as="h6" className="!text-white-A700">
                About
              </Heading>
              <ul className="flex flex-col gap-6">
                <li>
                  <a href="Companies" target="_blank" rel="noreferrer">
                    <Text as="p" className="!text-gray-300">
                      Companies
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Pricing" target="_blank" rel="noreferrer">
                    <Text as="p" className="!text-gray-300">
                      Pricing
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Terms" target="_blank" rel="noreferrer">
                    <Text as="p" className="!text-gray-300">
                      Terms
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Advice" target="_blank" rel="noreferrer">
                    <Text as="p" className="!text-gray-300">
                      Advice
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-gray-300">
                      Privacy Policy
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-[29px]">
              <Heading size="3xl" as="h6" className="!text-white-A700">
                Resources
              </Heading>
              <ul className="flex flex-col items-start gap-6">
                <li>
                  <a href="#">
                    <Text as="p" className="!text-gray-300">
                      Help Docs
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Guide" target="_blank" rel="noreferrer">
                    <Text as="p" className="!text-gray-300">
                      Guide
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Updates" target="_blank" rel="noreferrer">
                    <Text as="p" className="!text-gray-300">
                      Updates
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-gray-300">
                      Contact Us
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-[30%] flex-col items-start md:w-full">
            <Heading size="3xl" as="h6" className="!text-white-A700">
              Get job notifications
            </Heading>
            <Text as="p" className="mt-[23px] w-[85%] leading-[160%] !text-gray-300 md:w-full">
              The latest job news, articles, sent to your inbox weekly.
            </Text>
            <div className="mt-10 flex gap-2 self-stretch">
              <Input shape="square" name="email" placeholder={`Email Address`} className="sm:pr-5" />
              <Button size="5xl" variant="fill" shape="square" className="min-w-[131px] font-bold sm:px-5">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <Img src="images/img_divider.svg" alt="divider" className="mt-[84px] h-px" />
        <div className="mt-10 flex items-center self-start md:flex-col">
          <Text as="p" className="mt-1.5 self-start !font-medium !text-white-A700">
            2021 @ JobHuntly. All rights reserved.
          </Text>
          <Button
            color="white_A700_19"
            size="md"
            variant="fill"
            shape="circle"
            className="ml-[641px] w-[32px] !rounded-[16px] md:ml-0"
          >
            <Img src="images/img_facebook.svg" />
          </Button>
          <Button
            color="white_A700_19"
            size="md"
            variant="fill"
            shape="circle"
            className="ml-6 w-[32px] !rounded-[16px] md:ml-0"
          >
            <Img src="images/img_info.svg" />
          </Button>
          <Button
            color="white_A700_19"
            size="md"
            variant="fill"
            shape="circle"
            className="ml-6 w-[32px] !rounded-[16px] md:ml-0"
          >
            <Img src="images/img_globe.svg" />
          </Button>
          <Button
            color="white_A700_19"
            size="md"
            variant="fill"
            shape="circle"
            className="ml-6 w-[32px] !rounded-[16px] md:ml-0"
          >
            <Img src="images/img_link.svg" />
          </Button>
          <Button
            color="white_A700_19"
            size="md"
            variant="fill"
            shape="circle"
            className="ml-6 w-[32px] !rounded-[16px] md:ml-0"
          >
            <Img src="images/img_trash.svg" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
