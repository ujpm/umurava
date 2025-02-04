import { Img, Button, Heading, Text, Slider, ChipView } from "../../components";
import React from "react";

export default function Home1RowskillsOne() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `Graphic Design` },
    { value: 2, label: `Data Analysis & Research` },
    { value: 3, label: `Animation` },
    { value: 4, label: `Videography & Photography` },
    { value: 5, label: `Data Science` },
    { value: 6, label: `AI & Maching Learning ` },
    { value: 7, label: `Web3` },
    { value: 8, label: `Digital Marketing & Communications ` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-[#ffffff] py-[3.75rem] md:py-[1.25rem]">
        <div className="container-xs mb-[1.25rem] flex flex-col gap-[6.63rem] md:gap-[4.94rem] md:px-[1.25rem] sm:gap-[3.31rem]">
          <div className="flex flex-col gap-[2.38rem]">
            <div className="flex justify-center px-[3.50rem] md:px-[1.25rem]">
              <div className="flex w-[90%] flex-col items-center gap-[1.00rem] md:w-full">
                <Heading
                  size="heading10xl"
                  as="h2"
                  className="self-stretch text-center text-[2.50rem] font-bold leading-[120%] tracking-[0.00rem] !text-[#03192e] md:text-[2.38rem] sm:text-[2.25rem]"
                >
                  Skills Challenges Cover various in-demand skills and Careers for the digital economy
                </Heading>
                <Text
                  size="text4xl"
                  as="p"
                  className="mb-[1.50rem] !font-['DM_Sans'] text-[1.13rem] font-normal !text-[#677488]"
                >
                  Explore the projects that various talents are working on.{" "}
                </Text>
              </div>
            </div>
            <div className="mx-[7.75rem] flex flex-col items-center gap-[1.25rem] md:mx-0">
              <div className="flex w-[36%] justify-center gap-[1.88rem] md:w-full">
