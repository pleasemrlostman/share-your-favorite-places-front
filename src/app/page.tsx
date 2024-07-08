"use client";

import { useForm } from "react-hook-form";

import Profile from "@/app/_component/Profile";
import Checkbox from "@/app/_component/Checkbox";
import Checkboxes from "@/app/_component/Checkbox";
import { useUserQuery } from "@/app/_hooks/useUserQuery_bk";

type test = {
  email: string;
  password: string;
  name: string;
  nickname: string;
  profile_image: string;
  role: string;
  __v: number;
};

export default function Home() {
  const { data } = useUserQuery<test[]>({});

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      controlled: [],
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className="min-w-full overflow-x-auto flex flex-nowrap gap-[1rem] pl-3 py-2 border-b border-gray-100">
        <Profile
          user={{
            name: "me",
            image: null,
          }}
          className=" w-[5rem] h-[5rem]"
        />
        {USER_LIST.map((user, index) => {
          return (
            <Profile key={index} user={user} className=" w-[5rem] h-[5rem]" />
          );
        })}
      </section>
      <section className="flex-grow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Checkboxes options={checkList} control={control} name="controlled" />
          <input type="submit" />
        </form>
        <div className="h-full">지도영역_</div>
      </section>
    </>
  );
}

const checkList = [
  { value: "all", title: "전부" },
  { value: "일", title: "일" },
  { value: "이", title: "이" },
  { value: "삼", title: "삼" },
];

const USER_LIST = [
  {
    name: "bk",
    image: null,
  },
  {
    name: "chu",
    image:
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202010/22/2182ecd3-b8cc-4993-98a7-8c2568f9fbbc.jpg",
  },
  {
    name: "chu",
    image: null,
  },
  {
    name: "chu",
    image: null,
  },
  {
    name: "chu",
    image: null,
  },
  {
    name: "chu",
    image: null,
  },
  {
    name: "chu",
    image: null,
  },
  {
    name: "chu",
    image: null,
  },
];
