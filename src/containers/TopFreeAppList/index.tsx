"use client";
import List from "@/modules/List";
import React from "react";
import useTopFreeAppList from "./useTopFreeAppList";
import type { TopFreeAppListType } from "@/types/topFreeApp";

interface TopFreeAppListProps {
  listData: TopFreeAppListType[];
}

export default function TopFreeAppList({ listData }: TopFreeAppListProps) {
  const { data } = useTopFreeAppList(listData);
  return <List listData={data} />;
}
