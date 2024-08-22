"use client";

import { MouseEvent, ReactNode, useState } from "react";

import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";

const SELECT_COMMON_CLASS = "py-1 px-3";

const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={twMerge("relative", className)}>{children}</div>;
};

const Inner = <T extends FieldValues>({
  control,
  name,
  rules,
  options = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
  ],
  defaultLabel = "선택하기",
  buttonClassName,
  optionClassName,
}: UseControllerProps<T> & {
  options?: Record<string, number>[];
  defaultLabel?: string;
  buttonClassName?: string;
  optionClassName?: string;
}) => {
  const { field } = useController({
    control,
    name,
    rules,
  });
  const [optionOpen, setOptionOpen] = useState(false);

  const handleOptionClick = (event: MouseEvent) => {
    const { value } = event.currentTarget as HTMLLIElement;
    field.onChange(value);
    setOptionOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={twMerge(
          `border rounded-md w-full text-left ${SELECT_COMMON_CLASS}`,
          buttonClassName
        )}
        onClick={() => setOptionOpen((prev) => !prev)}
      >
        {field.value || defaultLabel}
      </button>
      {optionOpen && (
        <ul className="absolute top-[100%] left-[50%] border w-full translate-x-[-50%] translate-y-[4px] rounded-md bg-white z-50">
          {options.map((option) => (
            <li
              key={option.value}
              value={option.value}
              className={twMerge(
                `w-full hover:bg-gray-100 ${SELECT_COMMON_CLASS} ${
                  field.value === option.value
                    ? "bg-gray-100"
                    : "cursor-pointer"
                }`,
                optionClassName
              )}
              onClick={handleOptionClick}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export { Wrapper, Inner };
