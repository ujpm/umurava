
import { Button} from "./Button";
import { Text } from "./Text";
import { Heading } from "./Heading";
import { Img } from "./Img";
interface Props {
    className?: string;
}
export default function ChallengesHackathonsPageChallengeCard ({ ...props }: Props) {
    return ( 
    <div 
    {...props}
    className={`${props.className} flex flex-col justify-center w-full gap-5 py-3 border-[#e4e7ec] border-[0.83px] border-solid bg-[#ffffff] rounded-lg`}>
        <div className="mx-3.5 flex flex-col items-center gap-[18px] self-stretch rounded-lg bg-[#2b71f0] px-1.5 py-2.5">
        <Button color="green_800" size="sm" className="min-w-[68px] self-end rounded-[10px] px-[18px] font-medium">
            Open
        </Button>
        <Img
            src="images/img_white_transplarent_words.png"
            alt="White"
            className="mb-10 ml-[30px] mr-8 h-[60px] w-full object-cover"
            /> 
        </div>
        
        <div className="mx-[18px] flex flex-col items-center justify-center gap-3.5 self-stretch"> 
            <Heading size="headinglg" as="p" className="text-[14.87px] font-semibold !text-[#101828]"> 
                Design a Dashboard for SokoFund
            </Heading>
            <div className="flex flex-col items-start gap-2 self-stretch">
                <div className="flex flex-col items-start justify-center gap-1 self-stretch">
                    <Heading size="headingxs" as="p" className="text-[9.91px] font-semibold !text-[#25272a]"> 
                        Skills Needed:
                    </Heading>
                    <div className="flex flex-wrap self-stretch">
                        <Heading
                            size="textmd"
                            as="p"
                            className="rounded-lg border-[0.67px] border-solid border-[#2b71f0] px-1 !font-['Inter'] text-[12px] font-medium tracking-[-0.06px] !text-[#2b71f0]">
                            UI/UX Design
                        </Heading>
                        <Heading
                            size="textmd"
                            as="p"
                            className="ml-1.5 rounded-lg border-[0.67px] border-solid border- [#2b71f0] p-0.5 !font-['Inter'] text-[12px] font-medium tracking-[-0.06px] !text-[#2b71f0]">
                            User Research
                        </Heading>
                        <Heading
                            size="textmd"
                            as="p"                        
                            className="ml-1.5 rounded-lg border-[0.67px] border-solid border-[#2b71f0] p-0.5 !font-['Inter'] text-[12px] font-medium tracking-[-0.0px] !text-[#2b71f0]">
                            User Research
                        </Heading>
                    </div> 
                </div>
                <Text size="textxs" as="p" className="text-[9.91px] font-normal">
                    <span className="text-[11.75px] font-semibold text-[#171717] ">Seniority Level:</span> 
                    <span className="text-[#475267]">&nbsp; (Junior, Intermediate, Senior)</span> 
                </Text>
                <div className="flex self-stretch">
                    <Text size="textxs" as="p" className="text-[9.91px] font-normal">
                        <span className="text-[11.75px] font-semibold text-[#171717]">Timeline:</span>
                        <span className="text-[11.75px] font-semibold text - [#475267]">&nbsp;</span> 
                        <span className="text-[#475267] ">&nbsp; 15 Days</span>
                    </Text> 
                </div> 

        </div>
        <div className="flex flex-col items-start gap-2.5 self-stretch">
            <div className="h-[1.08px] w-full self-stretch bg-[#e4e7ec]" />
                <Button size="xl" shape="round" className="ml-[18px] min-w-[112px] rounded-md px-3 font-semibold"> 
                    View Challenge
                </Button>
            </div>
        </div>
        </div>
    );
}