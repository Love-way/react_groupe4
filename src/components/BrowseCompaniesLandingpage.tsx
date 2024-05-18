import React from "react";
import { Button, Text, Heading, Img } from ".";

interface Props {
  className?: string;
  recommendedcompaniestext?: string;
  basedonprofiletext?: string;
  nomadonebutton?: string;
  nomadonetitle?: string;
  nomadonedescription?: string;
  nomadonebusinessbutton?: string;
  discordbutton?: string;
  discordtitle?: string;
  discorddescription?: string;
  discordbusinessbutton?: string;
  mazebutton?: string;
  mazetitle?: string;
  mazedescription?: string;
  mazebusinessbutton?: string;
  udacitybutton?: string;
  udacitytitle?: string;
  udacitydescription?: string;
  udacitybusinessbutton?: string;
  webflowbutton?: string;
  webflowtitle?: string;
  webflowdescription?: string;
  webflowbusinessbutton?: string;
  technology?: string;
  foundationbutton?: string;
  foundationtitle?: string;
  foundationdescription?: string;
  foundationbusinessbutton?: string;
  crypto?: string;
}

export default function C13BrowseCompaniesLandingpage({
  recommendedcompaniestext = "Recommended Companies",
  basedonprofiletext = "Based on your profile, company preferences, and recent activity",
  nomadonebutton = "3 Jobs",
  nomadonetitle = "Nomad",
  nomadonedescription = "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
  nomadonebusinessbutton = "Business Service",
  discordbutton = "3 Jobs",
  discordtitle = "Discord",
  discorddescription = "We&#39;d love to work with someone like you. We care about creating a delightful experience.",
  discordbusinessbutton = "Business Service",
  mazebutton = "3 Jobs",
  mazetitle = "Maze",
  mazedescription = "We&#39;re a passionate bunch working from all over the world to build the future of rapid testing together.",
  mazebusinessbutton = "Business Service",
  udacitybutton = "3 Jobs",
  udacitytitle = "Udacity",
  udacitydescription = "Udacity is a new type of online university that teaches the actual programming skills.",
  udacitybusinessbutton = "Business Service",
  webflowbutton = "3 Jobs",
  webflowtitle = "Webflow",
  webflowdescription = "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
  webflowbusinessbutton = "Business Service",
  technology = "Technology",
  foundationbutton = "3 Jobs",
  foundationtitle = "Foundation",
  foundationdescription = "Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.",
  foundationbusinessbutton = "Business Service",
  crypto = "Crypto",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-sm flex flex-col items-center pl-2.5 pr-[685px] md:p-5 md:pr-5">
        <div className="flex flex-col items-start gap-[9px]">
          <Heading size="7xl" as="h2">
            {recommendedcompaniestext}
          </Heading>
          <Text as="p" className="!text-blue_gray-400">
            {basedonprofiletext}
          </Text>
        </div>
      </div>
      <div className="container-sm grid grid-cols-3 justify-center gap-8 pl-2.5 md:grid-cols-2 md:p-5 sm:grid-cols-1">
        <div className="flex w-full flex-col items-start gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img src="images/img_television.svg" alt="nomad" className="h-[88px] w-[88px]" />
            <Button color="gray_50" variant="fill" shape="square" className="min-w-[76px]">
              {nomadonebutton}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[15px] self-stretch">
            <Heading as="h4">{nomadonetitle}</Heading>
            <Text size="2xl" as="p" className="w-full leading-[160%]">
              {nomadonedescription}
            </Text>
          </div>
          <Button color="yellow_700" shape="round" className="min-w-[140px] !rounded-[17px] font-semibold">
            {nomadonebusinessbutton}
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img src="images/img_dbymbmgq_400x400.png" alt="dbymbmgq" className="h-[88px] w-[88px] rounded-[50%]" />
            <Button color="gray_50" variant="fill" shape="square" className="min-w-[76px]">
              {discordbutton}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[15px] self-stretch">
            <Heading as="h4">{discordtitle}</Heading>
            <Text size="2xl" as="p" className="w-full leading-[160%]">
              {discorddescription}
            </Text>
          </div>
          <Button color="yellow_700" shape="round" className="min-w-[140px] !rounded-[17px] font-semibold">
            {discordbusinessbutton}
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img
              src="images/img_7tuadqi_400x400_88x88.png"
              alt="7tuadqi400x400"
              className="h-[88px] w-[88px] rounded-[50%]"
            />
            <Button color="gray_50" variant="fill" shape="square" className="min-w-[76px]">
              {mazebutton}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[15px] self-stretch">
            <Heading as="h4">{mazetitle}</Heading>
            <Text size="2xl" as="p" className="w-full leading-[160%]">
              {mazedescription}
            </Text>
          </div>
          <Button color="yellow_700" shape="round" className="min-w-[140px] !rounded-[17px] font-semibold">
            {mazebusinessbutton}
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img
              src="images/img_1m3hz0d_400x400_88x88.png"
              alt="1m3hz0d400x400"
              className="h-[88px] w-[88px] rounded-[50%]"
            />
            <Button color="gray_50" variant="fill" shape="square" className="min-w-[76px]">
              {udacitybutton}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-3.5 self-stretch">
            <Heading as="h4">{udacitytitle}</Heading>
            <Text size="2xl" as="p" className="w-full leading-[160%]">
              {udacitydescription}
            </Text>
          </div>
          <Button color="yellow_700" shape="round" className="min-w-[140px] !rounded-[17px] font-semibold">
            {udacitybusinessbutton}
          </Button>
        </div>
        <div className="flex w-full flex-col gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5">
            <div className="w-[27%]">
              <Img
                src="images/img_tg7mrqk2_400x400_79x79.png"
                alt="tg7mrqktwo"
                className="h-[79px] w-[79px] object-cover"
              />
            </div>
            <Button color="gray_50" variant="fill" shape="square" className="min-w-[76px]">
              {webflowbutton}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[15px]">
            <Heading as="h4">{webflowtitle}</Heading>
            <Text size="2xl" as="p" className="w-full leading-[160%]">
              {webflowdescription}
            </Text>
          </div>
          <div className="flex gap-4">
            <Button color="yellow_700" shape="round" className="min-w-[140px] !rounded-[17px] font-semibold">
              {webflowbusinessbutton}
            </Button>
            <Button
              color="deep_orange_400_19"
              variant="fill"
              shape="round"
              className="min-w-[102px] !rounded-[17px] font-semibold"
            >
              {technology}
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5">
            <div className="w-[27%]">
              <Img
                src="images/img_2ali5jb7_400x400.png"
                alt="2ali5jbseven"
                className="h-[80px] w-[80px] object-cover"
              />
            </div>
            <Button color="gray_50" variant="fill" shape="square" className="min-w-[76px]">
              {foundationbutton}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[15px]">
            <Heading as="h4">{foundationtitle}</Heading>
            <Text size="2xl" as="p" className="w-full leading-[160%]">
              {foundationdescription}
            </Text>
          </div>
          <div className="flex gap-4">
            <Button color="yellow_700" shape="round" className="min-w-[140px] !rounded-[17px] font-semibold">
              {foundationbusinessbutton}
            </Button>
            <Button color="indigo_A700_19" variant="fill" className="min-w-[69px] rounded-[17px] font-semibold">
              {crypto}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
