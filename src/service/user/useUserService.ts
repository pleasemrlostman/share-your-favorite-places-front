import { useQuery } from "@tanstack/react-query";

import queryOptions from "@/service/user/queries";

export const useUserList = () => useQuery(queryOptions.all());
