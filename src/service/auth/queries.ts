import AuthService from "@/service/auth/service";

const mutationKeys = {
  key: ["auth"] as const,
  update: () => [...mutationKeys.key] as const,
};

const queryOptions = {
  update: (successCallback: () => void) => ({
    mutationKey: mutationKeys.key,
    mutationFn: (params: {}) => AuthService.updateUser(params),
    onSuccess: successCallback,
  }),
};

export default queryOptions;
