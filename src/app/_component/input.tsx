import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

const Input = <T extends FieldValues>(props: UseControllerProps<T>) => {
  const { field } = useController(props);

  return <input type="text" {...field} />;
};

export default Input;
