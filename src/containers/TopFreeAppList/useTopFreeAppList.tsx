import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import type { TopFreeAppListType } from "@/types/topFreeApp";
import { useAppSelector } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { twoSideFetch } from "@/app/utils";
import { matchArray } from "@/libs/constant";
export default function useTopFreeAppList(
  prefetchRenderData: TopFreeAppListType[]
) {
  const searchTerm = useAppSelector((state) => state.search);
  const [renderPage, setRenderPage] = useState(1);
  const [renderData, setRenderData] = useState<TopFreeAppListType[]>([]);
  const lastSearchTerm = useRef(searchTerm);
  const isSearchTermChanging = useRef(false);

  const addRenderPage = useCallback(
    () => setRenderPage((prev) => prev + 1),
    []
  );
  const matchAllData = useMemo(() => {
    return prefetchRenderData.filter((item) => {
      if (searchTerm) {
        return matchArray.some((key) => {
          const value = item[key as keyof TopFreeAppListType];
          return (
            value !== undefined &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
      }
      return true;
    });
  }, [searchTerm, prefetchRenderData]);

  const { data: appDetails = [], isLoading } = useQuery({
    queryKey: ["topFreeAppList", matchAllData, renderPage],
    queryFn: () => twoSideFetch(matchAllData, renderPage),
    staleTime: 5000,
  });

  // 處理搜索詞變化
  useEffect(() => {
    if (searchTerm !== lastSearchTerm.current) {
      isSearchTermChanging.current = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
      setRenderData([]);
      setRenderPage(1);
    }
  }, [searchTerm]);

  // 處理數據加載完成
  useEffect(() => {
    if (isLoading) return;

    if (isSearchTermChanging.current) {
      lastSearchTerm.current = searchTerm;
      setRenderData(appDetails);
      isSearchTermChanging.current = false;
    } else {
      setRenderData((prev) => [...prev, ...appDetails]);
    }
  }, [appDetails, searchTerm, isLoading]);

  return {
    currentPage: renderPage,
    searchTerm,
    addRenderPage,
    renderData,
    isLoading,
  };
}
