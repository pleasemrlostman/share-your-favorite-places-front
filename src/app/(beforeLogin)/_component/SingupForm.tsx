"use client";

import Link from "next/link";
import { FieldValue, UseControllerProps, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import Button from "@/app/_component/button";
import Input from "@/app/_component/input";

type Props = {
  email: string;
  password: string;
  name: string;
  nickname: string;
};

export default function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      nickname: "",
    },
  });

  const onSubmit = (data: Props) => {
    console.log("data", data);
  };

  return (
    <>
      <DevTool control={control} />
      <div className="w-[21.875rem] py-[.625rem] border border-line text-center flex items-center flex-col">
        <div className="w-[10.9375rem] h-[3.125rem] bg-line mt-9 mb-3"></div>
        <p className="font-semibold text-base text-text mb-5">
          친구들의 사진과 동영상을 보려면 가입하세요.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-[2.5rem]">
            <Input
              control={control}
              name="email"
              rules={{
                minLength: {
                  value: 1,
                  message: "1글자 이상 입력해주세요.",
                },
              }}
              placeholder="휴대폰 번호 또는 이메일 주소"
              className="w-full mb-[.375rem]"
            />
            <Input
              control={control}
              name="name"
              placeholder="성명"
              className="w-full mb-[.375rem]"
            />
            <Input
              control={control}
              name="nickname"
              rules={{
                minLength: {
                  value: 1,
                  message: "1글자 이상 입력해주세요.",
                },
              }}
              placeholder="사용자 이름"
              className="w-full mb-[.375rem]"
            />
            <Input
              control={control}
              name="password"
              rules={{
                minLength: {
                  value: 6,
                  message: "6글자 이상 입력해주세요.",
                },
              }}
              placeholder="비밀번호"
              className="w-full"
            />
            <Button
              disabled={!isValid}
              customType={`${!isValid ? "DISABLED" : "DEFAULT"}`}
              className="flex justify-center items-center w-full mt-4 mb-5"
            >
              가입
            </Button>
          </div>
        </form>
      </div>
      <div className="w-[21.875rem] py-[.625rem] border border-line text-center text-sm mt-[.625rem]">
        <div className="my-[.9375rem]">
          계정이 있으신가요?
          <Link href="/login" className="font-semibold text-main ml-1">
            로그인
          </Link>
        </div>
      </div>
    </>
  );
}
