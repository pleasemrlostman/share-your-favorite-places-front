"use client";

import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { FC, ReactNode } from "react";
import { FieldValues, useController } from "react-hook-form";
import { InputTypes } from "./text-types";

const TextVariants = cva(
  `px-4 py-2 bg-grey border border-line rounded focus:outline-none text-sm placeholder:text-[.75rem] placeholder:text-text`,
  {
    variants: {
      widthSize: {
        fit: "w-fit",
        xs: "max-w-18",
        sm: "max-w-36",
        md: "max-w-48",
        lg: "max-w-56",
        xl: "max-w-64",
        default: "w-full",
      },
    },
    defaultVariants: {
      widthSize: "default",
    },
  }
);

export const WithHookForm = <T extends FieldValues>({
  control,
  name,
  rules,
  className,
  placeholder,
  widthSize = "default",
  ...props
}: InputTypes.InputProps<T>) => {
  const {
    field: { onChange },
  } = useController({
    control,
    name,
    rules,
  });

  return (
    <Native
      {...props}
      widthSize={widthSize}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
    />
  );
};

export const Error = ({ errorMessage }: { errorMessage: string }) => {
  return <span className="text-error">{errorMessage}</span>;
};

export const Wrap = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col w-full gap-2">{children}</div>;
};

export const Native: FC<InputTypes.TextNativeProps> = ({
  widthSize = "default",
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      type="text"
      className={cn(TextVariants({ widthSize }), className)}
    />
  );
};
