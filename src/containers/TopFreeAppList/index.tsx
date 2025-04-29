"use client";
import List from "@/modules/List";
import React from "react";
import useTopFreeAppList from "./useTopFreeAppList";
import useInfinitScroll from "@/hooks/useInfinitScroll";
import type { TopFreeAppListType } from "@/types/topFreeApp";

interface TopFreeAppListProps {
  prefetchData: TopFreeAppListType[];
}

export default function TopFreeAppList({ prefetchData }: TopFreeAppListProps) {
  const { renderData } = useTopFreeAppList(prefetchData);
  useInfinitScroll(() => {
    console.log("onScroll");
  });
  return <List listData={renderData} />;
}
