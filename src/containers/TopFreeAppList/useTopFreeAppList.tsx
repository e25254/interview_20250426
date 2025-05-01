import { useMemo, useState, useEffect, useCallback } from "react";
import type { TopFreeAppListType } from "@/types/topFreeApp";
import { useAppSelector } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { clientFetchAppDetails } from "@/app/utils";
import { matchArray } from "@/libs/constant";
export default function useTopFreeAppList(
  prefetchRenderData: TopFreeAppListType[],
  queryInitialData: TopFreeAppListType[]
) {
  const searchTerm = useAppSelector((state) => state.search);
  const [renderPage, setRenderPage] = useState(1);
  const [renderData, setRenderData] = useState<TopFreeAppListType[]>(
    queryInitialData || []
  );

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setRenderPage(1);
    setRenderData([]);
  }, [searchTerm]);

  const { data: appDetails = [], isLoading } = useQuery({
    queryKey: ["topFreeAppList", matchAllData, renderPage],
    queryFn: () => clientFetchAppDetails(matchAllData, renderPage),
    staleTime: 5000,
    initialData: renderPage === 1 && !searchTerm ? queryInitialData : undefined,
  });

  useEffect(() => {
    if (isLoading) return;

    if (renderPage === 1) {
      setRenderData(appDetails);
    } else {
      setRenderData((prev) => [...prev, ...appDetails]);
    }
  }, [appDetails, isLoading, renderPage]);

  return {
    currentPage: renderPage,
    searchTerm,
    addRenderPage,
    renderData,
    isLoading,
  };
}
