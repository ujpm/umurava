
import { Text } from "./Text";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Img } from "./Img";

import React from "react";
interface Props {
    className?: string;
    emailText?: React.ReactNode;
    contactEmailText?: React.ReactNode;
}
export default function ContactInfo({ 
    emailText = "talent@umurava.africa", 
    contactEmailText = "Contact Email",
    ...props 
}: Props) {
    return (
        <div {...props} className={`${props.className} flex justify-center items-center self-stretch gap-3 flex-1`}> 
            <Button color="blue_100" size="6xl" className="w-[48px] rounded-[24px] px-3">
                <Img src="images/img_frame_1000007652.svg" />
            </Button>
            <div className="flex flex-1 flex-col items-start justify-center">
                <Heading size="heading6xl" as="h5" className="text-[20px] font-semibold tracking-[-0.40px] !text-[#000000]">
                    {emailText}
                </Heading>
                <Text as="p" className="text-[16px] font-normal">
                    {contactEmailText}
                </Text>
            </div>
        </div>
    );
}