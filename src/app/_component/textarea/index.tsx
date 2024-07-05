"use client";

import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

export default function TextArea<T extends FieldValues>({
  control,
  name,
  ...props
}: UseControllerProps<T>) {
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
      className={props.className}
    />
  );
}
