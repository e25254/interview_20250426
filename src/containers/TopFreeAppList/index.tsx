"use client";
import List from "@/modules/List";
import React from "react";
import useTopFreeAppList from "./useTopFreeAppList";
import useInfinitScroll from "@/hooks/useInfinitScroll";
import type { TopFreeAppListType } from "@/types/topFreeApp";
import Stack from "@/components/Stack";
import Skeleton from "@/components/Skeleton";

interface TopFreeAppListProps {
  prefetchData: TopFreeAppListType[];
  totalData: TopFreeAppListType[];
}

export default function TopFreeAppList({
  prefetchData,
  totalData,
}: TopFreeAppListProps) {
  const { renderData, isLoading, hasMore, handleLoadMore } = useTopFreeAppList(
    prefetchData,
    totalData
  );

  const loaderRef = useInfinitScroll(handleLoadMore, isLoading);

  return (
    <>
      <List listData={renderData} />
      {hasMore && (
        <Stack ref={loaderRef} className="px-hor-container py-2">
          {isLoading && <Skeleton />}
        </Stack>
      )}
    </>
  );
}
