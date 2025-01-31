import React from "react";

const shapes = {
    square: "rounded-[0px]",
    circle: "rounded-[50%]",
    round:"rounded",
} as const;

const variants = {
    outline: {
        blue_A400: "border- [#2b71f0] border border-solid text-[#2b71f0]",
    },
    
    fill: { 
        red_500: "bg-[#e5523c] text-[#ffffff]", 
        blue_A400: "bg-[#2b71f0] text-[#ffffff]", 
        white_A700_9b: "bg-[#ffffff9b]",
        white_A700_01: "bg-[#ffffff] text-[#98a1b2]", 
        gray_900_04: "bg-[#041738] text-[#ffffff]", 
        green_50: "bg-[#e7f6ec] text-[#2b71f0]", 
        blue_gray_50_01: "bg-[#eff1f4]",
        blue_100: "bg-[#d0e0fc]",
        green_800: "bg-[#0f973d] text-[#ffffff]",
    },
    
} as const;
const sizes = {

    "7xl": "h-[54px] px-[34px] text-[19px]", 
    "2xl": "h-[30px] px-2",
    "11xl": "h-[66px] px-2.5",
    "9xl": "h-[60px] px-8 text-[16px]", 
    "5xl": "h-[46px] px-[18px] text-[14px]", 
    md: "h-[24px] px-1.5",
    xs: "h-[16px] px-0.5 text-[12px]", 
    sm: "h-[22px] px-[18px] text-[11px]", 
    xl: "h-[30px] px-3 text-[11px]", 
    "10xl": "h-[62px] px-[18px]",
    "8xl": "h-[54px] px-4 text-[16px]", 
    "6xl": "h-[46px] px-2.5",
    "4xl": "h-[40px] px-2.5",
    "3xl": "h-[34px] px-3.5 text-[13px]", 
    lg: "h-[28px] px-[22px] text-[14px]",
} as const;


type ButtonProps = Omit< React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "onclick"
> &
Partial<{
className: string;
leftIcon: React.ReactNode;
rightIcon: React.ReactNode;
onClick: () => void;
shape: keyof typeof shapes;
variant: keyof typeof variants | null;
size: keyof typeof sizes;
color: string;
}>;


const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "lg",
    color="blue_A400",
    ...restProps
}) => {
    return (
    <button
        className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes [shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`} {...restProps}>

        {!!leftIcon && leftIcon}
        {children}
        {!! rightIcon && rightIcon}
    </button>
);
};
export { Button };