"use client";

import { Button } from "@repo/ui";

import styles from "../styles/index.module.css";
import { ITest } from "@repo/schema-and-type/test/types";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@repo/react-query-client";

export default function Web() {
  const { data, isLoading, error } = useQuery<ITest>({
    queryKey: ["test"],
    queryFn: () => fetcher<ITest>("http://localhost:3000/api/test"),
  });

  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <p>{data?.message || "Loading..."}</p>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
    </div>
  );
}
