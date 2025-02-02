
import React from "react";

const sizes = {
    textxs: "text-[9px] font-normal", 
    texts: "text-[11px] font-normal", 
    textxl: "text-[15px] font-normal", 
    text2xl: "text-[16px] font-normal", 
    text3xl: "text-[17px] font-normal", 
    text4xl: "text-[18px] font-normal", 
    text5xl: "text-[20px] font-normal", 
    text6xl: "text-[21px] font-normal",
};
export type TextProps = Partial<{
    className: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    as: any;
    size: keyof typeof sizes;
}> & React.DetailedHTMLProps<React.HTMLAttributes <HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children,
    className = "",
    as,
    size = "text2xl",
    ...restProps
}) => {
    const Component = as || "p";
    return(
        <Component className={`text-[#475267] font-['Work_Sans'] ${className} ${sizes[size as keyof typeof sizes]}`} 
        {...restProps}>
            {children}
        </Component>
    );
};
export { Text };