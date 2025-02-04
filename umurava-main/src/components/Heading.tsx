
import React from "react";
const sizes = {
    headingxs: "text-[9px] font-semibold", 
    textmd: "text-[12px] font-medium", 
    textlg: "text-[14px] font-medium", 
    headings: "text-[10px] font-bold", 
    headingmd: "text-[11px] font-semibold", 
    headinglg: "text-[14px] font-semibold", 
    headingxl: "text-[15px] font-semibold", 
    heading2xl: "text-[16px] font-bold",
    heading3xl: "text-[17px] font-semibold", 
    heading4xl: "text-[18px] font-semibold", 
    heading5xl: "text-[19px] font-bold",
    heading6xl: "text-[20px] font-semibold",
    heading7xl: "text-[24px] font-bold md:text-[22px]",
    heading8xl: "text-[28px] font-bold md:text-[26px] sm:text-[24px]", 
    heading9xl: "text-[32px] font-bold md:text-[30px] sm:text-[28px]", 
    heading10xl: "text-[36px] font-bold md:text-[34px] sm:text-[32px]", 
    headingllxl: "text-[40px] font-bold md:text-[38px] sm:text-[36px]", 
    heading12xl: "text-[44px] font-bold md:text-[40px] sm:text-[34px]",
}
export type HeadingProps = Partial<{
    className: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    as: any;
    size: keyof typeof sizes;
}> & React.DetailedHTMLProps<React.HTMLAttributes <HTMLSpanElement>, HTMLSpanElement>;
const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
    children,
    className = "",
    size = "textlg",
    as,
    ...restProps
}) => {
    const Component = as || "h6";
    return (
        <Component
            className={`text-[#ffffff] font-['Work_Sans'] ${className} ${sizes[size] as keyof typeof sizes}`}
            {...restProps}>
            {children}
        </Component>
);
};
export { Heading };