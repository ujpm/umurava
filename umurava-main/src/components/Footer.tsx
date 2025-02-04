import { Text } from "./Text";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Img } from "./Img";
import { Input } from "./Input/Input";

interface Props{
    className?:string;
}

export default function Footer({ ...props }: Props) { 
    return (
        <footer {...props} className={`${props.className} flex justify-center items-end py-[22px] sm:py-5 bg-[#001a40]` }> 
            <div className="container-xs mt-[26px] flex justify-center md:px-5">
                <div className="flex w-full flex-col gap-[34px] ">
                    <div className="flex flex-col gap-[30px] ">
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center justify-between gap-5">
                                <div className="flex">
                                    <Img src="images/img_footer_logo.png" alt="Footerlogo" className="h-[72px] w-[78px] object-contain" /> 
                                </div>
                                <div className="flex gap-1.5">
                                    <Button color="white_A700_01" size="4xl" shape="circle" className="w-[40px] rounded-[20px] px-1.5"> 
                                        <Img src="images/img_facebook.svg" />
                                    </Button>
                                    <Button color="white_A700_01" size="4xl" shape="circle" className="w-[40px] rounded- [20px] px-1.5"> 
                                        <Img src="images/img_facebook.svg" />
                                    </Button>
                                    <Button color="white_A700_01" size="4xl" shape="circle" className="w-[40px] rounded - [20px] px-1.5"> 
                                        <Img src="images/img_facebook.svg" />
                                    </Button>
                                    <Button color="white_A700_01" size="4xl" shape="circle" className="w-[40px] rounded-[20px] px-1.5"> 
                                        <Img src="images/img_facebook.svg" />
                                    </Button>
                                </div>
                            </div>
                            <div className="h-px bg-[#ffffff38]" />
                        </div>
                        <div className="flex items-start justify-between gap-5 md: flex-col">
                            <div className="flex w- [20%] flex-col items-start gap-3 md:w-full">
                                <Heading size="heading7xl" as="h4" className="text-[24px] font-bold md:text-[22px] "> 
                                    Our Address
                                </Heading>
                                <div className="flex flex-col gap-4 self-stretch">
                                    <div className="flex items-center gap-[17px]">
                                        <Img src="images/img_email4_svg.svg" alt="Email4svg" className="h-[12px]" /> 
                                        <Text as="p" className="text-[16px] font-normal !text-[#bbbdbf]">
                                            career@tickets.com
                                        </Text>
                                    </div>
                                    <div className="flex items-start gap-[17px]">
                                        <Img src="images/img_location3_svg.svg" alt="Location3svg" className="h-[20px]" /> 
                                        <Text as="p" className="self-end text-[16px] font-normal !text-[#bbbdbf]"> 
                                            89 KG 14 Ave, Kigali
                                        </Text>
                                    </div>
                                    <div className="mr-[22px] flex items-start gap-[17px] md:mr-0">
                                        <Img src="images/img_phone5_svg.svg" alt="Phone5svg" className="h-[20px]" /> 
                                        <Text as="p" className="self-center text-[16px] font-normal !text-[#bbbdbf]"> 
                                            +250 700 000
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className="mr-2 flex w-[66%] items-start justify-between gap-5 self-center md:mr-0 md: w-full sm:flex-col"> 
                                <div className="flex flex-col items-start gap-3 self-center">
                                    <Heading size="heading7xl" as="h4" className="text-[24px] font-bold md:text-[22px] ">
                                        Quick Links
                                    </Heading>
                                    <ul className="flex flex-col items-start gap-[18px]">
                                        <li>
                                            <a href="Home" target="_blank" rel="noreferrer">
                                                <Text as="p" className="text-[16px] font-normal !text-[#bbbdbf]">
                                                    Home
                                                </Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Program" target="_blank" rel="noreferrer">
                                                <Text as="p" className="text-[16px] font-normal !text-[#bbbdbf]"> 
                                                    Program
                                                </Text>
                                            </a> 
                                        </li>
                                        <li>
                                            <a href="About" target="_blank" rel="noreferrer">
                                                <Text as="p" className="text-[16px] font-normal !text-[#bbbdbf]">
                                                    About
                                                </Text>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <Text as="p" className="text-[16px] font-normal !text-[#bbbdbf]">
                                                    Contact Us
                                                </Text>
                                            </a> 
                                        </li> 
                                    </ul> 
                                </div>
                                <div className="flex w-[50%] flex-col gap-[22px] sm:w-full">
                                    <Heading size="heading7xl" as="h4" className="text-[24px] font-bold leading-7 md:text-[22px] "> 
                                        Join our newsletter to keep up to date with us!
                                    </Heading>
                                    <div className="relative h-[76px] content-center md:h-auto">
                                        <Input size="xl" name="date" placeholder={`Email`} className="flex-grow rounded-[10px] px-7 font-semibold !text-[#bbbdbf] sm:px-5" /> 
                                        <Button size="9xl" className="absolute bottom-0 right-[13px] top-0 my-auto min-w-[146px] rounded-lg px-8 font-bold sm:px-5">
                                            Subscribe
                                        </Button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-px bg-[#ffffff38]" />
                    </div>
                    <div className="flex justify-between gap-5 md:flex-col">
                        <div className="flex w-[30%] justify-center px-1.5 py-2.5 md:w-full">
                            <div className="flex w-full justify-center">
                                <Text size="textxl" as="p" className="text-[15.29px] font-normal !text-[#ffffff]"> 
                                    Copyright © All Rights Reserved SawaPay 2024.
                                </Text>
                            </div>
                        </div>
                            <div className="flex px-3 py-2.5">
                                <ul className="flex flex-wrap gap-2.5">
                                    <li>
                                        <a href="#">
                                            <Text size="textxl" as="p" className="text-[15.29px] font-normal !text-[#ffffff]"> 
                                                Privacy Policy
                                            </Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Text size="textxl" as="p" className="text-[15.29px] font-normal !text-[#ffffff]"> 
                                                Terms and Conditions
                                            </Text>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    );
}

