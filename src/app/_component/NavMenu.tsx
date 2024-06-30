"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Profile from "@/app/_component/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const LIST_CLASS_NAME = "glow shrink-0 w-[25%]";
const LINK_CLASS_NAME = "flex items-center justify-center";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <li className={LIST_CLASS_NAME}>
        <Link href="/" className={LINK_CLASS_NAME}>
          <FontAwesomeIcon
            icon={segment === "/" ? faHouse : faHouse}
            className="w-[1.4rem] h-[1.4rem]"
          />
        </Link>
      </li>
      <li className={LIST_CLASS_NAME}>
        <Link href="/돋보기" className={LINK_CLASS_NAME}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="w-[1.4rem] h-[1.4rem]"
          />
        </Link>
      </li>
      <li className={LIST_CLASS_NAME}>
        <Link href="/?" className={LINK_CLASS_NAME}>
          <FontAwesomeIcon icon={faPlus} className="w-[1.4rem] h-[1.4rem]" />
        </Link>
      </li>
      <li className={LIST_CLASS_NAME}>
        <Link href="/mypage" className={LINK_CLASS_NAME}>
          <Profile
            user={{
              name: "me",
              image: null,
            }}
            className="w-[1.8rem] h-[1.8rem]"
          />
        </Link>
      </li>
    </>
  );
}
