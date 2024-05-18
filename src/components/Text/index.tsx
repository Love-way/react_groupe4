import React from "react";

const sizes = {
  xs: "text-[5px] font-normal",
  lg: "text-sm font-normal",
  s: "text-[6px] font-medium",
  "2xl": "text-lg font-normal",
  "3xl": "text-xl font-normal",
  xl: "text-base font-normal",
  md: "text-[7px] font-medium",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-700 font-epilogue ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
