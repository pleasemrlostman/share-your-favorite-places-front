import { useQuery } from "@tanstack/react-query";
import queryOptions from "@/app/_service/user/user-quries";

export const useUsers = () => useQuery(queryOptions.all());
