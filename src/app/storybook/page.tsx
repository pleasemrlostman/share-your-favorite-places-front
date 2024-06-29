"use client";

import { useForm } from "react-hook-form";

import { CustomInput } from "@/app/_component/input";
import Button from "@/app/_component/button";

export default function Storybook() {
  const { control } = useForm({
    defaultValues: {},
  });

  return (
    <div className="min-h-screen bg-white p-24">
      <form>
        <CustomInput
          name="email"
          placeholder="입력해 주세요."
          control={control}
        />
        <Button
          customType={`DEFAULT`}
          className="flex justify-center items-center w-full mt-4"
        >
          버튼명
        </Button>
      </form>
    </div>
  );
}
