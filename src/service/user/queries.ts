import UserService from "@/service/user/service";

const queryKeys = {
  all: ["users"] as const,
};

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => UserService.getUsers(),
  }),
};

export default queryOptions;
