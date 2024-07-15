import { useState } from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

const Checkboxes = <T extends FieldValues>({
  options,
  control,
  name,
}: {
  options: { [key: string]: string }[];
} & UseControllerProps<T>) => {
  const { field } = useController({
    control,
    name,
  });
  const [value, setValue] = useState<Array<string | null>>(field.value || []);

  const handleAllCheckChange = (isChecked: boolean) => {
    if (isChecked) {
      const allOptions = options.map((option) =>
        option.value === "all" ? null : option.value
      );
      setValue(allOptions);
      field.onChange(allOptions);
    } else {
      setValue([]);
      field.onChange([]);
    }
  };

  return (
    <>
      {options.map((option, index) => (
        <label key={option.value}>
          <input
            onChange={(e) => {
              if (option.value === "all")
                return handleAllCheckChange(e.target.checked);

              const valueCopy = [...value];
              valueCopy[index] = e.target.checked ? option.value : null;
              field.onChange(valueCopy);
              setValue(valueCopy);
            }}
            checked={
              option.value === "all"
                ? value.length === options.length
                : value.includes(option.value)
            }
            type="checkbox"
            value={option.value}
          />
          {option.title}
        </label>
      ))}
    </>
  );
};

export default Checkboxes;
