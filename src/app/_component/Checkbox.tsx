"use client";

import { useState } from "react";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";

type CheckboxProps<T extends FieldValues> = UseControllerProps<T> & {
  value?: string | number;
  label?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  allCheckedType?: boolean;
  data?: {
    id: number;
    value: string;
    label?: string;
    option?: string;
  }[];
};

export default function Checkbox<T extends FieldValues>({
  control,
  name,
  className,
  disabled,
  allCheckedType,
  data,
  ...props
}: CheckboxProps<T>) {
  const {
    field: { onChange, value },
  } = useController({ control, name });

  const [checkboxValue, setCheckboxValue] = useState<string[]>(value ?? []);

  const handleAllChecked = (isChecked: boolean) => {
    if (isChecked) {
      const allCheckedValue = data?.map((list) => list.value) || [];
      setCheckboxValue(allCheckedValue);
      onChange(allCheckedValue);
    } else {
      setCheckboxValue([]);
      onChange([]);
    }
  };

  const handleSingleChecked = (value: string, isChecked: boolean) => {
    const newValue = isChecked
      ? [...checkboxValue, value]
      : checkboxValue.filter((v) => v !== value);

    setCheckboxValue(newValue);
    onChange(newValue);
  };

  if (allCheckedType) {
    return (
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={value.length === data?.length}
          onChange={(e) => handleAllChecked(e.target.checked)}
          name={name}
          {...props}
          disabled={disabled}
          className={className}
          id={props.label}
        />
        {props.label && (
          <label
            htmlFor={props.label}
            className="select-none cursor-pointer pl-2"
          >
            {props.label}
          </label>
        )}
      </div>
    );
  }

  if (data) {
    return (
      <>
        {data.map((item) => (
          <div className="flex items-center" key={item.id}>
            <input
              type="checkbox"
              checked={value.includes(item.value)}
              onChange={(e) =>
                handleSingleChecked(item.value, e.target.checked)
              }
              value={item.value}
              id={item.label}
              disabled={disabled}
            />
            {item.label && (
              <label
                htmlFor={item.label}
                className="select-none cursor-pointer pl-2"
              >
                {item.label}
              </label>
            )}
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={props.checked ?? value === props.value}
        onChange={(e) => {
          const newValue = e.target.checked ? props.value : "";
          onChange(newValue);
        }}
        name={name}
        {...props}
        disabled={disabled}
        className={className}
        id={props.label}
      />
      {props.label && (
        <label
          htmlFor={props.label}
          className="select-none cursor-pointer pl-2"
        >
          {props.label}
        </label>
      )}
    </div>
  );
}
