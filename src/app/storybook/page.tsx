"use client";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import Input from "@/app/_component/input";
import Button from "@/app/_component/button";
import TextArea from "@/app/_component/textarea";
import Radio from "@/app/_component/radio";

export default function Storybook() {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data: UseControllerProps) => {
    console.log("data", data);
  };

  return (
    <>
      <DevTool control={control} />
      <div className="min-h-screen bg-white p-24">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-10  max-w-[500px]">
            <Input
              name="input"
              placeholder="입력해 주세요."
              control={control}
            />
            <TextArea
              control={control}
              name="area"
              className="border focus:outline-none p-4"
            />
            <div className="flex gap-10">
              <Radio control={control} name="radio" value={0} />
              <Radio control={control} name="radio" value={1} />
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
