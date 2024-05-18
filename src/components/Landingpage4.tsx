import React from "react";
import { Button, Text, Heading, Img } from ".";

interface Props {
  className?: string;
  latestjobstext?: string;
  showalljobstext?: string;
  socialmediatext?: string;
  nomadtext?: string;
  parisfrancetext?: string;
  fulltimebutton?: string;
  marketingbutton?: string;
  designbutton?: string;
  socialmediatext1?: string;
  nomadtext1?: string;
  parisfrancetext1?: string;
  fulltimebutton1?: string;
  marketingbutton1?: string;
  designbutton1?: string;
  socialmedia?: string;
  nomad?: string;
  parisfrance?: string;
  fulltime?: string;
  marketing?: string;
  design?: string;
  socialmediatext2?: string;
  nomadtext2?: string;
  parisfrancetext2?: string;
  fulltimebutton2?: string;
  marketingbutton2?: string;
  designbutton2?: string;
  socialmedia1?: string;
  nomad1?: string;
  parisfrance1?: string;
  fulltime1?: string;
  marketing1?: string;
  design1?: string;
  socialmediatext3?: string;
  nomadtext3?: string;
  parisfrancetext3?: string;
  fulltimebutton3?: string;
  marketingbutton3?: string;
  designbutton3?: string;
  socialmedia2?: string;
  nomad2?: string;
  parisfrance2?: string;
  fulltime2?: string;
  marketing2?: string;
  design2?: string;
  socialmediatext4?: string;
  nomadtext4?: string;
  parisfrancetext4?: string;
  fulltimebutton4?: string;
  marketingbutton4?: string;
  designbutton4?: string;
}

export default function LandingPageLandingpage4({
  latestjobstext,
  showalljobstext = "Show all jobs",
  socialmediatext = "Social Media Assistant",
  nomadtext = "Nomad",
  parisfrancetext = "Paris, France",
  fulltimebutton = "Full-Time",
  marketingbutton = "Marketing",
  designbutton = "Design",
  socialmediatext1 = "Social Media Assistant",
  nomadtext1 = "Netlify",
  parisfrancetext1 = "Paris, France",
  fulltimebutton1 = "Full-Time",
  marketingbutton1 = "Marketing",
  designbutton1 = "Design",
  socialmedia = "Brand Designer",
  nomad = "Dropbox",
  parisfrance = "San Fransisco, USA",
  fulltime = "Full-Time",
  marketing = "Marketing",
  design = "Design",
  socialmediatext2 = "Brand Designer",
  nomadtext2 = "Maze",
  parisfrancetext2 = "San Fransisco, USA",
  fulltimebutton2 = "Full-Time",
  marketingbutton2 = "Marketing",
  designbutton2 = "Design",
  socialmedia1 = "Interactive Developer",
  nomad1 = "Terraform",
  parisfrance1 = "Hamburg, Germany",
  fulltime1 = "Full-Time",
  marketing1 = "Marketing",
  design1 = "Design",
  socialmediatext3 = "Interactive Developer",
  nomadtext3 = "Udacity",
  parisfrancetext3 = "Hamburg, Germany",
  fulltimebutton3 = "Full-Time",
  marketingbutton3 = "Marketing",
  designbutton3 = "Design",
  socialmedia2 = "HR Manager",
  nomad2 = "Packer",
  parisfrance2 = "Lucern, Switzerland",
  fulltime2 = "Full-Time",
  marketing2 = "Marketing",
  design2 = "Design",
  socialmediatext4 = "HR Manager",
  nomadtext4 = "Webflow",
  parisfrancetext4 = "Lucern, Switzerland",
  fulltimebutton4 = "Full-Time",
  marketingbutton4 = "Marketing",
  designbutton4 = "Design",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Img
        src="images/img_pattern.png"
        alt="pattern"
        className="absolute bottom-0 right-[0.00px] top-0 my-auto h-[794px] w-[46%] object-cover"
      />
      <div className="container-sm absolute left-[8%] top-[8%] my-auto flex flex-col gap-[41px] pl-2.5 md:p-5">
        <div className="flex items-center justify-between gap-5 sm:flex-col">
          <Heading size="8xl" as="h1">
            <span className="text-blue_gray-900">Latest&nbsp;</span>
            <span className="text-blue-500">jobs open</span>
          </Heading>
          <div className="mb-[7px] flex items-start gap-4 self-end">
            <Heading size="2xl" as="h6" className="text-center !text-indigo-A700">
              {showalljobstext}
            </Heading>
            <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center gap-8 md:grid-cols-1">
          <div className="flex w-full items-start gap-6 bg-white-A700 px-10 pb-6 pt-[23px] md:flex-col sm:p-5">
            <Img src="images/img_television.svg" alt="image" className="h-[64px] w-[64px] md:w-full" />
            <div className="flex w-[56%] flex-col items-start gap-[9px] md:w-full">
              <Heading size="4xl" as="h5">
                {socialmediatext}
              </Heading>
              <div className="flex w-[66%] items-end gap-2 pb-[5px] md:w-full">
                <Text as="p">{nomadtext}</Text>
                <div className="mb-[5px] h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text as="p">{parisfrancetext}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button color="teal_300_19" variant="fill" className="w-full flex-1 rounded-[17px] font-semibold">
                  {fulltimebutton}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button color="yellow_700" shape="round" className="w-full flex-1 !rounded-[17px] font-semibold">
                  {marketingbutton}
                </Button>
                <Button shape="round" className="min-w-[68px] !rounded-[17px] font-semibold">
                  {designbutton}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 bg-white-A700 px-10 pb-6 pt-[23px] sm:p-5">
            <div className="w-[13%] bg-white-A700">
              <Img
                src="images/img_netlify_logo_1.png"
                alt="netlifylogoone"
                className="h-[58px] w-[58px] rounded-[50%]"
              />
            </div>
            <div className="flex w-[56%] flex-col items-start gap-[9px]">
              <Heading size="4xl" as="h5">
                {socialmediatext1}
              </Heading>
              <div className="flex w-[64%] items-center gap-2 pb-[5px] md:w-full">
                <Text as="p">{nomadtext1}</Text>
                <div className="mb-[5px] h-[4px] w-[4px] self-end rounded-sm bg-blue_gray-700" />
                <Text as="p">{parisfrancetext1}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button color="teal_300_19" variant="fill" className="w-full flex-1 rounded-[17px] font-semibold">
                  {fulltimebutton1}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button color="yellow_700" shape="round" className="w-full flex-1 !rounded-[17px] font-semibold">
                  {marketingbutton1}
                </Button>
                <Button shape="round" className="min-w-[68px] !rounded-[17px] font-semibold">
                  {designbutton1}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 bg-white-A700 px-10 py-6 sm:p-5">
            <Img src="images/img_close.svg" alt="close" className="h-[64px] w-[64px]" />
            <div className="flex w-[56%] flex-col items-start gap-2">
              <Heading size="4xl" as="h5">
                {socialmedia}
              </Heading>
              <div className="flex w-[87%] items-center gap-2 pb-[5px] md:w-full">
                <Text as="p">{nomad}</Text>
                <div className="mb-1.5 h-[4px] w-[4px] self-end rounded-sm bg-blue_gray-700" />
                <Text as="p">{parisfrance}</Text>
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
          <div className="flex w-full items-start gap-6 bg-white-A700 px-10 py-6 sm:p-5">
            <Img
              src="images/img_7tuadqi_400x400.png"
              alt="7tuadqi400x400"
              className="h-[64px] w-[64px] rounded-[50%]"
            />
            <div className="flex w-[56%] flex-col items-start gap-2">
              <Heading size="4xl" as="h5">
                {socialmediatext2}
              </Heading>
              <div className="flex w-[78%] items-start gap-2 pb-[5px] md:w-full">
                <Text as="p">{nomadtext2}</Text>
                <div className="mb-[5px] h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text as="p">{parisfrancetext2}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button color="teal_300_19" variant="fill" className="w-full flex-1 rounded-[17px] font-semibold">
                  {fulltimebutton2}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button color="yellow_700" shape="round" className="w-full flex-1 !rounded-[17px] font-semibold">
                  {marketingbutton2}
                </Button>
                <Button shape="round" className="min-w-[68px] !rounded-[17px] font-semibold">
                  {designbutton2}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 bg-white-A700 px-10 py-6 sm:p-5">
            <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[64px] w-[64px]" />
            <div className="flex w-[56%] flex-col items-start gap-2">
              <Heading size="4xl" as="h5">
                {socialmedia1}
              </Heading>
              <div className="flex items-end gap-2 self-stretch pb-[5px]">
                <Text as="p">{nomad1}</Text>
                <div className="mb-1.5 h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text as="p">{parisfrance1}</Text>
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
          <div className="flex w-full items-start gap-6 bg-white-A700 px-10 py-6 sm:p-5">
            <Img
              src="images/img_1m3hz0d_400x400.png"
              alt="1m3hz0d400x400"
              className="h-[64px] w-[64px] rounded-[50%]"
            />
            <div className="flex w-[56%] flex-col items-start gap-2">
              <Heading size="4xl" as="h5">
                {socialmediatext3}
              </Heading>
              <div className="flex w-[85%] items-center gap-2 pb-[5px] pt-1 md:w-full">
                <Text as="p">{nomadtext3}</Text>
                <div className="mb-1.5 h-[4px] w-[4px] self-end rounded-sm bg-blue_gray-700" />
                <Text as="p">{parisfrancetext3}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button color="teal_300_19" variant="fill" className="w-full flex-1 rounded-[17px] font-semibold">
                  {fulltimebutton3}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button color="yellow_700" shape="round" className="w-full flex-1 !rounded-[17px] font-semibold">
                  {marketingbutton3}
                </Button>
                <Button shape="round" className="min-w-[68px] !rounded-[17px] font-semibold">
                  {designbutton3}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 bg-white-A700 px-10 py-6 sm:p-5">
            <Img src="images/img_user.svg" alt="user" className="h-[64px] w-[64px]" />
            <div className="flex w-[56%] flex-col items-start gap-2">
              <Heading size="4xl" as="h5">
                {socialmedia2}
              </Heading>
              <div className="flex w-[85%] items-end gap-2 pb-1.5 md:w-full">
                <Text as="p">{nomad2}</Text>
                <div className="mb-[5px] h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text as="p">{parisfrance2}</Text>
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
          <div className="flex w-full items-start gap-6 bg-white-A700 px-10 py-6 sm:p-5">
            <div className="w-[13%]">
              <Img src="images/img_tg7mrqk2_400x400.png" alt="tg7mrqktwo" className="h-[57px] w-[57px] object-cover" />
            </div>
            <div className="flex w-[56%] flex-col items-start gap-2">
              <Heading size="4xl" as="h5">
                {socialmediatext4}
              </Heading>
              <div className="flex items-end gap-2 self-stretch pb-1.5">
                <Text as="p">{nomadtext4}</Text>
                <div className="mb-[5px] h-[4px] w-[4px] rounded-sm bg-blue_gray-700" />
                <Text as="p">{parisfrancetext4}</Text>
              </div>
              <div className="flex gap-2 self-stretch">
                <Button color="teal_300_19" variant="fill" className="w-full flex-1 rounded-[17px] font-semibold">
                  {fulltimebutton4}
                </Button>
                <div className="h-full w-px bg-gray-300" />
                <Button color="yellow_700" shape="round" className="w-full flex-1 !rounded-[17px] font-semibold">
                  {marketingbutton4}
                </Button>
                <Button shape="round" className="min-w-[68px] !rounded-[17px] font-semibold">
                  {designbutton4}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
