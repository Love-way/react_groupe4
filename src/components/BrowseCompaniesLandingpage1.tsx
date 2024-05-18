import React from "react";
import { Heading, Img, Button, Slider } from ".";
import AliceCarousel, { EventObject } from "react-alice-carousel";

interface Props {
  className?: string;
  companiesby?: string;
  resultscounter?: string;
  pentagramTwo?: string;
  p3jobs?: string;
  pentagram?: string;
  p3jobs1?: string;
  pentagram1?: string;
  p3jobs2?: string;
  pentagram2?: string;
  p3jobs3?: string;
  pentagram3?: string;
  p3jobs4?: string;
  pentagram4?: string;
  p3jobs5?: string;
  pentagram5?: string;
  p3jobs6?: string;
  pentagram6?: string;
  p3jobs7?: string;
  viewmore?: string;
  design?: string;
  designOne?: string;
  designTwo?: string;
  designThree?: string;
  design1?: string;
}

export default function C13BrowseCompaniesLandingpage1({
  companiesby = "Companies by Category",
  resultscounter = "24 Results",
  pentagramTwo = "Pentagram",
  p3jobs = "3 Jobs",
  pentagram = "Wolff Olins",
  p3jobs1 = "3 Jobs",
  pentagram1 = "Clay",
  p3jobs2 = "3 Jobs",
  pentagram2 = "MediaMonks",
  p3jobs3 = "3 Jobs",
  pentagram3 = "Packer",
  p3jobs4 = "3 Jobs",
  pentagram4 = "Square",
  p3jobs5 = "3 Jobs",
  pentagram5 = "Divy",
  p3jobs6 = "3 Jobs",
  pentagram6 = "WebFlow",
  p3jobs7 = "3 Jobs",
  viewmore = "View more Design companies",
  design = "Design",
  designOne = "Fintech",
  designTwo = "Hosting",
  designThree = "Business Service",
  design1 = "Developer",
  ...props
}: Props) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <div {...props}>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[1095px] w-full items-center justify-center bg-[url(/public/images/img_landing_page_latest.svg)] bg-cover bg-no-repeat pb-[72px] pt-[73px] md:h-auto md:py-5">
        <div className="container-xs flex flex-col items-start gap-[266px] md:gap-[199px] md:p-5 sm:gap-[133px]">
          <Heading size="7xl" as="h2">
            {companiesby}
          </Heading>
          <div className="flex flex-col gap-6 self-stretch">
            <div className="flex items-start gap-4">
              <Button color="white_A700" size="6xl" variant="fill" shape="circle" className="w-[56px] !rounded-[28px]">
                <Img src="images/img_icon.svg" />
              </Button>
              <Heading as="h4" className="mt-[11px] !text-gray-900">
                {resultscounter}
              </Heading>
            </div>
            <div className="grid grid-cols-4 gap-8 md:grid-cols-2 sm:grid-cols-1">
              <div className="flex w-full flex-col items-center gap-[30px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <Img
                  src="images/img_aaoodj22_400x400.png"
                  alt="pentagram"
                  className="h-[88px] w-[88px] rounded-[50%]"
                />
                <div className="flex flex-col items-center gap-[13px]">
                  <Heading as="h4" className="text-center">
                    {pentagramTwo}
                  </Heading>
                  <Button color="gray_50" variant="fill" shape="square" className="min-w-[76px]">
                    {p3jobs}
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-7 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <Img
                  src="images/img_82dbhut_400x400.png"
                  alt="82dbhut400x400"
                  className="h-[88px] w-[88px] rounded-[50%]"
                />
                <div className="flex flex-col items-center gap-4">
                  <Heading as="h4" className="text-center">
                    {pentagram}
                  </Heading>
                  <Button color="gray_50" variant="fill" shape="square" className="min-w-[76px]">
                    {p3jobs1}
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[30px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <Img src="images/img_kyk0sl2a_400x400.png" alt="kyk0sl2a" className="h-[88px] w-[88px] rounded-[50%]" />
                <div className="flex w-[34%] flex-col items-center gap-3.5 md:w-full">
                  <Heading as="h4" className="text-center">
                    {pentagram1}
                  </Heading>
                  <Button color="gray_50" variant="fill" shape="square" className="w-full">
                    {p3jobs2}
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[29px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <Img src="images/img_images_1.png" alt="imagesone" className="h-[88px] w-[88px] rounded-[50%]" />
                <div className="flex flex-col items-center gap-[15px]">
                  <Heading as="h4" className="text-center">
                    {pentagram2}
                  </Heading>
                  <Button color="gray_50" variant="fill" shape="square" className="min-w-[76px]">
                    {p3jobs3}
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[29px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <Img src="images/img_user.svg" alt="user" className="h-[88px] w-[88px]" />
                <div className="flex w-[38%] flex-col items-center gap-[15px] md:w-full">
                  <Heading as="h4" className="text-center">
                    {pentagram3}
                  </Heading>
                  <Button color="gray_50" variant="fill" shape="square" className="w-full">
                    {p3jobs4}
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[34px] border border-solid border-gray-300 bg-white-A700 px-7 pb-6 pt-7 sm:p-5">
                <Img
                  src="images/img_square_logo_xvh9oc2it.png"
                  alt="squarelogo"
                  className="h-[80px] w-[80px] object-cover"
                />
                <div className="flex w-[40%] flex-col items-center gap-3.5 md:w-full">
                  <Heading as="h4" className="text-center">
                    {pentagram4}
                  </Heading>
                  <Button color="gray_50" variant="fill" shape="square" className="w-full">
                    {p3jobs5}
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[30px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <div className="w-[39%] md:w-full">
                  <Img
                    src="images/img_divvy_logo_f0rwkqp73.png"
                    alt="divvylogo"
                    className="h-[80px] w-[80px] rounded-[50%]"
                  />
                </div>
                <div className="flex w-[34%] flex-col items-center gap-3.5 md:w-full">
                  <Heading as="h4" className="text-center">
                    {pentagram5}
                  </Heading>
                  <Button color="gray_50" variant="fill" shape="square" className="w-full">
                    {p3jobs6}
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-[29px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
                <div className="w-[39%] md:w-full">
                  <Img
                    src="images/img_tg7mrqk2_400x400_79x79.png"
                    alt="tg7mrqktwo"
                    className="h-[79px] w-[79px] object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-[15px]">
                  <Heading as="h4" className="text-center">
                    {pentagram6}
                  </Heading>
                  <Button color="gray_50" variant="fill" shape="square" className="min-w-[76px]">
                    {p3jobs7}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Heading size="2xl" as="h6" className="text-center !text-indigo-A700">
                {viewmore}
              </Heading>
              <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[-182.00px] top-[14%] m-auto w-full gap-[7px] md:relative md:flex-col">
        <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 0 } }}
          paddingLeft={1216}
          paddingRight={92}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e: EventObject) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          items={[...Array(6)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="mx-2.5 flex w-full max-w-[1216px] flex-1 justify-end md:mx-0 md:self-stretch md:p-5">
                <div className="flex w-full justify-end gap-8 md:flex-col">
                  <div className="flex w-full flex-col items-start gap-[33px] border border-solid border-gray-300 bg-indigo-A700 px-8 pb-[29px] pt-8 sm:p-5">
                    <Img src="images/img_icon_white_a700_48x48.svg" alt="icon" className="h-[48px] w-[48px]" />
                    <Heading as="h4" className="!text-white-A700">
                      {design}
                    </Heading>
                  </div>
                  <div className="flex w-full flex-col items-start gap-[31px] border border-solid border-gray-300 bg-white-A700 px-8 pb-[31px] pt-8 sm:p-5">
                    <Img src="images/img_icon_indigo_a700_48x48.svg" alt="icon" className="h-[48px] w-[48px]" />
                    <Heading as="h4">{designOne}</Heading>
                  </div>
                  <div className="flex w-full flex-col items-start gap-[33px] border border-solid border-gray-300 bg-white-A700 px-8 pb-[29px] pt-8 sm:p-5">
                    <Img src="images/img_icon_6.svg" alt="icon" className="h-[48px] w-[48px]" />
                    <Heading as="h4">{designTwo}</Heading>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-col items-start gap-[30px] border border-solid border-gray-300 bg-white-A700 p-8 sm:p-5">
                      <Img src="images/img_icon_2.svg" alt="icon" className="h-[48px] w-[48px]" />
                      <Heading as="h4">{designThree}</Heading>
                    </div>
                    <Button size="4xl" variant="fill" shape="square" className="relative ml-[-23px] w-[48px] shadow-xs">
                      <Img src="images/img_arrow_left_white_a700.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      </div>
    </div>
  );
}
