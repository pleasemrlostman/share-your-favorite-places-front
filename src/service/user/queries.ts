import UserService from "@/service/user/service";

const queryKeys = {
  all: ["users"] as const,
  user: (userId: number) => [...queryKeys.all, userId] as const,
};

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => UserService.getUserList(),
  }),
};

export default queryOptions;
