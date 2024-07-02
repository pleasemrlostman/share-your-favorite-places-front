import { useQuery } from "@tanstack/react-query";
import queryOptions from "@/service/user/user-quries";

export const useUsers = () => useQuery(queryOptions.all());
export const useUser = (userId: number) => useQuery(queryOptions.user(userId));
