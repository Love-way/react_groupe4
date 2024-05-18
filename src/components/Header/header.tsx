import React from "react";

const sizes = {
  "3xl": "text-lg font-semibold",
  "2xl": "text-base font-semibold",
  "5xl": "text-2xl font-semibold md:text-[22px]",
  "4xl": "text-xl font-semibold",
  "7xl": "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  "6xl": "text-[28px] font-semibold md:text-[26px] sm:text-2xl",
  "9xl": "text-7xl font-semibold md:text-5xl",
  "8xl": "text-5xl font-semibold md:text-[44px] sm:text-[38px]",
  xl: "text-sm font-bold",
  s: "text-[7px] font-semibold",
  md: "text-[9px] font-bold",
  xs: "text-[5px] font-semibold",
  lg: "text-xs font-semibold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "5xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-clashdisplayvariable ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
