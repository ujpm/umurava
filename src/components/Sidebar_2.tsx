/* eslint-disable @typescript-eslint/no-unused-vars */
import { Img } from "./Img";
import { Heading } from "./Heading";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import React from "react";
interface Props{
    className?:string;
}
export default function Sidebar_2({ ...props }: Props) { 
    const [collapsed, setCollapsed] = React.useState(false);
    //function to collapse/expand the sidebar 
    function collapseSidebar() {
    setCollapsed (!collapsed)
    }
    return (
        <Sidebar
        {...props}
        width="274px !important"
        collapsedWidth="80px !important"
        collapsed={collapsed}
        rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 32 } }}
        className={`${props.className} flex flex-col h-screen pt-8 gap-8 top-0 sm:pt-5 !border-[#e4e7ec] !border-r !border-solid bg-[#2b71f0] !sticky overflow-auto`}>
            <Img src="images/img_sidebar_logo.png" alt="Sidebarlogo" className="ml-6 h-[34px] w-[54px] object-contain" />
            <Menu
            menuItemStyles={{
                button: {
                    padding: "12px", 
                    gap: "12px", 
                    color: "#ffffff",
                    fontWeight: 400, 
                    fontSize: "14px",
                    borderRadius: "4px",
                    [`&:hover, &.ps-active`]: { color: "#2b71f0", backgroundColor: "#ffffff !important" },
                },
            }}
            rootStyles={{ ["&>ul"]: { gap: "552px" } }}
            className="flex w-full flex-col self-stretch px-2">
            <div className="flex flex-col gap-0.5">
                <MenuItem
                    icon={<Img src="images/img_icon_home_white_a700_01.svg" alt="Iconhome" className="h-[20px] w-[20px]" />}>
                    Dashboard
                </MenuItem>
                <MenuItem
                    icon={<Img src="images/img_icon_file_blue_a400.svg" alt="Iconfile" className="h-[20px] w-[20px]" />}>
                    Challenges & Hackathons
                </MenuItem>
                <MenuItem icon={<Img src="images/img_broken_users.svg" alt="Brokenusers" className="h-[20px] w-[20px]" />}> 
                    Community
                </MenuItem>
            </div>
            <div className="flex flex-col gap-0.5">
                <MenuItem icon={<Img src="images/img_icon_settings.svg" alt="Iconsettings" className="h-[20px] w-[20px]" />}> 
                    Settings
                </MenuItem>
                <MenuItem icon={<Img src="images/img_icon_headset.svg" alt="Iconheadset" className="h-[20px] w-[20px]" />}> 
                Help Center
                </MenuItem>
                <MenuItem icon={<Img src="images/img_icon_gift.svg" alt="Icongift" className="h-[20px] w-[20px]" />}> 
                    Refer family & friends
                </MenuItem>
            </div>
        </Menu>
        {!collapsed? (
            <div className="flex items-center justify-center gap-5 self-stretch p-[18px] ">
                <div className="flex flex-1 gap-3">
                    <div className="relative h-[40px] w-[22%] content-center">            
                        <Img src="images/img_image.png" alt="Image" className="h-[40px] w-full rounded-[20px] object-cover" />
                        <div className="absolute bottom-0.5 right-0 m-auto h-[10px] w-[10px] rounded-[5px] border border-solid border-[#ffffff] bg-[#037f2d]" />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-center gap-0.5">
                        <Heading as="p" className="text-[14px] font-normal">
                            Hilaire Sh
                        </Heading>
                        <Heading as="p" className="text-[14px] font-normal"> 
                            hilaire@uidesign
                        </Heading>
                    </div>
                </div>
                <Img src="images/img_icon_sign_out.svg" alt="Iconsignout" className="h-[20px]" />
            </div>
        ) : null}
    </Sidebar>
    );
}

