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
  rules,
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
    rules: { required: true, ...rules },
  });

  return (
    <div className="flex flex-col w-full">
      <input
        type="text"
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        {...props}
        className={`p-2 bg-grey border border-[#dbdbdb] rounded focus:outline-none text-sm placeholder:text-[.75rem] placeholder:text-text ${className}`}
      />
      {error && (
        <span className="inline-block mt-2 text-sm text-error">
          {error.message}
        </span>
      )}
    </div>
  );
}
