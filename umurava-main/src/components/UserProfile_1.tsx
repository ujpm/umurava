import { Heading } from "./Heading";
import { Img } from "./Img";
import React from "react";

interface Props {
    className?: string;
    userName?: React.ReactNode;
    userRole?: React.ReactNode;
}

export default function UserProfile_1({ userName = "Hilaire Sh", userRole = "Product Designer", ...props }: Props) { 
    return (
        <div {...props} className={`${props.className} flex items-center self-stretch flex-1`}>
            <div className="w-full border-b border-solid border-[#eff1f4] bg-[#ffffff] p-[18px] ">
                <div className="flex items-center justify-center gap-3">
                    <Img src="images/img_image.png" alt="Hilaire Sh" className="h-[40px] rounded-[20px] object-cover" />
                    <div className="flex flex-1 flex-col items-start gap-0.5">
                        <Heading as="p" className="text-[14px] font-medium !text-[#101828]"> 
                            {userName}
                        </Heading>
                        <Heading as="p" className="text-[14px] font-normal !text - [#475267]"> 
                            {userRole}
                        </Heading>
                    </div>
                </div>
            </div>
        </div>
    );
}