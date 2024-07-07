"use client";

import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type RadioProps<T extends FieldValues> = UseControllerProps<T> & {
  value: string | number;
  className?: string;
  disabled?: boolean;
  label?: string;
  id?: string;
};

export default function Radio<T extends FieldValues>({
  control,
  name,
  value,
  className,
  disabled,
  ...props
}: RadioProps<T>) {
  const {
    field: { onChange },
  } = useController({
    control,
    name,
  });
  return (
    <div className="flex items-center">
      <input
        type="radio"
        onChange={onChange}
        name={name}
        {...props}
        value={value}
        disabled={disabled}
      />
      {props.label && (
        <label htmlFor={props.id} className="select-none cursor-pointer pl-2">
          {props.label}
        </label>
      )}
    </div>
  );
}
