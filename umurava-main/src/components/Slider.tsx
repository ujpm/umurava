import React from "react";
import AliceCarousel, { Props } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type SliderComponentProps = Props &
Partial<{
    items: React.ReactElement[]; 
    centerMode: string | boolean; 
    magnifiedIndex?: number;
    activeSlideCSS?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
}>;

const Slider = React.forwardRef<AliceCarousel, SliderComponentProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ items = [], activeIndex = 0, centerMode, magnifiedIndex = 0, activeSlideCSS = "scale-75", ...props}, ref) => {
        const isSmall = (index: number) => {
            if (props?.activeIndex + magnifiedIndex >= items?.length) {
                return index !== props?.activeIndex + magnifiedIndex - items?.length;
            } else {
                return index !== props.activeIndex + magnifiedIndex;
            }
        };
        const slideItems = centerMode
            ? items?.map((child: React.ReactElement, index: number) => {
                if (isSmall (index)) {
                    return React.cloneElement(child, {
                        ...child.props,
                        className: [child.props?.className, activeSlideCSS].filter(Boolean).join(" "),
                    });
                }
                return React.cloneElement(child);
            })
            : items;
        return (
            <AliceCarousel
            items={slideItems}
            infinite
            ref={ref}
            {...props}
            touchTracking
            mouseTracking
            disableButtonsControls />
        );
    },
);
export { Slider };