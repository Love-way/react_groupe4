import React from "react";
import { Img, Text } from ".";

interface Props {
  className?: string;
  companieswe?: string;
}

export default function LandingPage({ companieswe = "Companies we helped grow", ...props }: Props) {
  return (
    <div {...props}>
      <div className="container-sm flex flex-col items-center pl-2.5 pr-[951px] md:p-5 md:pr-5">
        <Text size="2xl" as="p" className="!text-gray-900_7f">
          {companieswe}
        </Text>
      </div>
      <Img className="container-sm h-[40px] md:h-auto md:p-5" src="images/img_featured_company.svg" alt="featured" />
    </div>
  );
}
