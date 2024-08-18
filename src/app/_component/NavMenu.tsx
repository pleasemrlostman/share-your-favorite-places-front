"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Profile from "@/app/_component/Profile";
import { RiHomeFill, RiSearchLine, RiAddLine } from "@remixicon/react";

const LIST_CLASS_NAME = "glow shrink-0 w-[25%]";
const LINK_CLASS_NAME = "flex items-center justify-center";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <li className={LIST_CLASS_NAME}>
        <Link href="/" className={LINK_CLASS_NAME}>
          <RiHomeFill size={25} color="gray" />
        </Link>
      </li>
      <li className={LIST_CLASS_NAME}>
        <Link href="/돋보기" className={LINK_CLASS_NAME}>
          <RiSearchLine size={25} color="gray" />
        </Link>
      </li>
      <li className={LIST_CLASS_NAME}>
        <Link href="/?" className={LINK_CLASS_NAME}>
          <RiAddLine size={25} color="gray" />
        </Link>
      </li>
      <li className={LIST_CLASS_NAME}>
        <Link href="/mypage" className={LINK_CLASS_NAME}>
          <Profile
            user={{
              name: "me",
              image: null,
            }}
            className="w-[1.8rem] h-[1.8rem] text-gray-800"
          />
        </Link>
      </li>
    </>
  );
}
