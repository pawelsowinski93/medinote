"use client";
import * as React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query-client";

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
