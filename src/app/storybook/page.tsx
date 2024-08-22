"use client";

import { FieldErrors, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import TextArea from "@/app/_component/Textarea";
import * as Radio from "@/app/_component/Radio";
import Checkbox from "@/app/_component/Checkbox";
import * as Select from "@/app/_component/Select";

// refacot component
import Button from "@/component/common/button";
import * as Text from "@/component/common/text";

type StoryboookProps = {
  input: string;
  area: string;
  radio: string;
  single: string;
  all: string[];
  select: number;
};

const defaultValues = {
  input: "",
  area: "",
  radio: "",
  single: "",
  all: [],
  select: 2,
};

export default function Storybook() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StoryboookProps>({
    defaultValues: defaultValues,
  });

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
            <Text.Native />
            <Text.Native widthSize="fit" />
            <Text.Native widthSize="xs" />
            <Text.Native widthSize="sm" />
            <Text.Native widthSize="md" />
            <Text.Native widthSize="lg" />
            <Text.Native widthSize="xl" />
          </Text.Wrap>
          <Button type="submit" label="SUBMIT" />

          {/* <Select.Wrapper className="w-full">
              <Select.Inner control={control} name="select" />
            </Select.Wrapper> */}

          {/* <TextArea
              control={control}
              name="area"
              className="w-full p-4 border focus:outline-none"
            /> */}
          {/* <div className="flex w-full gap-10 p-5 border">
              <Radio.Wrap>
                <Radio.Text
                  control={control}
                  name="radio"
                  value={0}
                  label="radio-1"
                  id="radio-1"
                />
              </Radio.Wrap>
              <Radio.Wrap>
                <Radio.Text
                  control={control}
                  name="radio"
                  value={1}
                  label="radio-2"
                  id="radio-2"
                />
              </Radio.Wrap>
            </div> */}
          {/* <div className="flex flex-col w-full gap-5 p-5 border">
              <div className="p-5 border">
                <Checkbox
                  control={control}
                  name="single"
                  value={0}
                  label="단독"
                />
              </div>
              <div className="flex flex-col gap-10 p-5 border">
                <Checkbox
                  control={control}
                  name="all"
                  label="전체"
                  data={CHECKBOX_DATA}
                  allCheckedType
                />
                <Checkbox control={control} name="all" data={CHECKBOX_DATA} />
              </div>
            </div> */}
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
