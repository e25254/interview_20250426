import { useMemo } from "react";
import type { TopFreeAppListType } from "@/types/topFreeApp";
export default function useTopFreeAppList(prefetchData: TopFreeAppListType[]) {
  const renderData = useMemo(() => {
    return prefetchData.filter((_, index) => index < 10);
  }, [prefetchData]);

  return {
    renderData,
  };
}
