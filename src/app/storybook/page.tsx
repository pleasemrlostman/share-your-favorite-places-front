"use client";

import { useForm, UseControllerProps } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import * as Input from "@/app/_component/Input";
import TextArea from "@/app/_component/Textarea";
import * as Radio from "@/app/_component/Radio";
import Checkbox from "@/app/_component/Checkbox";
import * as Select from "@/app/_component/Select";

import Button from "@/component/common/button";

type Props = {
  input: string;
  area: string;
  radio: string;
  single: string;
  all: string[];
};

export default function Storybook() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      input: "",
      area: "",
      radio: "",
      single: "",
      all: [],
      select: 2,
    },
  });

  const onSubmit = (data: Props) => {
    console.log("data", data);
  };

  return (
    <>
      <DevTool control={control} />
      <div className="w-full min-h-screen py-5 bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start gap-10">
            <Select.Wrapper className="w-full">
              <Select.Inner control={control} name="select" />
            </Select.Wrapper>
            <Input.Wrap>
              <Input.Text
                name="input"
                placeholder="입력해 주세요."
                control={control}
                rules={{
                  required: "아이디를 입력해 주세요.",
                  minLength: {
                    value: 2,
                    message: "2글자 이상 입력해주세요.",
                  },
                }}
              />
            </Input.Wrap>
            <TextArea
              control={control}
              name="area"
              className="w-full p-4 border focus:outline-none"
            />
            <div className="flex w-full gap-10 p-5 border">
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
            </div>
            <div className="flex flex-col w-full gap-5 p-5 border">
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
            {/* <Button
              customType={`DEFAULT`}
              className="flex items-center justify-center w-full"
            >
              버튼명
            </Button> */}
            <Button label="Hello World" />
          </div>
        </form>
      </div>
    </>
  );
}

const CHECKBOX_DATA = [
  { id: 1, value: "1", label: "checkbox-1" },
  { id: 2, value: "2", label: "checkbox-2" },
  { id: 3, value: "3", label: "checkbox-3" },
];
