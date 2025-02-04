import { Text } from "./Text";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Img } from "./Img";

import React from "react";
interface Props{
    className?:string;
    headingText?:React.ReactNode;
    descriptionText?:React.ReactNode;
}

export default function EnhanceEmploymentPath({
    headingText = "Enhance Your Employment Path",
    descriptionText = "elop the in-demand skills and build a strong portofolio to increase your chances of landing your dream job or contract.", 
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-start w-[50%] md:w-full gap-6 p-12 md:p-5 bg-[#2b71f0] rounded-[12px]`}>
            <Button color="white_A700_01" size="10xl" shape="round" className="w-[62px] rounded-[5px] px-[18px]">
                <Img src="images/img_line_duotone_school.svg" />
            </Button>
            <div className="mb-6 flex flex-col items-start gap-6 self-stretch">
                <Heading size="heading7xl" as="h4" className="text-[24px] font-bold tracking-[-0.50px]"> 
                    {headingText}
                </Heading>
                <Text as="p" className="w-full text-[16px] font-normal leading-[150%] !text-[#ffffff]"> 
                    {descriptionText}
                </Text>
            </div>
        </div>
);}