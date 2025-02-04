import { Heading } from "../../components/Heading";
import { Img } from "../../components/Img";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";

import { default as ModalProvider } from "react-modal";
interface Props {
    className: string;
    isOpen: boolean;
}

export default function Community({ isOpen, ...props }: Props) { 
    return (
        <ModalProvider {...props} appElement={document.getElementById("root")!} isOpen={isOpen} className="min-w-[1440px] "> 
            <div className="w-full min-w-[1440px] rounded-[12px] border border-solid border-[#e4e7ec] bg-[#ffffff] py-[60px] md:py-5"> 
                <div className="container-xs flex flex-col items-center gap-10 px-14 md:px-5">
                    <div className="w-[12%] rounded-[66px] bg-[#d0e0fc] p-[34px] md:w-full sm:p-5">
                        <Img src="images/img_bold_duotone_messages.svg" alt="Boldduotone" className="h-[62px] w-full md:h-auto" /> 
                    </div>
                    <div className="flex w-[32%] flex-col items-center justify-center gap-2 md:w-full">
                        <Heading size="heading7xl" as="h1" className="text-[24px] font-semibold !text-[#101828] md:text-[22px] "> 
                            Join our WhatsApp community
                        </Heading>
                        <Text size="text4xl" as="p" className="self-stretch text-center text-[18px] font-normal leading-[145%]">
                            <>                                
                                Get notified on the latest projects
                                <br />
                                and hackathons
                            </>
                        </Text>
                    </div>
                    <Button size="7xl" className="min-w-[130px] rounded-[10px] px-[34px] font-semibold sm:px-5">
                        Join
                    </Button>
                </div>
            </div>
        </ModalProvider>
    );
}