"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
      retry: 2,
    },
  },
});

export default function ReactQueryProviders({
  children,
}: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
