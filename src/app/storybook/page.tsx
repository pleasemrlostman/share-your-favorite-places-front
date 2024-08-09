"use client";

import { useForm, UseControllerProps } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import Input from "@/app/_component/input";
import Button from "@/app/_component/Button";
import TextArea from "@/app/_component/Textarea";
import Radio from "@/app/_component/Radio";
import Checkbox from "@/app/_component/Checkbox";

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
    },
  });

  const onSubmit = (data: Props) => {
    console.log("data", data);
  };

  return (
    <>
      <DevTool control={control} />
      <div className="min-h-screen bg-white p-24">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start gap-10 max-w-fit">
            <Input
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
            <TextArea
              control={control}
              name="area"
              className="border focus:outline-none p-4"
            />
            <div className="flex gap-10 border p-5">
              <Radio
                control={control}
                name="radio"
                value={0}
                label="radio-1"
                id="radio-1"
              />
              <Radio
                control={control}
                name="radio"
                value={1}
                label="radio-2"
                id="radio-2"
              />
            </div>
            <div className="flex flex-col gap-10 border p-5">
              <Checkbox
                control={control}
                name="single"
                value={0}
                label="단독"
              />
              <Checkbox
                control={control}
                name="all"
                label="전체"
                data={CHECKBOX_DATA}
                allCheckedType
              />
              <div className="flex gap-10">
                <Checkbox control={control} name="all" data={CHECKBOX_DATA} />
              </div>
            </div>
            <Button
              customType={`DEFAULT`}
              className="flex justify-center items-center w-full"
            >
              버튼명
            </Button>
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
