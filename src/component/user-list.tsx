"use client";
import { useUsers } from "@/service/user/useUserService";

export default function Userist() {
  const { data: users } = useUsers();
  return (
    <div>
      {users?.map((users) => {
        return <div key={users.name}>{users.name}</div>;
      })}
    </div>
  );
}
