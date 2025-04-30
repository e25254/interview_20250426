import { useMemo } from "react";
import { useAppSelector } from "@/store";
import type { TopFreeAppListType } from "@/types/topFreeApp";
import { matchArray } from "@/libs/constant";
export default function useTopGrossingAppList(
  prefetchRenderData: TopFreeAppListType[]
) {
  const searchTerm = useAppSelector((state) => state.search);
  const renderData = useMemo(() => {
    const matchData = prefetchRenderData.filter((item) => {
      if (searchTerm) {
        return matchArray.some((key) => {
          const value = item[key as keyof TopFreeAppListType];
          return (
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
      }
      return true;
    });
    return matchData;
  }, [searchTerm, prefetchRenderData]);
  return { renderData };
}
