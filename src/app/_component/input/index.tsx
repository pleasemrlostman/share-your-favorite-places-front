"use client";

import { useController, Control } from "react-hook-form";
import { FormValues } from "user";

type Props = {
  name: string;
  placeholder: string;
  className?: string;
  control: Control<FormValues>;
  rules?: object;
};

export default function Input({
  control,
  name,
  rules,
  placeholder,
  className,
}: Props) {
  const {
    field: { onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true, ...rules },
  });

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        className={`p-2 bg-grey border border-[#dbdbdb] rounded focus:outline-none text-sm placeholder:text-[.75rem] placeholder:text-text ${className}`}
      />
      {error && <span className="inline-block mt-2">{error.message}</span>}
    </>
  );
}
