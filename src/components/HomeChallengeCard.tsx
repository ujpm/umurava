import { Text } from "./Text";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Img } from "./Img";
import { ChipView } from "./ChipView";
import React from "react";
interface Props {
    className?: string;
}
export default function HomeChallengecard({ ...props }: Props) {
    const [chipOptions, setChipOptions] = React.useState(() => [
        { value: 1, label: `UI/UX Design` },
        { value: 2, label: `User Research` },
        { value: 3, label: `User Research` },
    ]);
    const [selectedChipOptions, setSelectedChipOptions] = React.useState<number[]>([]);
    return ( 
    <div {...props} className={`${props.className} flex flex-col justify-center w-[32%] md:w-full gap-[22px] py-4 border-[#e4e7ec] border-[0.98px] border-solid bg-[#ffffff] rounded-[10px]`}>
        <div className="mx-4 flex flex-col items-center gap-[22px] self-stretch rounded-lg bg-[#2b71f0] px-2 py-3">
            <Button color="green_800" className="min-w-[80px] self-end rounded-[12px] px-[22px] font-medium sm:px-5"> 
                Open
            </Button> 
            <Img
                src="images/img_white_transplarent_words.png"
                alt="White"
                className="mh-12 ml-9 mr-[38px] h-[72px] w-full obiect-cover"/>
        </div>
        <div className="mx-[22px] flex flex-col items-center justify-center gap-4 self-stretch"> 
            <Heading size="heading3xl" as="h6" className="text-[17.63px] font-semibold !text-[#101828]"> 
                Design a Dashboard for SokoFund
            </Heading>
            <div className="flex flex-col items-start gap-2.5 self-stretch">
                <div className="flex flex-col items-start gap-2.5 self-stretch">
                    <div className="flex flex-col gap-1 self-stretch">
                        <div className="flex">
                            <Heading size="headingmd" as="p" className="text-[11.75px] font-semibold !text-[#25272a]"> 
                                Skills Needed:
                            </Heading>
                        </div>
                        <ChipView
                        options={chipOptions}
                        setOptions={setChipOptions}
                        values={selectedChipOptions}
                        setValues={setSelectedChipOptions}
                        className="flex flex-wrap gap-x-1.5 gap-y-2"
                        >
                            {(option) => (
                                <React.Fragment key={option.index}> 
                                    {option.isSelected ? (
                                        <div
                                        onClick={option.toggle}
                                        className="flex h-[24px] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-lg border border-solid border-[#2b71f0] bg-[#2b71f033] px-1 font-['Inter'] text-[12px] font-medium tracking-[-0.06px] text-[#2b71f0]">
                                            <span>{option.label}</span>
                                        </div>
                                     ) : (                                    
                                <div
                                onClick={option.toggle}
                                className="flex h-[24px] cursor-pointer flex-row items-center rounded-lg border-[0.8px] border-solid border-[#2b71f0] px-1 font-['Inter'] text-[12px] font-medium tracking-[-0.06px] text-[#2b71f0]">
                                    <span>{option.label}</span>
                                </div>
                                )}
                            </React.Fragment>
                        )}
                    </ChipView>
                </div>
                <Text size="texts" as="p" className="text-[11.75px] font-normal">
                    <span className="font-semibold text-[#171717] ">Seniority Level:</span>
                    <span className="text-[#475267]">&nbsp; (Junior, Intermediate, Senior)</span> 
                </Text>
            </div>
            <Text size="texts" as="p" className="text-[11.75px] font-normal"> 
                <span className="font-semibold text-[#171717] ">Timeline:</span> 
                <span className="font-semibold text-[#475267] ">&nbsp;</span> 
                <span className="text-[#475267]">&nbsp;15 Days</span> 
            </Text>
        </div>
    </div>
    <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="h-[1.28px] w-full self-stretch bg-[#e4e7ec]" />
            <Button size="3xl" className="ml-[22px] min-w-[134px] rounded-md px-3.5 font-semibold"> 
                View Challenge
            </Button>
        </div>
    </div>
    );
}