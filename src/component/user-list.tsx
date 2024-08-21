"use client";
import { useUserList } from "@/service/user/useUserService";

export default function UseList() {
  const { data: users } = useUserList();

  return (
    <div>
      {users?.map((users: any) => {
        return <div key={users.name}>{users.name} 테스트중</div>;
      })}
    </div>
  );
}
