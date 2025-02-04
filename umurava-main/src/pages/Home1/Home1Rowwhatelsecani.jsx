import { Img, Heading, Text } from "../../components";
import UserProfileEnhancement from "../../components/UserProfileEnhancement";
import React from "react";

export default function Home1Rowwhatelsecani() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-[4.00rem] bg-[#f9fafb] py-[4.75rem] md:py-[1.25rem] sm:gap-[2.00rem]">
        <div className="container-xs md:px-[1.25rem]">
          <div className="flex flex-col items-center gap-[1.50rem] p-[0.38rem]">
            <Heading
              size="heading10xl"
              as="h2"
              className="w-[58%] text-center text-[2.50rem] font-bold leading-[120%] tracking-[0.00rem] !text-[#03192e] md:w-full md:text-[2.38rem] sm:text-[2.25rem]"
            >
              What else can I gain from participating in Skills Challenges ?
            </Heading>
            <Text
              size="text4xl"
              as="p"
              className="w-[54%] text-center !font-['DM_Sans'] text-[1.13rem] font-normal leading-[150%] !text-[#677488] md:w-full"
            >
              Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest
              workforce of digital professionals.{" "}
            </Text>
          </div>
        </div>
        <div className="flex w-[88%] items-start justify-center gap-[2.25rem] md:w-full md:flex-col md:px-[1.25rem]">
          <div className="mt-[2.75rem] grid flex-1 grid-cols-2 gap-[3.75rem] md:grid-cols-1 md:self-stretch">
            <UserProfileEnhancement />
            <UserProfileEnhancement
              headingText="Earn Recognition and Prizes"
              descriptionText="Gain valuable experience and knowledge to advance your career in the digital economy:"
            />
            <UserProfileEnhancement />
            <UserProfileEnhancement
              headingText="Learn from Industry Experts"
              descriptionText="Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces."
            />
            <Heading as="h3" className="w-full text-[0.88rem] font-normal leading-[150%] !text-[#677488]">
              Challenge yourself, learn new skills, and expand your professional network.{" "}
            </Heading>
          </div>
