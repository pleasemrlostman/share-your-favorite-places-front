"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Profile from "@/component/common/Profile";
import { RiHomeFill, RiSearchLine, RiAddLine } from "@remixicon/react";

const LIST_CLASS_NAME = "glow shrink-0 w-[25%]";
const LINK_CLASS_NAME = "flex items-center justify-center";

export default function NavMenu() {
  return (
    <nav className="px-3 py-4 h-16 border-t border-gray-100 fixed bottom-0 w-full max-w-xl border-b-0 left-1/2 -translate-x-1/2">
      <ul className="flex items-center">
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
      </ul>
    </nav>
  );
}
