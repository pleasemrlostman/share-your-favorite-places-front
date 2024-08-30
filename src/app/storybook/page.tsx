"use client";

import { FieldErrors, useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// import TextArea from "@/component/common/Textarea";
// import * as Radio from "@/component/common/Radio";
// import Checkbox from "@/component/common/Checkbox";
// import * as Select from "@/component/common/Select";

// refacot component
import Button from "@/component/common/button/index";
import * as Text from "@/component/common/text/index";
import Textarea from "@/component/common/textarea/index";
import * as Checkbox from "@/component/common/checkbox/index";
import { useCheckboxHandlers } from "@/hooks/useCheckboxHandlers";

type StoryboookProps = {
  input: string;
  area: string;
  radio: string;
  single: string;
  all: string[];
  select: number;
  checkboxAll: boolean;
  checkboxTest: { checked: boolean }[];
};

const checkedFalse = { checked: false };
const checkboxTestDefaultValue = [checkedFalse, checkedFalse, checkedFalse];
const defaultValues = {
  input: "",
  area: "",
  radio: "",
  single: "",
  all: [],
  select: 2,
  checkboxAll: false,
  checkboxTest: checkboxTestDefaultValue,
};

export default function Storybook() {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<StoryboookProps>({
    defaultValues: defaultValues,
  });

  // 필드어레이를 이용하려면 무조건 객체[]를 기본값을 세팅해야함
  const { fields, update } = useFieldArray({
    control: control,
    name: "checkboxTest",
  });

  const onSubmit = () => {};

  const { handlerAllCheckbox, handlerCheckbox } = useCheckboxHandlers({
    setValue,
    getValues,
    update,
    defaultValues: checkboxTestDefaultValue,
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl m-auto p-4 border"
      >
        <div className="flex flex-col items-start gap-10">
          <Text.Wrap>
            <Text.WithHookForm
              control={control}
              name="input"
              rules={{
                maxLength: {
                  value: 2,
                  message: "value 2 merror message",
                },
              }}
            />
            {errors?.input?.message && (
              <Text.Error errorMessage={errors.input.message} />
            )}
          </Text.Wrap>
          <Checkbox.Wrap>
            <Checkbox.WithHookForm
              control={control}
              name="checkboxAll"
              onChange={(e: any) => {
                handlerAllCheckbox(e);
              }}
            />
            <Checkbox.Label name="checkboxAll" text="전체선택" />
          </Checkbox.Wrap>
          {fields.map((field, index) => {
            return (
              <Checkbox.Wrap key={field.id}>
                <Checkbox.WithHookForm
                  control={control}
                  name={`checkboxTest.${index}.checked`}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handlerCheckbox(e);
                  }}
                />
                <Checkbox.Label
                  name={`checkboxTest.${index}.checked`}
                  text={`체크박스 ${index}`}
                />
              </Checkbox.Wrap>
            );
          })}
          <Button type="submit" label="SUBMIT" />
          {/* <Select.Wrapper className="w-full">
              <Select.Inner control={control} name="select" />
            </Select.Wrapper> */}
        </div>
        <DevTool control={control} />
      </form>
    </>
  );
}
