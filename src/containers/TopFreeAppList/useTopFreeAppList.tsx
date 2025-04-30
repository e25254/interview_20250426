import { useMemo, useState, useEffect, useCallback } from "react";
import type { TopFreeAppListType } from "@/types/topFreeApp";
import { useAppSelector } from "@/store";

export default function useTopFreeAppList(
  prefetchRenderData: TopFreeAppListType[]
) {
  const searchTerm = useAppSelector((state) => state.search);
  const [renderPage, setRenderPage] = useState(1);

  const addRenderPage = useCallback(
    () => setRenderPage((prev) => prev + 1),
    []
  );
  const renderData = useMemo(() => {
    const matchData = prefetchRenderData.filter((item) => {
      if (searchTerm) {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    });
    return matchData.slice(0, renderPage * 10);
  }, [searchTerm, renderPage, prefetchRenderData]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setRenderPage(1);
  }, [searchTerm]);

  return {
    renderData,
    currentPage: renderPage,
    searchTerm,
    addRenderPage,
  };
}
