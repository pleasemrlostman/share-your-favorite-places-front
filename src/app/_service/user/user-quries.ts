import UserService from "./user-service";

const queryKeys = {
  all: ["users"],
};

const queryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => UserService.getUsers(),
  }),
};

export default queryOptions;
