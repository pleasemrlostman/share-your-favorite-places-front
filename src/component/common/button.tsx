"use client";

import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/index";

const ButtonVariants = cva(
  `
    flex justify-center items-center rounded-md 
    text-sm font-bold text-white w-fit
    `,
  {
    variants: {
      variant: {
        default: "bg-main border-main",
        gray: "bg-text",
        navy: "bg-navy",
        red: "bg-error",
        test: "bg-test",
        lime: "bg-lime-600",
        kkk: "bg-yellow-950",
        violet: "bg-violet-500",
        test4: "bg-test4",
      },
      size: {
        sm: "px-2 py-1",
        default: "px-4 py-2",
        md: "px-5 py-3",
        lg: "px-6 py-4",
        xl: "px-7 py-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  label?: string;
  children?: React.ReactElement;
}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  label,
  ...props
}) => {
  return (
    <button className={cn(ButtonVariants({ variant, size }))} {...props}>
      {children && children}
      {label && label}
    </button>
  );
};

export default Button;
