import React from "react";
import { Img, Heading, Text, Button } from ".";

const data = [
  {
    leslie: "images/img_avatar_1x25.png",
    email1: "LeslieAlex@email.com",
    jakegyll: "Leslie Alexander",
    socialmedia: "Product Designer",
  },
  {
    leslie: "images/img_image_people_6.png",
    email1: "Brooklynsm@email.com",
    jakegyll: "Brooklyn Simmons",
    socialmedia: "Senior Engineer",
  },
];
interface Props {
  className?: string;
  startpostingjobtext?: string;
  pricetext?: string;
  signupbutton?: string;
  usernametext?: string;
  emailtext?: string;
  jobhuntlytext?: string;
  dashboardtext?: string;
  messagestext?: string;
  companyprofiletext?: string;
  allapplicantstext?: string;
  joblistingtext?: string;
  settingstext?: string;
  settingsOne?: string;
  helptext?: string;
  postajobbutton?: string;
  goodmorningtext?: string;
  hereiswhatstext?: string;
  jul1925button?: string;
  companyvisitorstext?: string;
  totalvisitorstext?: string;
  visitorsfromtext?: string;
  visitorstext?: string;
  totalvisitorscount?: string;
  montext?: string;
  tuetext?: string;
  wedtext?: string;
  thutext?: string;
  fritext?: string;
  sattext?: string;
  suntext?: string;
  recentapplicantstext?: string;
  jakegylltext?: string;
  emailtext1?: string;
  socialmediatext?: string;
  dateappliedtext?: string;
  buttonsecondar?: string;
  email?: string;
  durationtext?: string;
  leslietext?: string;
  productdesignertext?: string;
  emailtext2?: string;
  dateappliedtext1?: string;
  durationtext1?: string;
  email1?: string;
  seeapplicationbutton?: string;
  brooklynsimmonstext?: string;
  socialmediatext1?: string;
  emailtext3?: string;
  dateappliedtext2?: string;
  durationtext2?: string;
  email2?: string;
  seeapplicationbutton1?: string;
  buttonOne?: string;
}

export default function LandingPageLandingpage2({
  startpostingjobtext = "Start posting jobs today",
  pricetext = "Start posting jobs for only $10.",
  signupbutton = "Sign Up For Free",
  usernametext = "Maria Kelly",
  emailtext = "mariakelly@email.com",
  jobhuntlytext = "JobHuntly",
  dashboardtext = "Dashboard",
  messagestext = "Messages",
  companyprofiletext = "Company Profile",
  allapplicantstext = "All Applicants",
  joblistingtext = "Job Listing",
  settingstext = "SETTINGS",
  settingsOne = "Settings",
  helptext = "Help",
  postajobbutton = "Post a job",
  goodmorningtext = "Good morning, Maria",
  hereiswhatstext = "Here is what’s happening with your job listings from July 19 - July 25.",
  jul1925button = "Jul 19 - Jul 25",
  companyvisitorstext = "Company Visitors",
  totalvisitorstext = "21,457",
  visitorsfromtext = "Visitors from July 19 - July 25",
  visitorstext = "Visitors",
  totalvisitorscount = "5,879",
  montext = "Mon",
  tuetext = "Tue",
  wedtext = "Wed",
  thutext = "Thu",
  fritext = "Fri",
  sattext = "Sat",
  suntext = "Sun",
  recentapplicantstext = "Recent Applicants",
  jakegylltext = "Jake Gyll",
  emailtext1 = "Email",
  socialmediatext = "Social Media Specialist",
  dateappliedtext = "Date Applied",
  buttonsecondar = "See Application",
  email = "jakegyll@email.com",
  durationtext = "2 days ago",
  leslietext = "Leslie Alexander",
  productdesignertext = "Product Designer",
  emailtext2 = "Email",
  dateappliedtext1 = "Date Applied",
  durationtext1 = "2 days ago",
  email1 = "LeslieAlex@email.com",
  seeapplicationbutton = "See Application",
  brooklynsimmonstext = "Brooklyn Simmons",
  socialmediatext1 = "Senior Engineer",
  emailtext3 = "Email",
  dateappliedtext2 = "Date Applied",
  durationtext2 = "2 days ago",
  email2 = "Brooklynsm@email.com",
  seeapplicationbutton1 = "See Application",
  buttonOne = "View all applicants",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-xs flex h-[414px] items-center justify-center bg-[url(/public/images/img_cta_section.svg)] bg-cover bg-no-repeat px-14 pt-[70px] md:h-auto md:p-5 md:px-5 md:pt-5">
        <div className="flex w-full items-start justify-between gap-5 md:flex-col">
          <div className="mt-[23px] flex w-[35%] flex-col items-start gap-7 md:w-full">
            <Heading size="8xl" as="h1" className="w-full leading-[110%] !text-white-A700">
              {startpostingjobtext}
            </Heading>
            <Text as="p" className="!font-medium !text-white-A700">
              {pricetext}
            </Text>
            <Button
              color="white_A700"
              size="5xl"
              variant="fill"
              shape="square"
              className="min-w-[179px] font-bold sm:px-5"
            >
              {signupbutton}
            </Button>
          </div>
          <div className="flex w-[54%] items-center justify-center gap-3 bg-white-A700 pr-2.5 md:w-full sm:flex-col">
            <div className="flex w-[20%] items-start justify-center self-end sm:w-full">
              <Img src="images/img_vector.svg" alt="vector" className="relative z-[1] mt-[50px] h-[9px]" />
              <div className="relative ml-[-1px] h-[480px] flex-1 border border-solid border-indigo-50 bg-gray-50_01 px-1.5 pb-[18px] pt-[13px]">
                <div className="absolute bottom-[20.37px] right-[11.42px] m-auto flex flex-col items-start">
                  <Heading size="s" as="p" className="!font-inter !text-[7.05px] !text-gray-900">
                    {usernametext}
                  </Heading>
                  <Text size="xs" as="p" className="!font-inter !text-[5.48px] !text-gray-900_7f">
                    {emailtext}
                  </Text>
                </div>
                <div className="absolute bottom-[19.37px] left-[12.53px] m-auto h-[19px] w-[21%]">
                  <div className="absolute left-0 right-0 top-[0.00px] m-auto w-[96%] rounded-[9px] bg-indigo-A700_4c">
                    <Img
                      src="images/img_lion27_suzn455l_pm_unsplash.png"
                      alt="lion27suzn455l"
                      className="h-[18px] w-[18px] rounded-[50%]"
                    />
                  </div>
                  <Img
                    src="images/img_television.svg"
                    alt="television"
                    className="absolute bottom-[0.25px] right-[0.26px] m-auto h-[7px] w-[7px]"
                  />
                </div>
                <div className="absolute left-0 right-0 top-[13.31px] m-auto flex w-full flex-col items-start">
                  <div className="ml-1.5 flex items-center gap-[3px] md:ml-0">
                    <Img src="images/img_frame_3.svg" alt="image" className="h-[12px] w-[12px] self-start" />
                    <Heading
                      size="md"
                      as="p"
                      className="!font-redhatdisplay !text-[9.4px] tracking-[-0.09px] !text-gray-900"
                    >
                      {jobhuntlytext}
                    </Heading>
                  </div>
                  <div className="mt-[18px] flex self-stretch rounded-[3px] bg-indigo-A700_0c px-1.5 py-1">
                    <div className="flex items-center gap-1.5">
                      <Img src="images/img_icon_indigo_a700_9x9.svg" alt="icon" className="h-[9px] w-[9px]" />
                      <Text size="s" as="p" className="!font-inter !text-[6.26px] !text-indigo-A700">
                        {dashboardtext}
                      </Text>
                    </div>
                  </div>
                  <div className="ml-1.5 mt-1.5 flex items-center gap-1.5 md:ml-0">
                    <Img src="images/img_icon_blue_gray_900_9x9.svg" alt="icon" className="h-[9px] w-[9px]" />
                    <Text size="s" as="p" className="self-end !font-inter !text-[6.26px] !text-gray-900">
                      {messagestext}
                    </Text>
                  </div>
                  <div className="ml-1.5 mt-[9px] flex items-center gap-1.5 md:ml-0">
                    <Img src="images/img_icon_9x9.svg" alt="icon" className="h-[9px] w-[9px]" />
                    <Text size="s" as="p" className="self-end !font-inter !text-[6.26px] !text-gray-900">
                      {companyprofiletext}
                    </Text>
                  </div>
                  <div className="ml-1.5 mt-[9px] flex items-center gap-1.5 md:ml-0">
                    <Img src="images/img_icon_blue_gray_900.svg" alt="icon" className="h-[9px] w-[9px]" />
                    <Text size="s" as="p" className="self-end !font-inter !text-[6.26px] !text-gray-900">
                      {allapplicantstext}
                    </Text>
                  </div>
                  <div className="ml-1.5 mt-[9px] flex items-center gap-1.5 md:ml-0">
                    <Img src="images/img_icon_3.svg" alt="icon" className="h-[9px] w-[9px]" />
                    <Text size="s" as="p" className="self-end !font-inter !text-[6.26px] !text-gray-900">
                      {joblistingtext}
                    </Text>
                  </div>
                  <Heading
                    size="xs"
                    as="p"
                    className="ml-1.5 mt-5 !font-inter !text-[5.48px] tracking-[0.22px] !text-gray-900_7f md:ml-0"
                  >
                    {settingstext}
                  </Heading>
                  <div className="ml-1.5 mt-2.5 flex items-center gap-1.5 opacity-0.7 md:ml-0">
                    <Img src="images/img_icon_4.svg" alt="icon_eleven" className="h-[9px] w-[9px]" />
                    <Text size="s" as="p" className="self-end !font-inter !text-[6.26px] !text-gray-900">
                      {settingsOne}
                    </Text>
                  </div>
                  <div className="ml-1.5 mt-[9px] flex items-center gap-1.5 opacity-0.7 md:ml-0">
                    <Img src="images/img_icon_5.svg" alt="icon_thirteen" className="h-[9px] w-[9px]" />
                    <Text size="s" as="p" className="self-end !font-inter !text-[6.26px] !text-gray-900">
                      {helptext}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center gap-[11px] sm:self-stretch">
              <div className="relative h-[35px] w-[26%] self-end">
                <div className="absolute bottom-[8.11px] right-[2.53px] m-auto flex flex-col items-center rounded-[7px] bg-white-A700 p-[3px]">
                  <Img src="images/img_icon_gray_900.svg" alt="icon_fifteen" className="h-[9px] w-[9px]" />
                </div>
                <Button
                  variant="fill"
                  shape="square"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto w-max min-w-[111px] font-bold sm:pl-5"
                >
                  {postajobbutton}
                </Button>
              </div>
              <div className="flex items-center justify-between gap-5 self-stretch">
                <div className="flex flex-col items-start gap-0.5">
                  <Heading size="lg" as="p" className="!text-[12.53px] tracking-[-0.25px] !text-gray-900">
                    {goodmorningtext}
                  </Heading>
                  <Text size="s" as="p" className="!text-[6.26px] !text-gray-900_7f">
                    {hereiswhatstext}
                  </Text>
                </div>
                <Button
                  color="white_A700"
                  size="xs"
                  variant="fill"
                  className="min-w-[67px] self-end rounded-[3px] border border-solid border-indigo-50 font-inter font-medium !text-gray-900"
                >
                  {jul1925button}
                </Button>
              </div>
              <div className="flex w-[49%] flex-col gap-1 self-start border border-solid border-gray-300 bg-white-A700 p-[9px] md:w-full">
                <div className="flex w-[90%] items-start justify-between gap-5 md:w-full">
                  <div className="flex flex-col items-start gap-2">
                    <Heading size="s" as="p" className="!text-[7.83px]">
                      {companyvisitorstext}
                    </Heading>
                    <div className="flex flex-col items-start">
                      <Heading size="6xl" as="h3" className="!text-[28.19px]">
                        {totalvisitorstext}
                      </Heading>
                      <Text size="md" as="p" className="!text-[7.05px] !text-blue_gray-400">
                        {visitorsfromtext}
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[24%] flex-col items-center gap-0.5 rounded-[3px] bg-blue_gray-900 px-[5px] pt-[5px]">
                    <Text size="s" as="p" className="text-center !text-[6.26px] !font-normal !text-gray-300">
                      {visitorstext}
                    </Text>
                    <Heading size="s" as="p" className="text-center !text-[7.05px] !text-white-A700">
                      {totalvisitorscount}
                    </Heading>
                    <Img
                      src="images/img_polygon_1.png"
                      alt="polygonone"
                      className="mr-1.5 h-[3px] self-end rounded-[1px] object-cover md:mr-0"
                    />
                  </div>
                </div>
                <Img src="images/img_chart.svg" alt="chart" className="h-[55px]" />
                <div className="flex flex-wrap gap-[17px] self-center">
                  <Text size="s" as="p" className="text-center !text-[6.26px] !font-normal !text-blue_gray-400">
                    {montext}
                  </Text>
                  <Text size="s" as="p" className="text-center !text-[6.26px] !font-normal !text-blue_gray-400">
                    {tuetext}
                  </Text>
                  <Text size="s" as="p" className="text-center !text-[6.26px] !font-normal !text-blue_gray-400">
                    {wedtext}
                  </Text>
                  <Text size="s" as="p" className="text-center !text-[6.26px] !font-normal !text-blue_gray-400">
                    {thutext}
                  </Text>
                  <Text
                    size="s"
                    as="p"
                    className="h-[7px] w-[7px] text-center !text-[6.26px] !font-normal !text-blue_gray-400"
                  >
                    {fritext}
                  </Text>
                  <Text size="s" as="p" className="text-center !text-[6.26px] !font-normal !text-blue_gray-400">
                    {sattext}
                  </Text>
                  <Text size="s" as="p" className="text-center !text-[6.26px] !font-normal !text-blue_gray-400">
                    {suntext}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[233px] self-stretch md:gap-[174px] sm:gap-[116px]">
                <div className="self-stretch">
                  <div className="border border-solid border-gray-300 bg-white-A700 pb-[45px] pt-[25px] md:pb-5 sm:py-5">
                    <div className="flex flex-col items-start">
                      <Heading size="4xl" as="h5" className="relative z-[2] ml-[9px] md:ml-0">
                        {recentapplicantstext}
                      </Heading>
                      <div className="relative mt-[-4px] h-px w-full self-stretch bg-gray-300" />
                    </div>
                  </div>
                  <div className="relative mt-[-20px] flex flex-col gap-14 sm:gap-7">
                    <div className="flex flex-col items-end bg-gray-50 px-[9px] pt-[7px]">
                      <div className="flex items-center justify-between gap-5 self-stretch">
                        <div className="flex items-center">
                          <div className="flex items-center gap-1.5">
                            <Img src="images/img_avatar.png" alt="avatar" className="h-px self-end object-cover" />
                            <div className="flex flex-col items-start gap-[17px]">
                              <div className="flex flex-wrap items-center gap-2">
                                <Heading size="3xl" as="h6" className="!font-bold">
                                  {jakegylltext}
                                </Heading>
                                <Heading size="2xl" as="h6" className="self-end">
                                  {emailtext1}
                                </Heading>
                              </div>
                              <Text size="2xl" as="p" className="!text-blue_gray-400">
                                {socialmediatext}
                              </Text>
                            </div>
                          </div>
                          <Heading size="2xl" as="h6" className="relative ml-[-33px] self-end">
                            {dateappliedtext}
                          </Heading>
                        </div>
                        <Img
                          src="images/img_icon_blue_gray_900_1x9.png"
                          alt="iconteen"
                          className="h-px self-end object-cover"
                        />
                      </div>
                      <Heading
                        size="xl"
                        as="p"
                        className="mr-[11px] flex items-center justify-center border border-solid border-indigo-A700 bg-indigo-50_01 px-2 pt-1 text-center !text-indigo-A700 md:mr-0"
                      >
                        {buttonsecondar}
                      </Heading>
                      <Text size="2xl" as="p" className="mr-[99px] mt-4 !text-blue_gray-400 md:mr-0">
                        {email}
                      </Text>
                      <Text size="2xl" as="p" className="mr-[99px] mt-4 !text-blue_gray-400 md:mr-0">
                        {durationtext}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[132px]">
                      {data.map((d, index) => (
                        <div
                          key={"listleslie" + index}
                          className="flex flex-1 flex-col items-end gap-[78px] bg-white-A700 px-[9px] pt-[9px] md:gap-[58px] sm:gap-[39px]"
                        >
                          <div className="flex items-start gap-1.5 self-start">
                            <Img src={d.leslie} alt="leslie" className="mt-4 h-px object-cover" />
                            <div className="flex flex-col gap-[94px] md:gap-[70px] sm:gap-[47px]">
                              <Heading size="3xl" as="h6" className="!font-bold">
                                {d.jakegyll}
                              </Heading>
                              <Text size="2xl" as="p" className="!text-blue_gray-400">
                                {d.socialmedia}
                              </Text>
                            </div>
                          </div>
                          <div className="mr-[77px] flex flex-col items-start gap-20 md:mr-0 md:gap-[60px] sm:gap-10">
                            <Heading size="2xl" as="h6">
                              {emailtext2}
                            </Heading>
                            <div className="mr-[13px] flex flex-col items-start gap-[93px] self-end md:mr-0 md:gap-[69px] sm:gap-[46px]">
                              <Heading size="2xl" as="h6">
                                {dateappliedtext1}
                              </Heading>
                              <Text size="2xl" as="p" className="!text-blue_gray-400">
                                {durationtext1}
                              </Text>
                            </div>
                            <Text size="2xl" as="p" className="!text-blue_gray-400">
                              {d.email1}
                            </Text>
                          </div>
                          <Heading
                            size="xl"
                            as="p"
                            className="mr-[11px] flex items-center justify-center border border-solid border-indigo-A700 bg-indigo-50_01 px-2 pt-1 text-center !text-indigo-A700 md:mr-0"
                          >
                            {seeapplicationbutton}
                          </Heading>
                          <Img
                            src="images/img_icon_blue_gray_900_1x9.png"
                            alt="see_application"
                            className="h-px object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-1.5">
                  <Heading size="2xl" as="h6" className="text-center !text-indigo-A700">
                    {buttonOne}
                  </Heading>
                  <Img src="images/img_icon_indigo_a700_1x9.png" alt="iconteen" className="mt-2 h-px object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
