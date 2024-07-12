import { useQuery } from "@tanstack/react-query";

import queryOptions from "@/service/user/queries";

export const useUsers = () => useQuery(queryOptions.all());
