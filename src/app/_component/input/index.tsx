"use client";

import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";

type InputProps<T extends FieldValues> = UseControllerProps<T> & {
  placeholder?: string;
  className?: string;
};

export default function Input<T extends FieldValues>({
  control,
  name,
  className,
  placeholder,
  ...props
}: InputProps<T>) {
  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    control,
    name,
    rules: { required: true },
  });

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        {...props}
        className={`p-2 bg-grey border border-[#dbdbdb] rounded focus:outline-none text-sm placeholder:text-[.75rem] placeholder:text-text ${className}`}
      />
      {error && <span className="inline-block mt-2">{error.message}</span>}
    </>
  );
}
