"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { FormValues } from "user";
import Button from "@/app/_component/button";
import Input from "@/app/_component/input";

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
  };

  return (
    <>
      <DevTool control={control} />
      <div className="w-[21.875rem] py-[.625rem] border border-line text-center flex items-center flex-col">
        <div className="w-[10.9375rem] h-[3.125rem] bg-line my-9"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-[2.5rem]">
            <Input
              control={control}
              name="email"
              rules={{
                minLength: 1,
              }}
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="w-full mb-[.375rem]"
            />
            <Input
              control={control}
              name="password"
              rules={{
                minLength: 6,
              }}
              placeholder="비밀번호"
              className="w-full"
            />
            <Button
              disabled={!isValid}
              customType={`${!isValid ? "DISABLED" : "DEFAULT"}`}
              className="flex justify-center items-center w-full mt-4"
            >
              로그인
            </Button>

            <div className="flex items-center justify-center gap-[1.125rem] my-[1.375rem]">
              <div className="w-full h-[.0625rem] bg-[#dbdbdb]"></div>
              <div className="text-text text-[.8125rem] whitespace-nowrap">
                또는
              </div>
              <div className="w-full h-[.0625rem] bg-[#dbdbdb]"></div>
            </div>

            <Link
              href="/"
              className="text-xs text-navy mb-[.625rem] inline-block"
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </form>
      </div>
      <div className="w-[21.875rem] py-[.625rem] border border-line text-center text-sm mt-[.625rem]">
        <div className="my-[.9375rem]">
          계정이 없으신가요?
          <Link href="/signup" className="font-semibold text-main ml-1">
            가입하기
          </Link>
        </div>
      </div>
    </>
  );
}
