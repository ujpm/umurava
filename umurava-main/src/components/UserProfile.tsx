import { Button } from "./Button";
import { Img } from "./Img";
import { Heading } from "./Heading";
import { SelectBox } from "./SelectBox";

import React from "react";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];
interface Props {
    className?: string;
    completedChallengesText?: React.ReactNode;
    completedChallengesCount?: React.ReactNode; 
    buttonText?: string;
}
export default function UserProfile({
    completedChallengesText = "Completed Challenges",
    completedChallengesCount = "5,837",
    buttonText = "15%",
    ...props
}: Props) {
    return (
        <div
        {...props}
        className={`${props.className} flex flex-col items-end w-[32%] md:w-full gap-6 px-3.5 py-2.5 md:px-5 border-[#e4e7ec] border border-solid bg-[#ffffff] rounded-[10px]`}>
        <SelectBox
        shape="square"
        indicator={<Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[16px] w-[16px]" />}
        name="duration"
        placeholder={`Last 30 days`}
        options={dropDownOptions}
        className="w-[30%] gap-1.5 px-3 text-[#98a1b2]" />
        <div className="mb-8 flex items-start justify-between gap-5 self-stretch">
            <Button color="blue_100" size="6xl" className="w-[46px] rounded-[22px] px-2.5"> 
                <Img src="images/img_user.svg" />
            </Button>
            <div className="flex w-[76%] flex-col items-start justify-center gap-1.5 self-center"> 
                <Heading as="p" className="text-[14px] font-medium !text-[#344054]">
                    {completedChallengesText}
                </Heading>
            <div className="flex items-center gap-2.5 self-stretch">
                <Heading size="heading4xl" as="h6" className="text-[18px] font-semibold !text-[#101828]"> 
                    {completedChallengesCount}
                </Heading>
                <Button
                color="green_50"
                size="xs"
                leftIcon={
                    <Img
                        src="images/img_icon_arrowup.svg"
                        alt="Icon / Arrow-up"
                        className="my-0.5 h-[12px] w-[12px] object-contain" />
                }
                className="min-w-[44px] gap-0.5 rounded-lg px-0.5 font-['Inter'] font-medium tracking-[-0.06px]">
                    {buttonText}
                </Button>
            </div>
        </div>
    </div>
</div>
);
}