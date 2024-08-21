"use client";
import { useUsers } from "@/service/user/useUserService";

export default function Userist() {
  const { data: users } = useUsers();
  return (
    <div>
      {users?.map((users: any) => {
        return <div key={users.name}>{users.name} 테스트중</div>;
      })}
    </div>
  );
}
