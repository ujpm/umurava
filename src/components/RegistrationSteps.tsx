import { Text } from "./Text";
import { Heading } from "./Heading";
import { Button } from "./Button";

import React from "react";
interface Props{
    className?:string;
    stepButtonText?: string;
    headerText?: React.ReactNode;
    descriptionText?: React.ReactNode;
}

export default function RegistrationSteps ({
    stepButtonText = "Step 3",
    headerText = "Register and Participate",
    descriptionText = "Sign up for the challenge and start working on the project.",
    ...props
    }: Props) {
    return ( 
    <div
    {...props}
    className={`${props.className} flex flex-col items-start self-stretch gap-3 px-6 py-12 md:py-5 sm:p-5 border- [#0000000c] border border-solid bg-[#ffffff] flex-1 rounded-[12px]`}>
        <Button shape="round" className="min-w-[64px] rounded-[5px] px-3 font-['Inter']">
            {stepButtonText}
        </Button> 
        <Heading
        size="heading6xl"
        as="h5"
        className="ml-4 text-[20px] font-bold tracking-[-0.46px] !text-[#000000] sm: ml-0 sm:text-[17px]">
            {headerText}
        </Heading>
        <Text size="textxl" as="p" className="mb-9 ml-4 text-[15px] font-normal !text-[#000000] sm:ml-0"> 
            {descriptionText}
        </Text>
    </div>
    );
}