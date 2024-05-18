import React from "react";
import { Button, Heading, Text, Img } from ".";

const data = [
  {
    responsibilitie: "Responsibilities",
    community: "Community engagement to ensure that is supported and actively represented online",
    focusonsocial: "Focus on social media content development and publication",
    marketingand: "Marketing and strategy support",
    stayontopof: "Stay on top of trends on social media platforms, and suggest content ideas to the team",
    engagewith: "Engage with online communities",
  },
  {
    responsibilitie: "Who You Are",
    community: "You get energy from people and building the ideal work environment",
    focusonsocial: "You have a sense for beautiful spaces and office experiences",
    marketingand: "You are a confident office manager, ready for added responsibilities",
    stayontopof: "You&#39;re detail-oriented and creative",
    engagewith: "You&#39;re a growth marketer and know how to run campaigns",
  },
];
interface Props {
  className?: string;
  description?: string;
  description1?: string;
  responsibilitie?: string;
  community?: string;
  focusonsocial?: string;
  marketingand?: string;
  stayontopoftrends?: string;
  engagewithcommunities?: string;
  whoyouare?: string;
  yougetenergy?: string;
  youhavea?: string;
  youarea?: string;
  youredetail?: string;
  youreagrowth?: string;
  nicetohaves?: string;
  fluentin?: string;
  project?: string;
  copyediting?: string;
  aboutthisrole?: string;
  p5appliedoften?: string;
  applybefore?: string;
  july312021?: string;
  jobpostedon?: string;
  july12021?: string;
  jobtype?: string;
  fulltimeOne?: string;
  salary?: string;
  price?: string;
  categories?: string;
  marketing?: string;
  design?: string;
  requiredskills?: string;
  projectmanagement?: string;
  copywriting?: string;
  socialmediamarketing?: string;
  english?: string;
  copyediting1?: string;
}

export default function C15JobDescriptionsLandingpage({
  description = "Description",
  description1 = "Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.",
  responsibilitie = "Responsibilities",
  community = "Community engagement to ensure that is supported and actively represented online",
  focusonsocial = "Focus on social media content development and publication",
  marketingand = "Marketing and strategy support",
  stayontopoftrends = "Stay on top of trends on social media platforms, and suggest content ideas to the team",
  engagewithcommunities = "Engage with online communities",
  whoyouare = "Who You Are",
  yougetenergy = "You get energy from people and building the ideal work environment",
  youhavea = "You have a sense for beautiful spaces and office experiences",
  youarea = "You are a confident office manager, ready for added responsibilities",
  youredetail = "You&#39;re detail-oriented and creative",
  youreagrowth = "You&#39;re a growth marketer and know how to run campaigns",
  nicetohaves = "Nice-To-Haves",
  fluentin = "Fluent in English",
  project = "Project management skills",
  copyediting = "Copy editing skills",
  aboutthisrole = "About this role",
  p5appliedoften,
  applybefore = "Apply Before",
  july312021 = "July 31, 2021",
  jobpostedon = "Job Posted On",
  july12021 = "July 1, 2021",
  jobtype = "Job Type",
  fulltimeOne = "Full-Time",
  salary = "Salary",
  price = "$75k-$85k USD",
  categories = "Categories",
  marketing = "Marketing",
  design = "Design",
  requiredskills = "Required Skills",
  projectmanagement = "Project Management",
  copywriting = "Copywriting",
  socialmediamarketing = "Social Media Marketing",
  english = "English",
  copyediting1 = "Copy Editing",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-sm flex items-start justify-between gap-5 pl-2.5 md:flex-col md:p-5">
        <div className="flex w-[63%] flex-col gap-[39px] md:w-full">
          <div className="flex flex-col items-start gap-[13px]">
            <Heading size="7xl" as="h2">
              {description}
            </Heading>
            <Text as="p" className="w-full leading-[160%]">
              {description1}
            </Text>
          </div>
          <div className="flex flex-col gap-[38px]">
            {data.map((d, index) => (
              <div key={"listresponsibil" + index} className="flex flex-1 flex-col items-start gap-[13px]">
                <Heading size="7xl" as="h2">
                  {d.responsibilitie}
                </Heading>
                <div className="flex flex-col gap-2 self-stretch">
                  <div className="flex items-center gap-2 pb-1 pr-[55px] md:flex-col md:pr-5">
                    <Img
                      src="images/img_icon_teal_300.svg"
                      alt="image"
                      className="h-[20px] w-[20px] self-start md:w-full"
                    />
                    <Text as="p" className="self-end">
                      {d.community}
                    </Text>
                  </div>
                  <div className="flex items-center gap-2 self-start pb-[5px] sm:flex-col">
                    <Img
                      src="images/img_icon_teal_300.svg"
                      alt="image"
                      className="h-[20px] w-[20px] self-start sm:w-full"
                    />
                    <Text as="p" className="self-end">
                      {d.focusonsocial}
                    </Text>
                  </div>
                  <div className="flex items-center gap-2 self-start pb-1">
                    <Img src="images/img_icon_teal_300.svg" alt="image" className="h-[20px] w-[20px] self-start" />
                    <Text as="p" className="self-end">
                      {d.marketingand}
                    </Text>
                  </div>
                  <div className="flex items-start justify-center gap-2 pr-[42px] md:flex-col md:pr-5">
                    <Img src="images/img_icon_teal_300.svg" alt="image" className="h-[20px] w-[20px] md:w-full" />
                    <Text as="p" className="w-[97%] leading-[160%] md:w-full">
                      {d.stayontopof}
                    </Text>
                  </div>
                  <div className="flex items-center gap-2 self-start pb-1">
                    <Img src="images/img_icon_teal_300.svg" alt="image" className="h-[20px] w-[20px] self-start" />
                    <Text as="p" className="self-end">
                      {d.engagewith}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start gap-[15px]">
            <Heading size="7xl" as="h2">
              {nicetohaves}
            </Heading>
            <div className="flex flex-col items-center gap-2 self-stretch">
              <div className="flex items-center gap-2 self-start pb-1">
                <Img src="images/img_icon_teal_300.svg" alt="icon" className="h-[20px] w-[20px] self-start" />
                <Text as="p" className="self-end">
                  {fluentin}
                </Text>
              </div>
              <div className="flex items-center gap-2 self-start pb-1">
                <Img src="images/img_icon_teal_300.svg" alt="icon" className="h-[20px] w-[20px] self-start" />
                <Text as="p" className="self-end">
                  {project}
                </Text>
              </div>
              <div className="flex items-center gap-2 self-start pb-1">
                <Img src="images/img_icon_teal_300.svg" alt="icon" className="h-[20px] w-[20px] self-start" />
                <Text as="p" className="self-end">
                  {copyediting}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[32%] flex-col items-start gap-[39px] md:w-full">
          <div className="flex flex-col items-start gap-[22px] self-stretch">
            <Heading size="7xl" as="h2">
              {aboutthisrole}
            </Heading>
            <div className="flex flex-col items-start gap-[13px] self-stretch bg-gray-50 px-4 pb-4 pt-[19px]">
              <Heading size="2xl" as="h6" className="text-center">
                <span className="text-blue_gray-900">5 applied</span>
                <span className="text-blue_gray-900">&nbsp;</span>
                <span className="font-normal text-blue_gray-400">of 10 capacity</span>
              </Heading>
              <Img src="images/img_progress_bar.svg" alt="progressbar" className="h-[8px] w-full" />
            </div>
            <div className="flex flex-wrap justify-between gap-5 self-stretch pb-1">
              <Text as="p">{applybefore}</Text>
              <Heading size="2xl" as="h6">
                {july312021}
              </Heading>
            </div>
            <div className="flex flex-wrap justify-between gap-5 self-stretch pb-1">
              <Text as="p" className="self-start">
                {jobpostedon}
              </Text>
              <Heading size="2xl" as="h6" className="self-end">
                {july12021}
              </Heading>
            </div>
            <div className="flex flex-wrap justify-between gap-5 self-stretch pb-1">
              <Text as="p" className="self-end">
                {jobtype}
              </Text>
              <Heading size="2xl" as="h6" className="self-start">
                {fulltimeOne}
              </Heading>
            </div>
            <div className="flex flex-wrap justify-between gap-5 self-stretch pb-1">
              <Text as="p" className="self-end">
                {salary}
              </Text>
              <Heading size="2xl" as="h6" className="self-start !text-gray-900">
                {price}
              </Heading>
            </div>
          </div>
          <div className="h-px w-full self-stretch bg-gray-300" />
          <div className="flex flex-col items-start gap-[21px]">
            <Heading size="7xl" as="h2">
              {categories}
            </Heading>
            <div className="flex gap-2">
              <Button color="yellow_900_19" variant="fill" className="min-w-[92px] rounded-[17px] font-semibold">
                {marketing}
              </Button>
              <Button color="teal_300_19" variant="fill" className="min-w-[68px] rounded-[17px] font-semibold">
                {design}
              </Button>
            </div>
          </div>
          <div className="h-px w-full self-stretch bg-gray-300" />
          <div className="flex flex-col items-start gap-2.5">
            <Heading size="7xl" as="h2">
              {requiredskills}
            </Heading>
            <div className="flex gap-2.5">
              <Button color="gray_50" variant="fill" shape="square" className="min-w-[189px]">
                {projectmanagement}
              </Button>
              <Button color="gray_50" variant="fill" shape="square" className="min-w-[117px]">
                {copywriting}
              </Button>
            </div>
            <div className="flex gap-2.5">
              <Button color="gray_50" variant="fill" shape="square" className="min-w-[205px]">
                {socialmediamarketing}
              </Button>
              <Button color="gray_50" variant="fill" shape="square" className="min-w-[79px]">
                {english}
              </Button>
            </div>
            <Button color="gray_50" variant="fill" shape="square" className="min-w-[120px]">
              {copyediting1}
            </Button>
          </div>
        </div>
      </div>
      <div className="container-sm h-px bg-gray-300 md:p-5" />
    </div>
  );
}
