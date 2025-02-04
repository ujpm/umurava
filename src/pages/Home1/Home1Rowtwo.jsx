import { Text, Heading, Img } from "../../components";
import React from "react";

export default function Home1RowTwo() {
  return (
    <div className="flex justify-center">
      <div className="container-xs flex justify-center md:px-[1.25rem]">
        <div className="relative h-[16.13rem] w-full rounded-[26px] bg-[#2b71f0]">
          <Img
            src="images/img_ellipse_241.png"
            alt="Image"
            className="absolute bottom-[0.00rem] left-[0.00rem] m-auto h-[7.13rem] w-[44%] rotate-[83deg] object-contain"
          />
          <Img
            src="images/img_ellipse_242.png"
            alt="Image"
            className="absolute bottom-0 right-[0.00rem] top-0 my-auto h-[15.38rem] w-[30%] object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center justify-center px-[3.50rem] md:relative md:flex-col md:px-[1.25rem]">
            <div className="flex flex-col items-start">
              <Heading
                size="heading10xl"
                as="h2"
                className="text-[2.50rem] font-bold tracking-[0.00rem] md:text-[2.38rem] sm:text-[2.25rem]"
              >
                1
              </Heading>
              <Text size="text6xl" as="p" className="text-[1.31rem] font-normal !text-[#ffffff]">
                Year
              </Text>
            </div>
            <div className="flex w-[78%] items-center justify-center px-[3.00rem] md:w-full md:px-[1.25rem] sm:flex-col">
              <div className="flex flex-col items-start">
                <Heading
                  size="heading10xl"
                  as="h3"
                  className="text-[2.50rem] font-bold tracking-[0.00rem] md:text-[2.38rem] sm:text-[2.25rem]"
                >
                  500 +
                </Heading>
                <Text size="text6xl" as="p" className="text-[1.31rem] font-normal !text-[#ffffff]">
                  Challenges Completed
                </Text>
