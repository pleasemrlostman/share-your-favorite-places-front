"use client";
import { useUserList } from "@/service/user/useUserService";

export default function UseList() {
  const { data: users } = useUserList();

  return (
    <div>
      {users?.map((users) => {
        return <div key={users.name}>{users.name}</div>;
      })}
    </div>
  );
}
