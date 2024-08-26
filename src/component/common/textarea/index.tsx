"use client"

import { FieldValues, useController } from "react-hook-form";
import { TextareaTypes } from "@/component/common/textarea/textarea-types";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { FC } from "react";

const TextareaVariants = cva(
`rounded-md resize-none p-4 focus:outline-none`, {
  variants: {
    variant: {
      default: "border",
      gray: "bg-[#F0F4F8]",
    },
    size: {
      default: "w-full",
      fit: "w-fit",
      sm: "w-1/4",
      md: "w-2/4",
      lg: "w-3/4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
}
)

export default function TextareaWithHookForm<T extends FieldValues>({
  control,
  name,
  className,
  placeholder,
  variant,
  size,
  ...props
}: TextareaTypes.TextareaProps<T>) {
  const {
    field: { onChange },
  } = useController({
    control,
    name,
  });

  return (
    <Textarea
      {...props}
      variant={variant}
      size={size}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
    />
  )
}

export const Textarea: FC<TextareaTypes.TextNativeProps> = ({
  variant,
  size,
  disabled,
  className,
  ...props
}) => {
  return (
    <textarea
      {...props}
      disabled={disabled}
      className={cn(TextareaVariants({variant, size}), className)}
    />
  )
}