import React from "react";
import { Button, Text, Heading, Img } from ".";

interface Props {
  className?: string;
  featuredjobs?: string;
  showalljobsOne?: string;
  fullTime?: string;
  emailmarketingtext?: string;
  revoluttext?: string;
  madridspaintext?: string;
  revolutistext?: string;
  marketingbutton?: string;
  designbutton?: string;
  fulltime1?: string;
  emailmarketingtext1?: string;
  revoluttext1?: string;
  madridspaintext1?: string;
  revolutistext1?: string;
  marketingbutton1?: string;
  designbutton1?: string;
  fulltime2?: string;
  emailmarketingtext2?: string;
  revoluttext2?: string;
  madridspaintext2?: string;
  revolutistext2?: string;
  marketingbutton2?: string;
  fulltime3?: string;
  emailmarketing?: string;
  revolut?: string;
  madridspain?: string;
  revolutis?: string;
  design?: string;
  fulltime4?: string;
  emailmarketingtext3?: string;
  revoluttext3?: string;
  madridspaintext3?: string;
  revolutistext3?: string;
  marketingbutton3?: string;
  designbutton2?: string;
  fulltime5?: string;
  emailmarketingtext4?: string;
  revoluttext4?: string;
  madridspaintext4?: string;
  revolutistext4?: string;
  marketingbutton4?: string;
  designbutton3?: string;
  fulltime6?: string;
  emailmarketingtext5?: string;
  revoluttext5?: string;
  madridspaintext5?: string;
  revolutistext5?: string;
  marketingbutton5?: string;
  fulltime7?: string;
  emailmarketingtext6?: string;
  revoluttext6?: string;
  madridspaintext6?: string;
  revolutistext6?: string;
  technologybutton?: string;
}

export default function LandingPageLandingpage3({
  featuredjobs,
  showalljobsOne = "Show all jobs",
  fullTime = "Full Time",
  emailmarketingtext = "Email Marketing",
  revoluttext = "Revolut",
  madridspaintext = "Madrid, Spain",
  revolutistext = "Revolut is looking for Email Marketing to help team ma ...",
  marketingbutton = "Marketing",
  designbutton = "Design",
  fulltime1 = "Full Time",
  emailmarketingtext1 = "Brand Designer",
  revoluttext1 = "Dropbox",
  madridspaintext1 = "San Fransisco, US",
  revolutistext1 = "Dropbox is looking for Brand Designer to help the team t ...",
  marketingbutton1 = "Design",
  designbutton1 = "Business",
  fulltime2 = "Full Time",
  emailmarketingtext2 = "Email Marketing",
  revoluttext2 = "Pitch",
  madridspaintext2 = "Berlin, Germany",
  revolutistext2 = "Pitch is looking for Customer Manager to join marketing t ...",
  marketingbutton2 = "Marketing",
  fulltime3 = "Full Time",
  emailmarketing = "Visual Designer",
  revolut = "Blinklist",
  madridspain = "Granada, Spain",
  revolutis = "Blinkist is looking for Visual Designer to help team desi ...",
  design = "Design",
  fulltime4 = "Full Time",
  emailmarketingtext3 = "Product Designer",
  revoluttext3 = "ClassPass",
  madridspaintext3 = "Manchester, UK",
  revolutistext3 = "ClassPass is looking for Product Designer to help us...",
  marketingbutton3 = "Marketing",
  designbutton2 = "Design",
  fulltime5 = "Full Time",
  emailmarketingtext4 = "Lead Designer",
  revoluttext4 = "Canva",
  madridspaintext4 = "Ontario, Canada",
  revolutistext4 = "Canva is looking for Lead Engineer to help develop n ...",
  marketingbutton4 = "Design",
  designbutton3 = "Business",
  fulltime6 = "Full Time",
  emailmarketingtext5 = "Brand Strategist",
  revoluttext5 = "GoDaddy",
  madridspaintext5 = "Marseille, France",
  revolutistext5 = "GoDaddy is looking for Brand Strategist to join the team...",
  marketingbutton5 = "Marketing",
  fulltime7 = "Full Time",
  emailmarketingtext6 = "Data Analyst",
  revoluttext6 = "Twitter",
  madridspaintext6 = "San Diego, US",
  revolutistext6 = "Twitter is looking for Data Analyst to help team desi ...",
  technologybutton = "Technology",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-sm flex items-center justify-between gap-5 pl-2.5 md:p-5 sm:flex-col">
        <Heading size="8xl" as="h1">
          <span className="text-blue_gray-900">Featured&nbsp;</span>
          <span className="text-blue-500">jobs</span>
        </Heading>
        <div className="mb-[7px] flex items-start gap-4 self-end">
          <Heading size="2xl" as="h6" className="text-center !text-indigo-A700">
            {showalljobsOne}
          </Heading>
          <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
        </div>
      </div>
      <div className="container-sm grid grid-cols-4 justify-center gap-8 pl-2.5 md:grid-cols-2 md:p-5 sm:grid-cols-1">
        <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5">
            <Img
              src="images/img_bvboaeet_400x400.png"
              alt="email_marketing"
              className="h-[48px] w-[48px] rounded-[50%]"
            />
            <Button shape="square" className="min-w-[91px]">
              {fullTime}
            </Button>
          </div>
          <div className="flex w-[81%] flex-col items-start gap-[7px] pt-1 md:w-full">
            <Heading size="3xl" as="h6">
              {emailmarketingtext}
            </Heading>
            <div className="flex items-end gap-2 self-stretch pb-[5px]">
              <Text as="p">{revoluttext}</Text>
              <div className="mb-1.5 h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text as="p">{madridspaintext}</Text>
            </div>
          </div>
          <Text as="p" className="!font-inter leading-[160%] !text-blue_gray-400">
            {revolutistext}
          </Text>
          <div className="flex gap-2">
            <Button
              color="yellow_900_19"
              size="sm"
              variant="fill"
              className="min-w-[104px] rounded-[15px] font-semibold"
            >
              {marketingbutton}
            </Button>
            <Button color="teal_300_19" size="sm" variant="fill" className="min-w-[80px] rounded-[15px] font-semibold">
              {designbutton}
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5">
            <Img src="images/img_close.svg" alt="close" className="h-[48px] w-[48px]" />
            <Button shape="square" className="min-w-[91px]">
              {fulltime1}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[7px] pt-1">
            <Heading size="3xl" as="h6">
              {emailmarketingtext1}
            </Heading>
            <div className="flex items-center gap-2 self-stretch pb-[5px]">
              <Text as="p">{revoluttext1}</Text>
              <div className="mb-1.5 h-[4px] w-[4px] self-end rounded-sm bg-blue_gray-700_4c" />
              <Text as="p">{madridspaintext1}</Text>
            </div>
          </div>
          <Text as="p" className="!font-inter leading-[160%] !text-blue_gray-400">
            {revolutistext1}
          </Text>
          <div className="flex gap-2">
            <Button color="teal_300_19" size="sm" variant="fill" className="min-w-[80px] rounded-[15px] font-semibold">
              {marketingbutton1}
            </Button>
            <Button
              color="indigo_A700_19"
              size="sm"
              variant="fill"
              className="min-w-[95px] rounded-[15px] font-semibold"
            >
              {designbutton1}
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img src="images/img_fisx9qyy_400x400.png" alt="fisx9qyy" className="h-[48px] w-[48px] rounded-[50%]" />
            <Button shape="square" className="min-w-[91px]">
              {fulltime2}
            </Button>
          </div>
          <div className="flex w-[81%] flex-col items-start gap-[7px] pt-1 md:w-full">
            <Heading size="3xl" as="h6">
              {emailmarketingtext2}
            </Heading>
            <div className="flex items-end gap-2 self-stretch pb-1">
              <Text as="p">{revoluttext2}</Text>
              <div className="mb-1.5 h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text as="p">{madridspaintext2}</Text>
            </div>
          </div>
          <Text as="p" className="w-full !font-inter leading-[160%] !text-blue_gray-400">
            {revolutistext2}
          </Text>
          <Button color="yellow_900_19" size="sm" variant="fill" className="min-w-[104px] rounded-[15px] font-semibold">
            {marketingbutton2}
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img
              src="images/img_quvcta52_400x400.png"
              alt="quvctafiftytwo"
              className="h-[48px] w-[48px] rounded-[50%]"
            />
            <Button shape="square" className="min-w-[91px]">
              {fulltime3}
            </Button>
          </div>
          <div className="flex w-[88%] flex-col items-start gap-[7px] pt-1 md:w-full">
            <Heading size="3xl" as="h6">
              {emailmarketing}
            </Heading>
            <div className="flex items-end gap-2 self-stretch pb-[5px]">
              <Text as="p">{revolut}</Text>
              <div className="mb-1.5 h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text as="p">{madridspain}</Text>
            </div>
          </div>
          <Text as="p" className="w-full !font-inter leading-[160%] !text-blue_gray-400">
            {revolutis}
          </Text>
          <Button color="teal_300_19" size="sm" variant="fill" className="min-w-[80px] rounded-[15px] font-semibold">
            {design}
          </Button>
        </div>
        <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5">
            <Img src="images/img_s93hu9p3_400x400.png" alt="s93hu9pthree" className="h-[48px] w-[48px] rounded-[50%]" />
            <Button shape="square" className="min-w-[91px]">
              {fulltime4}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[7px] pt-1">
            <Heading size="3xl" as="h6">
              {emailmarketingtext3}
            </Heading>
            <div className="flex items-end gap-2 self-stretch pb-[5px]">
              <Text as="p">{revoluttext3}</Text>
              <div className="mb-[5px] h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text as="p">{madridspaintext3}</Text>
            </div>
          </div>
          <Text as="p" className="!font-inter leading-[160%] !text-blue_gray-400">
            {revolutistext3}
          </Text>
          <div className="flex gap-2">
            <Button
              color="yellow_900_19"
              size="sm"
              variant="fill"
              className="min-w-[104px] rounded-[15px] font-semibold"
            >
              {marketingbutton3}
            </Button>
            <Button color="teal_300_19" size="sm" variant="fill" className="min-w-[80px] rounded-[15px] font-semibold">
              {designbutton2}
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5">
            <Img src="images/img_v_6ghzad_400x400.png" alt="v6ghzad" className="h-[48px] w-[48px] object-cover" />
            <Button shape="square" className="min-w-[91px]">
              {fulltime5}
            </Button>
          </div>
          <div className="flex w-[86%] flex-col items-start gap-[7px] pt-1 md:w-full">
            <Heading size="3xl" as="h6">
              {emailmarketingtext4}
            </Heading>
            <div className="flex items-start gap-2 self-stretch pb-[5px]">
              <Text as="p">{revoluttext4}</Text>
              <div className="mb-[5px] h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text as="p">{madridspaintext4}</Text>
            </div>
          </div>
          <Text as="p" className="!font-inter leading-[160%] !text-blue_gray-400">
            {revolutistext4}
          </Text>
          <div className="flex gap-2">
            <Button color="teal_300_19" size="sm" variant="fill" className="min-w-[80px] rounded-[15px] font-semibold">
              {marketingbutton4}
            </Button>
            <Button
              color="indigo_A700_19"
              size="sm"
              variant="fill"
              className="min-w-[95px] rounded-[15px] font-semibold"
            >
              {designbutton3}
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img
              src="images/img_godaddy_logo_0_1.png"
              alt="godaddylogozero"
              className="h-[48px] w-[48px] rounded-[50%]"
            />
            <Button shape="square" className="min-w-[91px]">
              {fulltime6}
            </Button>
          </div>
          <div className="flex flex-col items-start gap-[7px] self-stretch pt-1">
            <Heading size="3xl" as="h6">
              {emailmarketingtext5}
            </Heading>
            <div className="flex items-start gap-2 self-stretch pb-1">
              <Text as="p">{revoluttext5}</Text>
              <div className="mb-1.5 h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text as="p">{madridspaintext5}</Text>
            </div>
          </div>
          <Text as="p" className="w-full !font-inter leading-[160%] !text-blue_gray-400">
            {revolutistext5}
          </Text>
          <Button color="yellow_900_19" size="sm" variant="fill" className="min-w-[104px] rounded-[15px] font-semibold">
            {marketingbutton5}
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img src="images/img_btnfm47p_400x400.png" alt="btnfm47p" className="h-[48px] w-[48px] rounded-[50%]" />
            <Button shape="square" className="min-w-[91px]">
              {fulltime7}
            </Button>
          </div>
          <div className="flex w-[80%] flex-col items-start gap-[7px] pt-1 md:w-full">
            <Heading size="3xl" as="h6">
              {emailmarketingtext6}
            </Heading>
            <div className="flex items-end gap-2 self-stretch pb-1">
              <Text as="p">{revoluttext6}</Text>
              <div className="mb-1.5 h-[4px] w-[4px] rounded-sm bg-blue_gray-700_4c" />
              <Text as="p">{madridspaintext6}</Text>
            </div>
          </div>
          <Text as="p" className="w-full !font-inter leading-[160%] !text-blue_gray-400">
            {revolutistext6}
          </Text>
          <Button
            color="deep_orange_400_19"
            size="xl"
            variant="fill"
            shape="round"
            className="min-w-[114px] font-semibold"
          >
            {technologybutton}
          </Button>
        </div>
      </div>
    </div>
  );
}
