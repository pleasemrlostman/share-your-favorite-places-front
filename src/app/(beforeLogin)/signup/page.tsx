"use client";

import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  router.replace("/account/signup");

  return;
}
