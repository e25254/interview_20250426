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
}

function LoadingSkeleton() {
  return (
    <Stack className="h-[90px] px-hor-container py-2 text-gray-500 justify-center items-center">
      <Skeleton className="w-full h-full" />
    </Stack>
  );
}

export default function TopFreeAppList({ prefetchData }: TopFreeAppListProps) {
  const { addRenderPage, searchTerm, renderData, isLoading } =
    useTopFreeAppList(prefetchData);
  const loaderRef = useInfinitScroll(addRenderPage);

  return (
    <>
      {isLoading && renderData.length === 0 ? (
        <LoadingSkeleton />
      ) : renderData.length > 0 ? (
        <>
          <List listData={renderData} />
          <Stack ref={loaderRef} className="px-hor-container" />
          {isLoading && <LoadingSkeleton />}
        </>
      ) : (
        <Stack className="px-hor-container py-2 text-gray-500 justify-center items-center">
          {searchTerm ? "無搜尋結果" : "無資料"}
        </Stack>
      )}
    </>
  );
}
