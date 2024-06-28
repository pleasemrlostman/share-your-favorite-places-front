"use client";

import { Controller, Control } from "react-hook-form";
import { FormValues } from "user";

type Props = {
  name: string;
  placeholder: string;
  className?: string;
  control: Control<FormValues>;
};

export default function Input({
  name,
  placeholder,
  className,
  control,
}: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => {
        return (
          <>
            <input
              type="text"
              onChange={onChange}
              placeholder={placeholder}
              className={`p-2 bg-grey border border-[#dbdbdb] rounded focus:outline-none text-sm placeholder:text-[.75rem] placeholder:text-text ${className}`}
            />
            {error && (
              <span className="inline-block mt-2">{error.message}</span>
            )}
          </>
        );
      }}
    />
  );
}
