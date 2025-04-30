import { useCallback, useMemo, useState, useEffect } from "react";
import type { TopFreeAppListType } from "@/types/topFreeApp";
import { useQuery } from "@tanstack/react-query";
import { getAppDetails } from "@/libs/api";

export default function useTopFreeAppList(
  prefetchData: TopFreeAppListType[],
  totalData: TopFreeAppListType[]
) {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [renderData, setRenderData] =
    useState<TopFreeAppListType[]>(prefetchData);
  const [renderPage, setRenderPage] = useState(1);

  const fetchDataScope = useMemo(() => {
    return totalData.slice(renderPage * 10 - 10, renderPage * 10);
  }, [renderPage, totalData]);

  const {
    data,
    isLoading: queryIsLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["app-details", fetchDataScope],
    queryFn: () => {
      return Promise.all(fetchDataScope.map((item) => getAppDetails(item.id)));
    },
    enabled: renderPage !== 1,
    retry: 2,
  });

  const fetchNewData = useCallback(() => {
    if (renderPage >= 10) return;

    if (isLoadingMore || queryIsLoading) return;
    setIsLoadingMore(true);
    setRenderPage((prev) => prev + 1);
  }, [isLoadingMore, queryIsLoading, renderPage]);

  // 處理加載完成後的數據更新
  useEffect(() => {
    if (isSuccess && data && renderPage !== 1) {
      // 處理資料並更新 renderData
      const newData = fetchDataScope.map((item, index) => {
        const apiData = data[index];
        const { results } = apiData;
        const { userRatingCount = 0, averageUserRating = 0 } = results[0];
        return {
          ...item,
          totalRating: userRatingCount,
          rating: Math.floor(averageUserRating),
        };
      });
      setRenderData((prev) => [...prev, ...newData]);
      setIsLoadingMore(false);
    }
  }, [data, isSuccess, renderPage, fetchDataScope]);

  // 處理錯誤情況
  useEffect(() => {
    if (isError && renderPage !== 1) {
      setIsLoadingMore(false);
    }
  }, [isError, renderPage]);

  const handleLoadMore = useCallback(() => {
    const isLoading = isLoadingMore || queryIsLoading;
    const hasMore = renderPage < 10 && renderData.length < totalData.length;
    if (!isLoading && hasMore) {
      fetchNewData();
    }
  }, [
    fetchNewData,
    isLoadingMore,
    queryIsLoading,
    renderData.length,
    renderPage,
    totalData.length,
  ]);

  const isLoading = isLoadingMore || queryIsLoading;
  const hasMore = renderPage < 10 && renderData.length < totalData.length;

  return {
    renderData,
    fetchNewData,
    handleLoadMore,
    isLoading,
    currentPage: renderPage,
    hasMore,
  };
}
