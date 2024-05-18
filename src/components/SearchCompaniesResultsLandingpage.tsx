import React from "react";
import { Img, Text, Button, Heading, CheckBox } from ".";

interface Props {
  className?: string;
  industry?: string;
  companysize?: string;
  alljobs?: string;
  showingseventyt?: string;
  sortby?: string;
  mostrelevant?: string;
  p7jobs?: string;
  komodo?: string;
  description?: string;
  business?: string;
  paymentGateway?: string;
  p7jobs1?: string;
  komodo1?: string;
  komodoisan?: string;
  business1?: string;
  p7jobs2?: string;
  komodo2?: string;
  komodoisan1?: string;
  business2?: string;
  blockchain?: string;
  p7jobs3?: string;
  komodo3?: string;
  description1?: string;
  business3?: string;
  blockchain1?: string;
  p7jobs4?: string;
  komodo4?: string;
  komodoisan2?: string;
  business4?: string;
  p7jobs5?: string;
  komodo5?: string;
  komodoisan3?: string;
  business5?: string;
  blockchain2?: string;
  p7jobs6?: string;
  komodo6?: string;
  komodoisan4?: string;
  business6?: string;
  p7jobs7?: string;
  komodo7?: string;
  komodoisan5?: string;
  business7?: string;
  blockchain3?: string;
  one?: string;
  two?: string;
  three?: string;
  prop?: string;
  ten?: string;
}

export default function SearchCompaniesResultsLandingpage({
  industry = "Industry",
  companysize = "Company Size",
  alljobs = "All Jobs",
  showingseventyt = "Showing 73 results",
  sortby = "Sort by:",
  mostrelevant = "Most relevant",
  p7jobs = "7 Jobs",
  komodo = "Stripe",
  description = "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools...",
  business = "Business",
  paymentGateway = "Payment gateway",
  p7jobs1 = "7 Jobs",
  komodo1 = "Truebill",
  komodoisan = "Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...",
  business1 = "Business",
  p7jobs2 = "7 Jobs",
  komodo2 = "Square",
  komodoisan1 = "Square builds common business tools in unconventional ways so more people can start, run, and grow their businesses.",
  business2 = "Business",
  blockchain = "Blockchain",
  p7jobs3 = "7 Jobs",
  komodo3 = "Coinbase",
  description1 = "Coinbase is a digital currency wallet and platform where merchants and consumers can transact with new digital currencies.",
  business3 = "Business",
  blockchain1 = "Blockchain",
  p7jobs4 = "7 Jobs",
  komodo4 = "Robinhood",
  komodoisan2 = "Robinhood is lowering barriers, removing fees, and providing greater access to financial information.",
  business4 = "Business",
  p7jobs5 = "7 Jobs",
  komodo5 = "Kraken",
  komodoisan3 = "Based in San Francisco, Kraken is the world’s largest global bitcoin exchange in euro volume and liquidity.",
  business5 = "Business",
  blockchain2 = "Blockchain",
  p7jobs6 = "7 Jobs",
  komodo6 = "Revolut",
  komodoisan4 = "When Revolut was founded in 2015, we had a vision to build a sustainable, digital alternative to traditional big banks.",
  business6 = "Business",
  p7jobs7 = "7 Jobs",
  komodo7 = "Divvy",
  komodoisan5 = "Divvy is a secure financial platform for businesses to manage payments and subscriptions.",
  business7 = "Business",
  blockchain3 = "Blockchain",
  one = "1",
  two = "2",
  three = "3",
  prop = "•••",
  ten = "10",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="container-sm flex items-start justify-between gap-5 pl-2.5 md:flex-col md:p-5">
        <div className="flex w-[17%] flex-col gap-10 md:w-full">
          <div className="flex flex-col gap-5">
            <div className="flex self-start">
              <Heading size="2xl" as="h6" className="!font-bold">
                {industry}
              </Heading>
            </div>
            <div className="flex flex-col gap-5">
              <CheckBox
                name="advertisingFort"
                label="Advertising (43)"
                id="advertisingFort"
                className="gap-4 py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="businessservice"
                label="Business Service (4)"
                id="businessservice"
                className="gap-4 py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="blockchainFive"
                label="Blockchain (5)"
                id="blockchainFive"
                className="gap-4 py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="cloudFifteen"
                label="Cloud (15)"
                id="cloudFifteen"
                className="gap-4 py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="consumertechFiv"
                label="Consumer Tech (5)"
                id="consumertechFiv"
                className="gap-4 py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="educationThirty"
                label="Education (34)"
                id="educationThirty"
                className="gap-4 px-px py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="fintechFortyFiv"
                label="Fintech (45)"
                id="fintechFortyFiv"
                className="gap-4 px-px py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="gamingThirtyThr"
                label="Gaming (33)"
                id="gamingThirtyThr"
                className="gap-4 px-px py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="foodbeverageFiv"
                label="Food & Beverage (5)"
                id="foodbeverageFiv"
                className="gap-4 px-px py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="healthcareThree"
                label="Healthcare (3)"
                id="healthcareThree"
                className="gap-4 px-px py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="hostinngFive"
                label="Hostinng (5)"
                id="hostinngFive"
                className="gap-4 py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="mediaFour"
                label="Media (4)"
                id="mediaFour"
                className="gap-4 py-1 text-left text-base text-blue_gray-700"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="flex">
              <Heading size="2xl" as="h6" className="!font-bold">
                {companysize}
              </Heading>
            </div>
            <div className="flex w-[85%] flex-col gap-5 md:w-full">
              <CheckBox
                name="checkboxfalse"
                label="1-50 (25)"
                id="checkboxfalse3"
                className="gap-4 py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="checkboxfalse"
                label="51-150 (57)"
                id="checkboxfalse2"
                className="gap-4 py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="checkboxfalse"
                label="151-250 (45)"
                id="checkboxfalse1"
                className="gap-4 py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="twomillionfiveh"
                label="251-500 (4)"
                id="twomillionfiveh"
                className="py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="checkboxfalse"
                label="501-1000 (43)"
                id="checkboxfalse"
                className="gap-4 py-1 text-left text-base text-blue_gray-700"
              />
              <CheckBox
                name="1000abovetwenty"
                label="1000 - above (23)"
                id="abovetwenty"
                className="gap-4 py-1 text-left text-base text-blue_gray-700"
              />
            </div>
          </div>
        </div>
        <div className="flex w-[78%] flex-col items-center gap-8 md:w-full">
          <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
            <div className="flex flex-col items-start gap-[7px]">
              <Heading size="7xl" as="h2">
                {alljobs}
              </Heading>
              <Text as="p" className="!text-blue_gray-900">
                {showingseventyt}
              </Text>
            </div>
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
              <div className="h-[32px] w-px bg-gray-900_19" />
              <div className="flex items-center gap-6 pl-2">
                <Img src="images/img_icon_blue_gray_700.svg" alt="icon" className="h-[24px] w-[24px]" />
                <Button color="indigo_A700_0f" size="2xl" variant="fill" className="w-[40px] rounded">
                  <Img src="images/img_user_indigo_a700.svg" />
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-center gap-8 self-stretch md:grid-cols-1">
            <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
              <div className="flex items-start justify-between gap-5">
                <div className="w-[22%]">
                  <Img
                    src="images/img_stripe_logo_dp4f5yykm.png"
                    alt="stripe"
                    className="h-[80px] w-[80px] object-cover"
                  />
                </div>
                <Button color="gray_50" variant="fill" shape="square" className="min-w-[75px]">
                  {p7jobs}
                </Button>
              </div>
              <div className="flex flex-col items-start gap-3.5">
                <Heading as="h4">{komodo}</Heading>
                <Text size="2xl" as="p" className="w-full leading-[160%]">
                  {description}
                </Text>
              </div>
              <div className="flex gap-4">
                <Button color="teal_300" shape="round" className="min-w-[83px] !rounded-[17px] font-semibold">
                  {business}
                </Button>
                <Button color="indigo_A700_19" variant="fill" className="min-w-[145px] rounded-[17px] font-semibold">
                  {paymentGateway}
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
              <div className="flex items-start justify-between gap-5 self-stretch">
                <div className="w-[22%]">
                  <Img
                    src="images/img_truebill_logo_v2krsyvgz.png"
                    alt="truebilllogo"
                    className="h-[80px] w-[80px] object-cover"
                  />
                </div>
                <Button color="gray_50" variant="fill" shape="square" className="min-w-[75px]">
                  {p7jobs1}
                </Button>
              </div>
              <div className="flex flex-col items-start gap-[15px] self-stretch">
                <Heading as="h4">{komodo1}</Heading>
                <Text size="2xl" as="p" className="w-full leading-[160%]">
                  {komodoisan}
                </Text>
              </div>
              <Button color="teal_300" shape="round" className="min-w-[83px] !rounded-[17px] font-semibold">
                {business1}
              </Button>
            </div>
            <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
              <div className="flex items-start justify-between gap-5">
                <Img
                  src="images/img_square_logo_xvh9oc2it.png"
                  alt="squarelogo"
                  className="h-[80px] w-[80px] object-cover"
                />
                <Button color="gray_50" variant="fill" shape="square" className="min-w-[75px]">
                  {p7jobs2}
                </Button>
              </div>
              <div className="flex flex-col items-start gap-3.5">
                <Heading as="h4">{komodo2}</Heading>
                <Text size="2xl" as="p" className="w-full leading-[160%]">
                  {komodoisan1}
                </Text>
              </div>
              <div className="flex gap-4">
                <Button color="teal_300" shape="round" className="min-w-[83px] !rounded-[17px] font-semibold">
                  {business2}
                </Button>
                <Button color="yellow_700" shape="round" className="min-w-[97px] !rounded-[17px] font-semibold">
                  {blockchain}
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
              <div className="flex items-start justify-between gap-5">
                <Img
                  src="images/img_ey9yojwxeaub1op.png"
                  alt="ey9yojwxeaub1op"
                  className="h-[88px] w-[88px] rounded-[50%]"
                />
                <Button color="gray_50" variant="fill" shape="square" className="min-w-[75px]">
                  {p7jobs3}
                </Button>
              </div>
              <div className="flex flex-col items-start gap-4">
                <Heading as="h4">{komodo3}</Heading>
                <Text size="2xl" as="p" className="w-full leading-[160%]">
                  {description1}
                </Text>
              </div>
              <div className="flex gap-4">
                <Button color="teal_300" shape="round" className="min-w-[83px] !rounded-[17px] font-semibold">
                  {business3}
                </Button>
                <Button color="yellow_700" shape="round" className="min-w-[97px] !rounded-[17px] font-semibold">
                  {blockchain1}
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
              <div className="flex items-start justify-between gap-5 self-stretch">
                <Img src="images/img_dzjpswtd_400x400.png" alt="dzjpswtd" className="h-[88px] w-[88px] object-cover" />
                <Button color="gray_50" variant="fill" shape="square" className="min-w-[75px]">
                  {p7jobs4}
                </Button>
              </div>
              <div className="flex flex-col items-start gap-[15px] self-stretch">
                <Heading as="h4">{komodo4}</Heading>
                <Text size="2xl" as="p" className="w-full leading-[160%]">
                  {komodoisan2}
                </Text>
              </div>
              <Button color="teal_300" shape="round" className="min-w-[83px] !rounded-[17px] font-semibold">
                {business4}
              </Button>
            </div>
            <div className="flex w-full flex-col gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
              <div className="flex items-start justify-between gap-5">
                <div className="w-[22%]">
                  <Img src="images/img_1548817766621.png" alt="image" className="h-[80px] w-[80px] object-cover" />
                </div>
                <Button color="gray_50" variant="fill" shape="square" className="min-w-[75px]">
                  {p7jobs5}
                </Button>
              </div>
              <div className="flex flex-col items-start gap-[15px]">
                <Heading as="h4">{komodo5}</Heading>
                <Text size="2xl" as="p" className="w-full leading-[160%]">
                  {komodoisan3}
                </Text>
              </div>
              <div className="flex gap-4">
                <Button color="teal_300" shape="round" className="min-w-[83px] !rounded-[17px] font-semibold">
                  {business5}
                </Button>
                <Button color="yellow_700" shape="round" className="min-w-[97px] !rounded-[17px] font-semibold">
                  {blockchain2}
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-[15px] border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
              <div className="flex items-start justify-between gap-5 self-stretch">
                <Img
                  src="images/img_bvboaeet_400x400_88x88.png"
                  alt="bvboaeet"
                  className="h-[88px] w-[88px] rounded-[50%]"
                />
                <Button color="gray_50" variant="fill" shape="square" className="min-w-[75px]">
                  {p7jobs6}
                </Button>
              </div>
              <div className="flex flex-col items-start gap-[15px] self-stretch">
                <Heading as="h4">{komodo6}</Heading>
                <Text size="2xl" as="p" className="w-full leading-[160%]">
                  {komodoisan4}
                </Text>
              </div>
              <Button color="teal_300" shape="round" className="min-w-[83px] !rounded-[17px] font-semibold">
                {business6}
              </Button>
            </div>
            <div className="flex w-full flex-col gap-4 border border-solid border-gray-300 bg-white-A700 p-6 sm:p-5">
              <div className="flex items-start justify-between gap-5">
                <div className="w-[22%]">
                  <Img
                    src="images/img_divvy_logo_f0rwkqp73.png"
                    alt="divvylogo"
                    className="h-[80px] w-[80px] rounded-[50%]"
                  />
                </div>
                <Button color="gray_50" variant="fill" shape="square" className="min-w-[75px]">
                  {p7jobs7}
                </Button>
              </div>
              <div className="flex flex-col items-start gap-3.5">
                <Heading as="h4">{komodo7}</Heading>
                <Text size="2xl" as="p" className="w-full leading-[160%]">
                  {komodoisan5}
                </Text>
              </div>
              <div className="flex gap-4">
                <Button color="teal_300" shape="round" className="min-w-[83px] !rounded-[17px] font-semibold">
                  {business7}
                </Button>
                <Button color="yellow_700" shape="round" className="min-w-[97px] !rounded-[17px] font-semibold">
                  {blockchain3}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-[31%] items-start justify-between gap-5 md:w-full">
            <Img src="images/img_arrow_left_indigo_a700.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
            <Text as="p" className="mt-[9px] text-center !text-blue_gray-400">
              {one}
            </Text>
            <Button size="xl" variant="fill" className="min-w-[42px] rounded font-inter font-semibold">
              {two}
            </Button>
            <Text as="p" className="mt-[9px] !text-blue_gray-400">
              {three}
            </Text>
            <Text as="p" className="mt-[9px] h-[17px] w-[16px] !text-blue_gray-400">
              {prop}
            </Text>
            <Text as="p" className="mt-[9px] h-[17px] w-[16px] !text-blue_gray-400">
              {ten}
            </Text>
            <Img src="images/img_arrow_left_indigo_a700.svg" alt="arrowright" className="h-[24px] w-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
