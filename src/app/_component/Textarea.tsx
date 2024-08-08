"use client";

import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type TextAreaProps<T extends FieldValues> = UseControllerProps<T> & {
  className?: string;
};

export default function TextArea<T extends FieldValues>({
  control,
  name,
  className,
  ...props
}: TextAreaProps<T>) {
  const {
    field: { onChange },
  } = useController({
    control,
    name,
  });

  return (
    <textarea
      onChange={onChange}
      name={name}
      {...props}
      className={className}
    />
  );
}
