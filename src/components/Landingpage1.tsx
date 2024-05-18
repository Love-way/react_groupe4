import React from "react";
import { Img, Text, Heading } from ".";

const data = [
  {
    designone: "images/img_icon.svg",
    designtwo: "Design",
    jobs: "235 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
  {
    designone: "images/img_icon_indigo_a700.svg",
    designtwo: "Sales",
    jobs: "756 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
  {
    designone: "images/img_icon_white_a700.svg",
    designtwo: "Marketing",
    jobs: "140 jobs available",
    jobs1: "images/img_arrow_left_white_a700.svg",
  },
  {
    designone: "images/img_icon_indigo_a700_48x48.svg",
    designtwo: "Finance",
    jobs: "325 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
  {
    designone: "images/img_icon_48x48.svg",
    designtwo: "Technology",
    jobs: "436 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
  {
    designone: "images/img_icon_1.svg",
    designtwo: "Engineering",
    jobs: "542 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
  {
    designone: "images/img_icon_2.svg",
    designtwo: "Business",
    jobs: "211 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
  {
    designone: "images/img_icon_blue_gray_900.svg",
    designtwo: "Human Resource",
    jobs: "346 jobs available",
    jobs1: "images/img_arrow_left_blue_gray_900.svg",
  },
];
interface Props {
  className?: string;
  explorebycategory?: string;
  showalljobs?: string;
  designtwo?: string;
  jobsavailable?: string;
  design?: string;
  jobsavailable1?: string;
  marketing?: string;
  jobsavailable2?: string;
  design1?: string;
  jobsavailable3?: string;
  design2?: string;
  jobsavailable4?: string;
  design3?: string;
  jobsavailable5?: string;
  design4?: string;
  jobsavailable6?: string;
  design5?: string;
  jobsavailable7?: string;
}

export default function LandingPageLandingpage1({
  explorebycategory,
  showalljobs = "Show all jobs",
  designtwo = "Design",
  jobsavailable = "235 jobs available",
  design = "Sales",
  jobsavailable1 = "756 jobs available",
  marketing = "Marketing",
  jobsavailable2 = "140 jobs available",
  design1 = "Finance",
  jobsavailable3 = "325 jobs available",
  design2 = "Technology",
  jobsavailable4 = "436 jobs available",
  design3 = "Engineering",
  jobsavailable5 = "542 jobs available",
  design4 = "Business",
  jobsavailable6 = "211 jobs available",
  design5 = "Human Resource",
  jobsavailable7 = "346 jobs available",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-sm flex items-center justify-between gap-5 pl-2.5 md:flex-col md:p-5">
        <Heading size="8xl" as="h1">
          <span className="text-blue_gray-900">Explore by&nbsp;</span>
          <span className="text-blue-500">category</span>
        </Heading>
        <div className="mb-[7px] flex items-start gap-4 self-end">
          <Heading size="2xl" as="h6" className="text-center !text-indigo-A700">
            {showalljobs}
          </Heading>
          <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
        </div>
      </div>
      <div className="container-sm grid grid-cols-4 justify-center gap-8 pl-2.5 md:grid-cols-2 md:p-5 sm:grid-cols-1">
        {data.map((d, index) => (
          <div
            key={"content" + index}
            className="flex w-full flex-col items-start gap-8 border border-solid border-gray-300 bg-white-A700 p-8 sm:p-5"
          >
            <Img src={d.designone} alt="design" className="h-[48px] w-[48px]" />
            <div className="flex flex-col items-start gap-[9px]">
              <Heading as="h4">{d.designtwo}</Heading>
              <div className="flex items-center gap-4">
                <Text size="2xl" as="p" className="self-start !text-blue_gray-400">
                  {d.jobs}
                </Text>
                <Img src={d.jobs1} alt="235_jobs" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
