import { useMutation } from "@tanstack/react-query";

import queryOptions from "@/service/auth/queries";

export const useUpdateUser = (successCallback: () => void) =>
  useMutation(queryOptions.update(successCallback));
