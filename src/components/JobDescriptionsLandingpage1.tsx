import React from "react";
import { Text, Heading, Img } from ".";

const data = [
  {
    fullhealthcare: "images/img_icon_7.svg",
    fullhealthcare1: "Full Healthcare",
    webelievein: "We believe in thriving communities and that starts with our team being happy and healthy.",
  },
  {
    fullhealthcare: "images/img_icon_8.svg",
    fullhealthcare1: "Unlimited Vacation",
    webelievein: "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
  },
  {
    fullhealthcare: "images/img_icon_9.svg",
    fullhealthcare1: "Skill Development",
    webelievein:
      "We believe in always learning and leveling up our skills. Whether it&#39;s a conference or online course.",
  },
  {
    fullhealthcare: "images/img_icon_10.svg",
    fullhealthcare1: "Team Summits",
    webelievein:
      "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
  },
  {
    fullhealthcare: "images/img_icon_11.svg",
    fullhealthcare1: "Remote Working",
    webelievein: "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
  },
  {
    fullhealthcare: "images/img_icon_12.svg",
    fullhealthcare1: "Commuter Benefits",
    webelievein: "We’re grateful for all the time and energy each team member puts into getting to work every day.",
  },
  {
    fullhealthcare: "images/img_icon_13.svg",
    fullhealthcare1: "We give back.",
    webelievein:
      "We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. ",
  },
];
interface Props {
  className?: string;
  titletext?: string;
  descriptiontext?: string;
  healthcaretitle?: string;
  healthcaredescription?: string;
  vacationtitle?: string;
  vacationdescription?: string;
  skilldevelopmenttitle?: string;
  skilldevelopmentdescription?: string;
  teamsummitstitle?: string;
  teamsummitsdescription?: string;
  remoteworkingtitle?: string;
  remoteworkingdescription?: string;
  commuterbenefitstitle?: string;
  commuterbenefitsdescription?: string;
  givebacktitle?: string;
  givebackdescription?: string;
}

export default function C15JobDescriptionsLandingpage1({
  titletext = "Perks & Benefits",
  descriptiontext = "This job comes with several perks and benefits",
  healthcaretitle = "Full Healthcare",
  healthcaredescription = "We believe in thriving communities and that starts with our team being happy and healthy.",
  vacationtitle = "Unlimited Vacation",
  vacationdescription = "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
  skilldevelopmenttitle = "Skill Development",
  skilldevelopmentdescription = "We believe in always learning and leveling up our skills. Whether it&#39;s a conference or online course.",
  teamsummitstitle = "Team Summits",
  teamsummitsdescription = "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
  remoteworkingtitle = "Remote Working",
  remoteworkingdescription = "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
  commuterbenefitstitle = "Commuter Benefits",
  commuterbenefitsdescription = "We’re grateful for all the time and energy each team member puts into getting to work every day.",
  givebacktitle = "We give back.",
  givebackdescription = "We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. ",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-sm flex flex-col items-center pl-2.5 pr-[157px] md:p-5 md:pr-5">
        <div className="flex flex-col items-start gap-[11px]">
          <Heading size="7xl" as="h2">
            {titletext}
          </Heading>
          <Text as="p">{descriptiontext}</Text>
        </div>
      </div>
      <div className="container-sm mt-[25px] grid grid-cols-4 justify-center gap-8 pl-2.5 md:grid-cols-2 md:p-5 sm:grid-cols-1">
        {data.map((d, index) => (
          <div key={"content" + index} className="flex w-full flex-col gap-[22px]">
            <Img src={d.fullhealthcare} alt="full_healthcare" className="h-[48px] w-[48px]" />
            <div className="flex flex-col items-start gap-3">
              <Heading size="4xl" as="h5">
                {d.fullhealthcare1}
              </Heading>
              <Text as="p" className="w-full leading-[160%]">
                {d.webelievein}
              </Text>
            </div>
          </div>
        ))}
      </div>
      <div className="container-sm mt-[72px] h-px bg-gray-300 md:p-5" />
    </div>
  );
}
