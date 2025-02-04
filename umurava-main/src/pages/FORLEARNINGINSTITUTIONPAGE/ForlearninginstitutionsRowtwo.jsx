import { Heading, Button, Img } from "../../components";
import React from "react";

export default function ForlearninginstitutionspageRowTwo() {
  return (
    <div>
      <div className="flex justify-center bg-[#f9fafb] py-[4.75rem] md:py-[1.25rem]">
        <div className="container-xs flex justify-center md:px-[1.25rem]">
          <div className="flex w-full flex-col gap-[3.00rem]">
            <div className="flex justify-center p-[0.88rem]">
              <Heading
                size="heading8xl"
                as="h2"
                className="mb-[0.25rem] text-[2.00rem] font-bold tracking-[0.00rem] !text-[#03192e] md:text-[1.88rem] sm:text-[1.75rem]"
              >
                Key Offerings & Benefits:
              </Heading>
            </div>
            <div className="flex flex-col gap-[1.13rem]">
              <div className="flex gap-[1.13rem] md:flex-col">
                <div className="flex w-[30%] flex-col items-start gap-[1.13rem] rounded-lg bg-[#2b71f0] px-[2.38rem] md:w-full sm:px-[1.25rem]">
                  <Button
                    color="white_A700_01"
                    size="11xl"
                    shape="round"
                    className="mt-[2.25rem] w-[3.88rem] rounded-[5px] px-[1.13rem]"
                  >
                    <Img src="images/img_line_duotone_school.svg" />
                  </Button>
                  <Heading
                    size="heading4xl"
                    as="h3"
                    className="w-full text-[1.19rem] font-bold leading-[120%] tracking-[0.00rem]"
                  >
                    Employability and Career Development Opportunities
                  </Heading>
                  <Heading size="textmd" as="h4" className="w-full text-[0.75rem] font-normal leading-[150%]">
                    Students gain hands-on experience working on real-world challenges and help them build professional
                    networks that increase their chances and readiness of landing job opportunities and this lead to
                    career advancement and long-term succes..
                  </Heading>
                </div>
                <div className="flex flex-1 flex-col items-start gap-[1.13rem] rounded-lg bg-[#2b71f0] p-[2.38rem] md:self-stretch sm:p-[1.25rem]">
