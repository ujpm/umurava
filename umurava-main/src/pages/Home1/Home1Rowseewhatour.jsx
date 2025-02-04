import { Heading, Img, Button, Slider, Text } from "../../components";
import React from "react";

export default function Home1Rowseewhatour() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-[6.13rem] bg-[#fffefe] py-[3.88rem] md:gap-[4.56rem] md:py-[1.25rem] sm:gap-[3.06rem]">
        <div className="mt-[2.50rem] flex w-full flex-col items-start gap-[4.25rem] sm:gap-[2.13rem]">
          <div className="container-xs md:px-[1.25rem]">
            <div className="flex flex-col gap-[0.75rem]">
              <div className="flex">
                <Heading
                  size="heading10xl"
                  as="h2"
                  className="w-[58%] text-[2.50rem] font-bold leading-[120%] tracking-[0.00rem] !text-[#03192e] md:text-[2.38rem] sm:text-[2.25rem]"
                >
                  Users are in Love with Skills Challenges Program
                </Heading>
              </div>
              <Text
                size="text4xl"
                as="p"
                className="w-[50%] text-[1.13rem] font-normal leading-[150%] !text-[#677488] md:w-full"
              >
                See what our clients say about working with us. Their success speaks for our dedication and expertise.
              </Text>
            </div>
          </div>
          <div className="mx-auto flex w-[94%] gap-[1.25rem] overflow-x-scroll md:mx-0 md:w-full md:flex-col md:px-[1.25rem]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
              paddingLeft={536}
              paddingRight={223.05999999999995}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
