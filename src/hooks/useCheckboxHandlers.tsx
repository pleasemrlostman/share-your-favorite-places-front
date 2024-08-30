"use client";

import { useCallback } from "react";
import {
  UseFormSetValue,
  UseFormGetValues,
  FieldValues,
  UseFieldArrayUpdate,
  FieldArray,
  ArrayPath,
  Path,
  PathValue,
} from "react-hook-form";

type UseCheckboxHandlersProps<T extends FieldValues> = {
  setValue: UseFormSetValue<T>;
  getValues: UseFormGetValues<T>;
  update: UseFieldArrayUpdate<T>;
  defaultValues: {
    checked: boolean;
  }[];
};

export const useCheckboxHandlers = <T extends FieldValues>({
  setValue,
  getValues,
  update,
  defaultValues,
}: UseCheckboxHandlersProps<T>) => {
  const handlerAllCheckbox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const beforeClickedStatus = e.target.value === "true" ? false : true;
      if (beforeClickedStatus) {
        defaultValues?.forEach((_: { checked: boolean }, index: number) => {
          update(index, { checked: true } as FieldArray<T, ArrayPath<T>>);
        });
      } else {
        defaultValues?.forEach((_: { checked: boolean }, index: number) => {
          update(index, { checked: false } as FieldArray<T, ArrayPath<T>>);
        });
      }
    },
    [defaultValues, update]
  );

  const handlerCheckbox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const beforeClickedStatus = e.target.value === "true" ? false : true;
      if (beforeClickedStatus) {
        const checkedLength = getValues("checkboxTest" as Path<T>)
          .map((value: any) => value.checked)
          .filter((value: boolean) => value === true).length;
        if (checkedLength + 1 === getValues("checkboxTest" as Path<T>).length) {
          setValue("checkboxAll" as Path<T>, true as PathValue<T, Path<T>>);
        }
      } else {
        setValue("checkboxAll" as Path<T>, false as PathValue<T, Path<T>>);
      }
    },
    [getValues, setValue]
  );

  return {
    handlerAllCheckbox,
    handlerCheckbox,
  };
};
