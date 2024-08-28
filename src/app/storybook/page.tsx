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
import { useEffect } from "react";

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
const checkedTrue = { checked: true };
const defaultValues = {
  input: "",
  area: "",
  radio: "",
  single: "",
  all: [],
  select: 2,
  checkboxAll: false,
  checkboxTest: [checkedFalse, checkedFalse, checkedFalse],
};

export default function Storybook() {
  const {
    watch,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StoryboookProps>({
    defaultValues: defaultValues,
  });

  // 필드어레이를 이용하려면 무조건 객체[]를 기본값을 세팅해야함
  const { fields, update } = useFieldArray({
    control: control,
    name: "checkboxTest",
  });

  const selectAll = watch("checkboxAll");

  useEffect(() => {
    if (selectAll) {
      defaultValues.checkboxTest.forEach((_, index) => {
        update(index, checkedTrue);
      });
    } else {
      defaultValues.checkboxTest.forEach((_, index) => {
        update(index, checkedFalse);
      });
    }
  }, [selectAll]);

  useEffect(() => {}, [watch("checkboxTest").map((value) => value.checked)]);

  const onSubmit = (data: StoryboookProps) => {
    console.log("data", data);
  };
  const onError = (error: FieldErrors<StoryboookProps>) => {
    console.log("error", error);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
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
            <br />
            {/* <Text.Native />
            <Text.Native widthSize="fit" />
            <Text.Native widthSize="xs" />
            <Text.Native widthSize="sm" />
            <Text.Native widthSize="md" />
            <Text.Native widthSize="lg" />
            <Text.Native widthSize="xl" /> */}
          </Text.Wrap>
          <Checkbox.Wrap>
            <Checkbox.WithHookForm
              control={control}
              name="checkboxAll"
              id="checkboxAll"
            />
            <Checkbox.Label name="checkboxAll" text="전체선택" />
          </Checkbox.Wrap>
          {fields.map((field, index) => {
            const name = `checkboxTest.${index}.checked`;
            return (
              <Checkbox.Wrap key={field.id}>
                <Checkbox.WithHookForm
                  control={control}
                  name={name}
                  checked={field.checked}
                />
                <Checkbox.Label name={name} text={`체크박스 ${index}`} />
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

const CHECKBOX_DATA = [
  { id: 1, value: "1", label: "checkbox-1" },
  { id: 2, value: "2", label: "checkbox-2" },
  { id: 3, value: "3", label: "checkbox-3" },
];
