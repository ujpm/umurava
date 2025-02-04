
import React from "react";

const shapes = {
    round: "rounded-md",
} as const;

const variants = {
    fill: {
        white_A700_01: "bg-[#ffffff] text-[#98a1b2]",
        gray_50_01: "bg-[#f9f9fb] shadow-[0_1px_2px_0_#1018280c]",
    } 
}as const;

const sizes = {
    sm: "h-[52px] px-4",
    "2xl": "h-[192px] px-4 text-[16px]",
    xl: "h-[76px] px-7 text-[16px]",
    md: "h-[56px] px-4 text-[14px]",
    lg: "h-[56px] px-4 text-[20px]",
    xs: "h-[40px] px-2.5 text-[14px]",
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> & 
    Partial<{
    label: string;
    prefix: React.ReactNode; 
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
    }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type="text", 
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "xs",
            color="white_A700_01",
            ...restProps
        },
        ref,
    ) => {
        return (
    <label
        className={`${className} flex items-center justify-center cursor-text ${shape && shapes[shape]} ${variant && (variants[variant]?.[color as keyof (typeof variants) [typeof variant]] || variants[variant])} ${size && sizes[size]}`}>
        {!!prefix && prefix}
        {!!label && label}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
    </label>);}
    );
export { Input };