import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[19px]",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-indigo-A700",
    indigo_A700: "bg-indigo-A700 text-white-A700",
    deep_orange_400_19: "bg-deep_orange-400_19 text-deep_orange-400",
    indigo_A700_0f: "bg-indigo-A700_0f",
    indigo_A700_19: "bg-indigo-A700_19 text-indigo-A700",
    yellow_900_19: "bg-yellow-900_19 text-yellow-700",
    white_A700_19: "bg-white-A700_19",
    gray_50: "bg-gray-50 text-indigo-A700",
    teal_300_19: "bg-teal-300_19 text-teal-300",
  },
  outline: {
    teal_300: "border-teal-300 border border-solid text-teal-300",
    indigo_A700: "border-indigo-A700 border border-solid text-indigo-A700",
    yellow_700: "border-yellow-700 border border-solid text-yellow-700",
  },
} as const;
const sizes = {
  xs: "h-[18px] pl-[18px] pr-[7px] text-[6px]",
  "3xl": "h-[46px] px-[19px] text-base",
  "6xl": "h-[56px] px-4",
  "4xl": "h-[50px] px-[11px]",
  "7xl": "h-[57px] px-[35px] text-lg",
  xl: "h-[38px] px-4 text-sm",
  "2xl": "h-[40px] px-2",
  sm: "h-[30px] px-4 text-sm",
  "5xl": "h-[50px] px-6 text-base",
  md: "h-[32px] px-2.5",
  lg: "h-[34px] pl-[22px] pr-[7px] text-sm",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "lg",
  color = "indigo_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
