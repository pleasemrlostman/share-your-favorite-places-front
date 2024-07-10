"use client";

import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-white">
      <div>이 페이지는 존재하지 않습니다. 다른 페이지를 검색해 보세요.</div>
    </div>
  );
};

export default NotFound;
