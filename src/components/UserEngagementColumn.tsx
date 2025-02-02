import { Button } from "./Button";
import { Img } from "./Img";
import { Heading } from "./Heading";
import React from "react";

interface Props {
    className?: string;
    headingtext1?: React. ReactNode;
    paragraphtext1?: React. ReactNode;
    headingtext2?: React. ReactNode;
    paragraphtext2?: React.ReactNode;
}

export default function UserEngagementColumn({
    headingtext1 = "Enhance Your Employment Path",
    paragraphtext1 = "Network with other talented individuals and learn from their experiences ",
    headingtext2 = "Earn Recognition and Prizes",
    paragraphtext2 = "Gain valuable experience and knowledge to advance your career in the digital economy: ", 
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex items-center self-stretch flex-1`}>
            <div className="flex w-[48%] flex-col items-start gap-3 sm:gap-3">
                <Button size="10xl" shape="round" className="w-[62px] rounded-[5px] px-[18px]">
                    <Img src="images/img_linear_school_white_a700_01.svg" />
                </Button>
                <Heading
                size="heading2xl"
                as="h6"
                className="text-[16px] font-bold tracking-[-0.50px] !text-[#060e19] sm:text-[13px]">
                    {headingtext1}
                </Heading>
                <Heading as="p" className="w-[82%] text-[14px] font-normal leading-[150%] !text-[#677488] sm:w-full"> 
                    {paragraphtext1}
                </Heading>
            </div>
            <div className="flex flex-1 flex-col items-start gap-3 md:self-stretch sm:gap-3">
            <Button size="10xl" shape="round" className="w-[62px] rounded-[5px] px-[18px] ">
                <Img src="images/img_linear_school_white_a700_01_62x62.svg" />
            </Button>
            <Heading
            size="heading2xl"
            as="h6"
            className="text-[16px] font-bold tracking-[-0.50px] !text-[#060e19] sm:text-[13px]">
                {headingtext2}
            </Heading>
            <Heading as="p" className="w-[84%] text-[14px] font-normal leading-[150%] !text-[#677488] sm:w-full">
                {paragraphtext2}
            </Heading>
        </div>
    </div>
);
}