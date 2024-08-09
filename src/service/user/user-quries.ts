import UserService from "./user-service";

const queryKeys = {
  all: ["users"] as const,
  user: (userId: number) => [...queryKeys.all, userId] as const,
};

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => UserService.getUsers(),
  }),
  user: (userId: number) => ({
    queryKey: queryKeys.all,
    queryFn: () => UserService.getUser(userId),
  }),
};

export default queryOptions;
