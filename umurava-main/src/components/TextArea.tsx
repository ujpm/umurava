import React from "react";
const shapes = {
    round: "rounded-md",
} as const;

const variants = {
    tarShadeWhite: "!border- [#d0d4dd] border border-solid bg-[#ffffff]",
} as const;

const sizes = {
    sm: "h-[192px] p-4 text-[16px]",
    xs: "h-[114px] p-4 text-[14px]",
} as const;

type TextAreaProps = Omit<
    React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
    "size" | "prefix" | "type" | "onChange"
> &
Partial<{
    className: string;
    name: string;
    placeholder: string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
}>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
    {
    className = "",
    name = "",
    placeholder = "",
    shape,
    size = "xs",
    variant = "tarShadeWhite",
    onChange,
    ...restProps
    },
    ref,
    ) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement>  = (e) => {
        if (onChange) onChange (e?.target?.value);
    };
    
    return ( 
        <textarea
        ref={ref}
        className={`${className} ${shape && shapes [shape]} ${size && sizes[size]} ${variant && variants[variant]}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
    />
    );
},
);
export { TextArea };