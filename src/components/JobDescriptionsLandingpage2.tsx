import React from "react";
import { Img, Text, Heading } from ".";

interface Props {
  className?: string;
  stripe?: string;
  buttonOne?: string;
  description?: string;
}

export default function C15JobDescriptionsLandingpage2({
  stripe = "Stripe",
  buttonOne = "Read more about Stripe",
  description = "Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-sm flex items-center justify-between gap-5 pl-2.5 md:flex-col md:p-5">
        <div className="flex w-[48%] flex-col gap-8 md:w-full">
          <div className="flex w-[57%] items-center justify-between gap-5 md:w-full">
            <div className="w-[19%] self-start">
              <Img
                src="images/img_stripe_logo_dp4f5yykm.png"
                alt="stripelogo"
                className="h-[58px] w-[58px] object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <Heading size="7xl" as="h2">
                {stripe}
              </Heading>
              <div className="relative mt-[-2px] flex items-start gap-4">
                <Heading size="2xl" as="h6" className="text-center !text-indigo-A700">
                  {buttonOne}
                </Heading>
                <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
          <Text as="p" className="leading-[160%]">
            {description}
          </Text>
        </div>
        <div className="flex w-[41%] justify-center gap-[19px] md:w-full sm:flex-col">
          <Img
            src="images/img_leon_wvh5grsmyay_unsplash.png"
            alt="leon"
            className="h-[276px] w-[67%] rounded object-cover sm:w-full"
          />
          <div className="flex w-[33%] flex-col gap-4 sm:w-full">
            <Img src="images/img_leon_6awftplgace_unsplash.png" alt="leon" className="h-[130px] rounded object-cover" />
            <div className="relative h-[130px] md:h-auto">
              <Img
                src="images/img_leon_ndz08c_zu0c_unsplash.png"
                alt="leonndz08c"
                className="h-[130px] w-full rounded object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[130px] w-full md:h-auto">
                <Img
                  src="images/img_leon_0k7ggia8lve_unsplash.png"
                  alt="leon"
                  className="h-[130px] w-full rounded object-cover"
                />
                <Img
                  src="images/img_leon_bzqu01v_g54_unsplash.png"
                  alt="leonbzqu01v"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[130px] w-full rounded object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
