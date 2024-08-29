import { useCallback } from "react";
import {
  useForm,
  useFieldArray,
  UseFormSetValue,
  UseFormGetValues,
  FieldValues,
} from "react-hook-form";

type UseCheckboxHandlersProps = {
  control: any;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  update: any;
  defaultValues: any;
};

export const useCheckboxHandlers = ({
  control,
  setValue,
  getValues,
  update,
  defaultValues,
}: UseCheckboxHandlersProps) => {
  const handlerAllCheckbox = useCallback(
    (e: any) => {
      const beforeClickedStatus = e.target.value === "true" ? false : true;
      if (beforeClickedStatus) {
        defaultValues.checkboxTest.forEach((_, index) => {
          update(index, { checked: true });
        });
      } else {
        defaultValues.checkboxTest.forEach((_, index) => {
          update(index, { checked: false });
        });
      }
    },
    [defaultValues, update]
  );

  const handlerCheckbox = useCallback(
    (e) => {
      const beforeClickedStatus = e.target.value === "true" ? false : true;
      if (beforeClickedStatus) {
        const checkedLength = getValues("checkboxTest")
          .map((value: any) => value.checked)
          .filter((value: boolean) => value === true).length;
        if (checkedLength + 1 === getValues("checkboxTest").length) {
          setValue("checkboxAll", true);
        }
      } else {
        setValue("checkboxAll", false);
      }
    },
    [getValues, setValue]
  );

  return {
    handlerAllCheckbox,
    handlerCheckbox,
  };
};
