"use client";
import Recommend from "@/modules/Recommend";
import React from "react";
import type { TopFreeAppListType } from "@/types/topFreeApp";
import useTopGrossingAppList from "./useTopGrossingAppList";

interface TopGrossingAppListProps {
  prefetchData: TopFreeAppListType[];
}

export default function TopGrossingAppList({
  prefetchData,
}: TopGrossingAppListProps) {
  const { renderData } = useTopGrossingAppList(prefetchData);
  return <Recommend listData={renderData} />;
}
