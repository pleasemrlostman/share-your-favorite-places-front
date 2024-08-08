"use client";

import api from "@/app/api";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export const useUserQuery = <T,>({
  params,
  options,
}: {
  params?: Record<string, string | number>;
  options?: UseQueryOptions<T>;
}) => {
  const queryUrl = "/user/list";

  return useQuery<AxiosResponse<T>, AxiosError, T>({
    queryKey: params ? [queryUrl, params] : [queryUrl],
    queryFn: async () => {
      await api.get(queryUrl, { params });
    },
    select: (data) => data.data,
    ...options,
  });
};

// react query 인스턴스 생성- 각각의 도메인으로
// 		- 도메인이란 ? 하나의 api url - url 고정
// 		- 각각의 params, options를 props로 전달. key 또한.
