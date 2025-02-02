import { Heading } from "./Heading";
import { Img } from "./Img";
import { Button } from "./Button";

interface Props {
    className?: string;
    completedChallengesLabel?: React.ReactNode;
    completedChallengesNumber?: React.ReactNode;
}
export default function UserProfileSummary({
    completedChallengesLabel = "Completed Challenges",
    completedChallengesNumber = "05",
    ...props
}: Props) { 
    return ( 
        <div
        {...props}
        className={`${props.className} flex justify-center items-center w-[32%] md:w-full gap-3.5 px-3.5 py-7 md:px-5 sm:p-5 border-[#e4e7ec] border-[0.95px] border-solid bg-[#ffffff] rounded-[10px]`}>
            <div className="flex flex-1 justify-center gap-2">
                <div className="h-[44px] w-[5px] rounded-sm bg-[#2b71f0]" />
                <div className="flex flex-1 flex-col items-start gap-0.5">
                    <Heading as="p" className="text-[14px] font-medium !text-[#344054]"> 
                        {completedChallengesLabel}
                    </Heading>
                    <Heading
                    size="heading5xl"
                    as="h6"
                    className="text-[19.03px] font-semibold tracking-[-0.38px] !text-[#344054]">
                        {completedChallengesNumber}
                    </Heading>
                </div>
            </div>
            <Button color="blue_100" size="6xl" className="w-[46px] rounded-[22px] px-2.5">
                <Img src="images/img_user.svg" />
            </Button>
        </div>
    );
}