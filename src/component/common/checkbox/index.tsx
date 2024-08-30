"use clinet";
import { ReactNode } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

export const Wrap = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-2">{children}</div>;
};

export const WithHookForm = <T extends FieldValues>({
  control,
  name,
  onChange,
}: {
  control: Control<T>;
  name: Path<T>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { field } = useController({
    control,
    name,
  });

  return (
    <Native
      {...field}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        field.onChange(e);
      }}
      name={name}
      id={name}
      checked={field.value}
    />
  );
};

export const Label = ({ name, text }: { name: string; text: string }) => {
  return <label htmlFor={name}>{text}</label>;
};

export const Native = ({ className, ...props }: any) => {
  return <input {...props} type="checkbox" className={className} />;
};

export const Error = ({ errorMessage }: { errorMessage: string }) => {
  return <span className="text-error">{errorMessage}</span>;
};
