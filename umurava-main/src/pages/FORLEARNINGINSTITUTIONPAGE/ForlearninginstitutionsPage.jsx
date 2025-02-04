import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function ForlearninginstitutionspageRow() {
  return (
    <div>
      <div className="flex justify-center bg-[#ffffff] py-[5.50rem] md:py-[1.25rem]">
        <div className="container-xs flex items-center justify-center md:flex-col md:px-[1.25rem]">
          <div className="flex w-full flex-col items-start gap-[2.00rem]">
            <div className="flex flex-col gap-[2.00rem] self-stretch">
              <Heading
                size="heading7xl"
                as="h1"
                className="text-[1.75rem] font-bold leading-[120%] tracking-[0.00rem] !text-[#2b71f0] md:text-[1.63rem] sm:text-[1.50rem]"
              >
                Accelerate Your Students and Traineess Employability and Career Growth through Project-based Learning
                Solution
              </Heading>
              <Text
                size="text5xl"
                as="p"
                className="w-[86%] text-justify text-[1.25rem] font-normal leading-[150%] !text-[#2b3338] md:w-full"
              >
                We partner with Universities, Schools, and Trainining Institutions to build the work experience of their
                students and trainees through project based learning challenges and hackathons
              </Text>
            </div>
            <Button
              size="9xl"
              shape="round"
              className="min-w-[12.88rem] rounded-md px-[2.13rem] font-semibold tracking-[0.00rem] sm:px-[1.25rem]"
            >
              Partner with us
            </Button>
          </div>
          <div className="relative h-[23.50rem] w-full content-center rounded-[32px] bg-[#ffffff] md:h-auto">
            <div className="flex flex-1 flex-col items-end">
              <Img
                src="images/img_ellipse_249.png"
                alt="Image"
                className="relative z-[1] h-[6.50rem] w-[46%] object-contain"
              />
              <Img
