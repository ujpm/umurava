
import {CloseSVG } from "./Input/Close"; 
import { Button } from "./Button"; 
import { Img } from "./Img";
import { Input } from "./Input/Input";
import React from "react";
interface Props {
    className?: string;
}
export default function Header({ ...props }: Props) {
    const [searchBarValue, setSearchBarValue] = React.useState("");
    return (
    <header {...props} className={`${props.className} flex items-center px-9 sm:px-5 bg-[#ffffff]`}> 
        <div className="mx-auto flex w-full max-w-[1096px] py-3">
            <div className="flex w-full justify-between gap-5 md:flex-col">
            <Input
                color="gray_50_01" 
                shape="round"
                name="search"
                placeholder={`Search here... `}
                value={searchBarValue}
                onChange={(e) => setSearchBarValue(e.target.value)}
                prefix={<Img src="images/img_search.svg" alt="Search" className="h-[20px] w-[20px] object-contain" />} 
                suffix={
                    searchBarValue?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue("")} fillColor="#475267ff" />
                    ) : null
                }
                className="w-[56%] gap-2 rounded-md px-2.5 font-['Inter'] text-[#667185] md:w-full" />
            <div className="flex gap-3">
                <a href="#">
                    <Button color="blue_gray_50_01" size="4xl" shape="circle" className="w-[40px] rounded- [20px] px-2.5"> 
                        <Img src="images/img_icon_bell.svg" />
                    </Button>
                </a>
                <a href="#">
                    <Img src="images/img_image.png" alt="Image" className="h-[40px] rounded- [20px] object-cover" />
                </a>
            </div>
        </div>
    </div>
</header>);}