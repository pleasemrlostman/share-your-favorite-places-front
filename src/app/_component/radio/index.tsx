"use client";

import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

export default function Radio<T extends FieldValues>({
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
    <input
      type="radio"
      onChange={onChange}
      name={name}
      {...props}
      value={props.value}
      disabled={props.disabled}
      className={props.className}
    />
  );
}
