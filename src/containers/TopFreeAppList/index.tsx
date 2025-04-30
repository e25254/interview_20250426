"use client";
import List from "@/modules/List";
import React from "react";
import useTopFreeAppList from "./useTopFreeAppList";
import useInfinitScroll from "@/hooks/useInfinitScroll";
import type { TopFreeAppListType } from "@/types/topFreeApp";
import Stack from "@/components/Stack";

interface TopFreeAppListProps {
  prefetchData: TopFreeAppListType[];
}

export default function TopFreeAppList({ prefetchData }: TopFreeAppListProps) {
  const { renderData, addRenderPage, searchTerm } =
    useTopFreeAppList(prefetchData);
  const loaderRef = useInfinitScroll(addRenderPage);
  return (
    <>
      {renderData.length > 0 ? (
        <>
          <List listData={renderData} />
          <Stack ref={loaderRef} className="px-hor-container " />
        </>
      ) : (
        <Stack className="px-hor-container py-2 text-gray-500 justify-center items-center">
          {searchTerm ? "無搜尋結果" : "無資料"}
        </Stack>
      )}
    </>
  );
}
