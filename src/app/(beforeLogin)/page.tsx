import Link from "next/link";

import Button from "@/app/_component/Button";

export default async function Home() {
  return (
    <main className="w-[21.875rem] py-[.625rem] border border-line text-center flex items-center flex-col">
      <div className="my-9">share your favorite places</div>
      <div className="w-full flex flex-col items-center justify-center gap-4 my-4 px-[2.5rem]">
        <Button className="w-full">
          <Link href={"/login"}>로그인</Link>
        </Button>
        <Button className="w-full">
          <Link href={"/signup"}>회원가입</Link>
        </Button>
      </div>
    </main>
  );
}
