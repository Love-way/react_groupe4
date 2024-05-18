import React from "react";
import { Img, Heading, Button, Text, CheckBox } from ".";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

interface Props {
  className?: string;
  _typeof?: string;
  categories?: string;
  joblevel?: string;
  salaryrange?: string;
  alljobs?: string;
  showingseventyt?: string;
  sortby?: string;
  mostrelevant?: string;
  socialmedia?: string;
  nomad?: string;
  parisfrance?: string;
  fulltime?: string;
  marketing?: string;
  design?: string;
  apply?: string;
  p5appliedoften?: string;
  socialmedia1?: string;
  nomad1?: string;
  parisfrance1?: string;
  fulltime1?: string;
  marketing1?: string;
  design1?: string;
  apply1?: string;
  p5appliedoften1?: string;
  socialmedia2?: string;
  nomad2?: string;
  parisfrance2?: string;
  fulltime2?: string;
  marketing2?: string;
  design2?: string;
  apply2?: string;
  p5appliedoften2?: string;
  socialmedia3?: string;
  nomad3?: string;
  parisfrance3?: string;
  fulltime3?: string;
  marketing3?: string;
  design3?: string;
  apply3?: string;
  p5appliedoften3?: string;
  socialmedia4?: string;
  nomad4?: string;
  parisfrance4?: string;
  fulltime4?: string;
  marketing4?: string;
  design4?: string;
  apply4?: string;
  p5appliedoften4?: string;
  socialmedia5?: string;
  nomad5?: string;
  parisfrance5?: string;
  fulltime5?: string;
  marketing5?: string;
  design5?: string;
  apply5?: string;
  p5appliedoften5?: string;
  socialmedia6?: string;
  nomad6?: string;
  parisfrance6?: string;
  fulltime6?: string;
  marketing6?: string;
  design6?: string;
  apply6?: string;
  p5appliedoften6?: string;
  one?: string;
  one1?: string;
  oneOne?: string;
  oneTwo?: string;
  oneThree?: string;
  oneFour?: string;
  oneFive?: string;
}

export default function C12FindJobsLandingpage({
  _typeof = "Type of Employment",
  categories = "Categories",
  joblevel = "Job Level",
  salaryrange = "Salary Range",
  alljobs = "All Jobs",
  showingseventyt = "Showing 73 results",
  sortby = "Sort by:",
  mostrelevant = "Most relevant",
  socialmedia = "Social Media Assistant",
  nomad = "Nomad",
  parisfrance = "Paris, France",
  fulltime = "Full-Time",
  marketing = "Marketing",
  design = "Design",
  apply = "Apply",
  p5appliedoften,
  socialmedia1 = "Brand Designer",
  nomad1 = "Dropbox",
  parisfrance1 = "San Fransisco, USA",
  fulltime1 = "Full-Time",
  marketing1 = "Marketing",
  design1 = "Design",
  apply1 = "Apply",
  p5appliedoften1,
  socialmedia2 = "Interactive Developer",
  nomad2 = "Terraform",
  parisfrance2 = "Hamburg, Germany",
  fulltime2 = "Full-Time",
  marketing2 = "Marketing",
  design2 = "Design",
  apply2 = "Apply",
  p5appliedoften2,
  socialmedia3 = "Email Marketing",
  nomad3 = "Revolut",
  parisfrance3 = "Madrid, Spain",
  fulltime3 = "Full-Time",
  marketing3 = "Marketing",
  design3 = "Design",
  apply3 = "Apply",
  p5appliedoften3,
  socialmedia4 = "Lead Engineer",
  nomad4 = "Canva",
  parisfrance4 = "Ankara, Turkey",
  fulltime4 = "Full-Time",
  marketing4 = "Marketing",
  design4 = "Design",
  apply4 = "Apply",
  p5appliedoften4,
  socialmedia5 = "Product Designer",
  nomad5 = "ClassPass",
  parisfrance5 = "Berlin, Germany",
  fulltime5 = "Full-Time",
  marketing5 = "Marketing",
  design5 = "Design",
  apply5 = "Apply",
  p5appliedoften5,
  socialmedia6 = "Customer Manager",
  nomad6 = "Pitch",
  parisfrance6 = "Berlin, Germany",
  fulltime6 = "Full-Time",
  marketing6 = "Marketing",
  design6 = "Design",
  apply6 = "Apply",
  p5appliedoften6,
  one = "1",
  one1 = "2",
  oneOne = "3",
  oneTwo = "4",
  oneThree = "5",
  oneFour = "...",
  oneFive = "33",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-sm flex items-start justify-center gap-[39px] pl-2.5 md:flex-col md:p-5">
        <Accordion preExpanded={[0]} className="flex w-[20%] flex-col gap-10 md:w-full">
          {[...Array(4)].map((_, i) => (
            <AccordionItem uuid={i} key={`filter${i}`}>
              <div className="flex flex-1 flex-col gap-5">
                <AccordionItemHeading className="w-full">
                  <AccordionItemButton>
                    <AccordionItemState>
                      {(props) => (
                        <>
                          <div className="flex items-center justify-between gap-5">
                            <Heading size="2xl" as="h6" className="self-start !font-bold">
                              {_typeof}
                            </Heading>
                            <Img src="images/img_arrow_up.svg" alt="arrowup" className="h-[20px] w-[20px]" />
                          </div>
                        </>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex w-[66%] flex-col gap-5 md:w-full">
                    <CheckBox
                      name="fulltimeThree"
                      label="Full-time (3)"
                      id="fulltimeThree"
                      className="gap-4 py-1 text-left text-base text-blue_gray-700"
                    />
                    <CheckBox
                      name="parttimeFive"
                      label="Part-Time (5)"
                      id="parttimeFive"
                      className="gap-4 px-px py-1 text-left text-base text-blue_gray-700"
                    />
                    <CheckBox
                      name="remoteTwo"
                      label="Remote (2)"
                      id="remoteTwo"
                      className="gap-4 py-1 text-left text-base text-blue_gray-700"
                    />
                    <CheckBox
                      name="internshipTwent"
                      label="Internship (24)"
                      id="internshipTwent"
                      className="gap-4 py-1 text-left text-base text-blue_gray-700"
                    />
                    <CheckBox
                      name="contractThree"
                      label="Contract (3)"
                      id="contractThree"
                      className="gap-4 px-px py-1 text-left text-base text-blue_gray-700"
                    />
                  </div>
                </AccordionItemPanel>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-1 flex-col items-center gap-8 md:self-stretch">
          <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
            <div className="flex flex-col items-start gap-[7px]">
              <Heading size="7xl" as="h2">
                {alljobs}
              </Heading>
              <Text as="p" className="!text-blue_gray-400">
                {showingseventyt}
              </Text>
            </div>
            <div className="flex items-center gap-[21px]">
              <div className="flex items-center gap-[22px]">
                <div className="flex items-start gap-3">
                  <Text as="p" className="text-right !text-blue_gray-400">
                    {sortby}
                  </Text>
                  <div className="flex items-center gap-2 pb-[5px]">
                    <Text as="p" className="self-start !font-medium !text-blue_gray-900">
                      {mostrelevant}
                    </Text>
                    <Img
                      src="images/img_arrow_down_indigo_a700.svg"
                      alt="arrowdown"
                      className="h-[16px] w-[16px] self-end"
                    />
                  </div>
                </div>
                <div className="h-full w-px bg-gray-900_19" />
              </div>
              <div className="flex items-center gap-6 pl-2">
                <Img src="images/img_icon_blue_gray_700.svg" alt="icon" className="h-[24px] w-[24px]" />
                <Button color="indigo_A700_0f" size="2xl" variant="fill" className="w-[40px] rounded">
                  <Img src="images/img_user_indigo_a700.svg" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 self-stretch">
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 px-6 pb-6 pt-[23px] sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img src="images/img_television.svg" alt="image" className="h-[64px] w-[64px]" />
                <div className="flex flex-1 flex-col items-start gap-[9px]">
                  <Heading size="4xl" as="h5">
                    {socialmedia}
                  </Heading>
                  <div className="flex w-[66%] items-end gap-2 pb-[5px] md:w-full">
                    <Text as="p" className="!text-blue_gray-400">
                      {nomad}
                    </Text>
                    <div className="mb-[5px] h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text as="p" className="!text-blue_gray-400">
                      {parisfrance}
                    </Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button color="teal_300_19" variant="fill" className="w-full flex-1 rounded-[17px] font-semibold">
                      {fulltime}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button color="yellow_700" shape="round" className="w-full flex-1 !rounded-[17px] font-semibold">
                      {marketing}
                    </Button>
                    <Button shape="round" className="min-w-[68px] !rounded-[17px] font-semibold">
                      {design}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button size="5xl" variant="fill" shape="square" className="w-full font-bold sm:px-5">
                  {apply}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar.svg" alt="image" className="h-[6px]" />
                  <Text size="lg" as="p" className="text-center !text-black-900">
                    <span className="font-semibold text-blue_gray-900">5 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 10 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-6 sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img src="images/img_close.svg" alt="close" className="h-[64px] w-[64px]" />
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Heading size="4xl" as="h5">
                    {socialmedia1}
                  </Heading>
                  <div className="flex w-[87%] items-center gap-2 pb-[5px] md:w-full">
                    <Text as="p" className="!text-blue_gray-400">
                      {nomad1}
                    </Text>
                    <div className="mb-1.5 h-[4px] w-[4px] self-end rounded-sm bg-blue_gray-400" />
                    <Text as="p" className="!text-blue_gray-400">
                      {parisfrance1}
                    </Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button color="teal_300_19" variant="fill" className="w-full flex-1 rounded-[17px] font-semibold">
                      {fulltime1}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button color="yellow_700" shape="round" className="w-full flex-1 !rounded-[17px] font-semibold">
                      {marketing1}
                    </Button>
                    <Button shape="round" className="min-w-[68px] !rounded-[17px] font-semibold">
                      {design1}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button size="5xl" variant="fill" shape="square" className="w-full font-bold sm:px-5">
                  {apply1}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar_gray_300.svg" alt="progressbar" className="h-[6px]" />
                  <Text size="lg" as="p" className="text-center !text-black-900">
                    <span className="font-semibold text-blue_gray-900">2 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 10 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 py-6 pl-6 pr-[23px] sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[64px] w-[64px]" />
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Heading size="4xl" as="h5">
                    {socialmedia2}
                  </Heading>
                  <div className="flex items-end gap-2 self-stretch pb-[5px]">
                    <Text as="p" className="!text-blue_gray-400">
                      {nomad2}
                    </Text>
                    <div className="mb-1.5 h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text as="p" className="!text-blue_gray-400">
                      {parisfrance2}
                    </Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button color="teal_300_19" variant="fill" className="w-full flex-1 rounded-[17px] font-semibold">
                      {fulltime2}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button color="yellow_700" shape="round" className="w-full flex-1 !rounded-[17px] font-semibold">
                      {marketing2}
                    </Button>
                    <Button shape="round" className="min-w-[68px] !rounded-[17px] font-semibold">
                      {design2}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button size="5xl" variant="fill" shape="square" className="w-full font-bold sm:px-5">
                  {apply2}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar_gray_300_6x165.svg" alt="progressbar" className="h-[6px]" />
                  <Text size="lg" as="p" className="text-center !text-black-900">
                    <span className="font-semibold text-blue_gray-900">8 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 12 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-6 sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img
                  src="images/img_bvboaeet_400x400_64x64.png"
                  alt="bvboaeet"
                  className="h-[64px] w-[64px] rounded-[50%]"
                />
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Heading size="4xl" as="h5">
                    {socialmedia3}
                  </Heading>
                  <div className="flex w-[69%] items-end gap-2 pb-[5px] md:w-full">
                    <Text as="p" className="!text-blue_gray-400">
                      {nomad3}
                    </Text>
                    <div className="mb-1.5 h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text as="p" className="!text-blue_gray-400">
                      {parisfrance3}
                    </Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button color="teal_300_19" variant="fill" className="w-full flex-1 rounded-[17px] font-semibold">
                      {fulltime3}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button color="yellow_700" shape="round" className="w-full flex-1 !rounded-[17px] font-semibold">
                      {marketing3}
                    </Button>
                    <Button shape="round" className="min-w-[68px] !rounded-[17px] font-semibold">
                      {design3}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button size="5xl" variant="fill" shape="square" className="w-full font-bold sm:px-5">
                  {apply3}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar_gray_300_6x164.svg" alt="progressbar" className="h-[6px]" />
                  <Text size="lg" as="p" className="text-center !text-black-900">
                    <span className="font-semibold text-blue_gray-900">0 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 10 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-6 sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img src="images/img_v_6ghzad_400x400.png" alt="v6ghzad" className="h-[64px] w-[64px] object-cover" />
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Heading size="4xl" as="h5">
                    {socialmedia4}
                  </Heading>
                  <div className="flex w-[67%] items-end gap-2 pb-[5px] md:w-full">
                    <Text as="p" className="!text-blue_gray-400">
                      {nomad4}
                    </Text>
                    <div className="mb-1.5 h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text as="p" className="!text-blue_gray-400">
                      {parisfrance4}
                    </Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button color="teal_300_19" variant="fill" className="w-full flex-1 rounded-[17px] font-semibold">
                      {fulltime4}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button color="yellow_700" shape="round" className="w-full flex-1 !rounded-[17px] font-semibold">
                      {marketing4}
                    </Button>
                    <Button shape="round" className="min-w-[68px] !rounded-[17px] font-semibold">
                      {design4}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button size="5xl" variant="fill" shape="square" className="w-full font-bold sm:px-5">
                  {apply4}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar.svg" alt="progressbar" className="h-[6px]" />
                  <Text size="lg" as="p" className="text-center !text-black-900">
                    <span className="font-semibold text-blue_gray-900">5 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 10 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-6 sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img
                  src="images/img_s93hu9p3_400x400_64x64.png"
                  alt="s93hu9pthree"
                  className="h-[64px] w-[64px] rounded-[50%]"
                />
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Heading size="4xl" as="h5">
                    {socialmedia5}
                  </Heading>
                  <div className="flex w-[83%] items-end gap-2 pb-[5px] md:w-full">
                    <Text as="p" className="!text-blue_gray-400">
                      {nomad5}
                    </Text>
                    <div className="mb-1.5 h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text as="p" className="!text-blue_gray-400">
                      {parisfrance5}
                    </Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button color="teal_300_19" variant="fill" className="w-full flex-1 rounded-[17px] font-semibold">
                      {fulltime5}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button color="yellow_700" shape="round" className="w-full flex-1 !rounded-[17px] font-semibold">
                      {marketing5}
                    </Button>
                    <Button shape="round" className="min-w-[68px] !rounded-[17px] font-semibold">
                      {design5}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button size="5xl" variant="fill" shape="square" className="w-full font-bold sm:px-5">
                  {apply5}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar.svg" alt="progressbar" className="h-[6px]" />
                  <Text size="lg" as="p" className="text-center !text-black-900">
                    <span className="font-semibold text-blue_gray-900">5 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 10 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-5 border border-solid border-gray-300 bg-white-A700 p-6 sm:flex-col sm:p-5">
              <div className="flex w-[41%] items-start justify-center gap-6 sm:w-full">
                <Img
                  src="images/img_fisx9qyy_400x400_64x64.png"
                  alt="fisx9qyy"
                  className="h-[64px] w-[64px] rounded-[50%]"
                />
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Heading size="4xl" as="h5">
                    {socialmedia6}
                  </Heading>
                  <div className="flex w-[68%] items-end gap-2 pb-[5px] md:w-full">
                    <Text as="p" className="!text-blue_gray-400">
                      {nomad6}
                    </Text>
                    <div className="mb-1.5 h-[4px] w-[4px] rounded-sm bg-blue_gray-400" />
                    <Text as="p" className="!text-blue_gray-400">
                      {parisfrance6}
                    </Text>
                  </div>
                  <div className="flex gap-2 self-stretch">
                    <Button color="teal_300_19" variant="fill" className="w-full flex-1 rounded-[17px] font-semibold">
                      {fulltime6}
                    </Button>
                    <div className="h-full w-px bg-gray-300" />
                    <Button color="yellow_700" shape="round" className="w-full flex-1 !rounded-[17px] font-semibold">
                      {marketing6}
                    </Button>
                    <Button shape="round" className="min-w-[68px] !rounded-[17px] font-semibold">
                      {design6}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-[19%] flex-col gap-[15px] sm:w-full">
                <Button size="5xl" variant="fill" shape="square" className="w-full font-bold sm:px-5">
                  {apply6}
                </Button>
                <div className="flex flex-col gap-[11px]">
                  <Img src="images/img_progress_bar.svg" alt="progressbar" className="h-[6px]" />
                  <Text size="lg" as="p" className="text-center !text-black-900">
                    <span className="font-semibold text-blue_gray-900">5 applied</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-blue_gray-400">of 10 capacity</span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[42%] items-center gap-2 md:w-full sm:flex-col">
            <Img
              src="images/img_arrow_left_blue_gray_900_24x24.svg"
              alt="arrowleft"
              className="h-[24px] w-[24px] sm:w-full"
            />
            <div className="flex flex-1 sm:self-stretch">
              <Button size="3xl" variant="fill" className="min-w-[46px] rounded-lg font-inter font-semibold">
                {one}
              </Button>
              <div className="flex flex-col items-center px-[13px] pb-3 pt-[13px]">
                <Heading size="2xl" as="h6" className="text-center !font-inter !text-blue_gray-700">
                  {one1}
                </Heading>
              </div>
              <div className="flex flex-col items-center px-[13px] pb-3 pt-[13px]">
                <Heading size="2xl" as="h6" className="text-center !font-inter !text-blue_gray-700">
                  {oneOne}
                </Heading>
              </div>
              <div className="flex flex-col items-center px-[13px] pb-3 pt-[13px]">
                <Heading size="2xl" as="h6" className="text-center !font-inter !text-blue_gray-700">
                  {oneTwo}
                </Heading>
              </div>
              <div className="flex flex-col items-center px-[13px] pb-3 pt-[13px]">
                <Heading size="2xl" as="h6" className="text-center !font-inter !text-blue_gray-700">
                  {oneThree}
                </Heading>
              </div>
              <div className="flex flex-col items-center px-4 pb-2 pt-[17px]">
                <Heading size="2xl" as="h6" className="text-center !font-inter !text-blue_gray-700">
                  {oneFour}
                </Heading>
              </div>
              <div className="flex flex-col items-center px-3 pb-3 pt-[13px]">
                <Heading size="2xl" as="h6" className="text-center !font-inter !text-blue_gray-700">
                  {oneFive}
                </Heading>
              </div>
            </div>
            <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[24px] w-[25px] sm:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
