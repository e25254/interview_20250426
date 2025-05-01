"use client";
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function Providers({
  children,
  dehydratedState,
}: {
  children: ReactNode;
  dehydratedState?: unknown;
}) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <HydrationBoundary state={dehydratedState} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </HydrationBoundary>
  );
}
