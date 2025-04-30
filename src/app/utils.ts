import type { TopFreeAppListType } from "@/types/topFreeApp";
import { GET as GETTopFreeAppList } from "./api/topfreeapp/route";
import { GET as GETTopGrossingAppList } from "./api/topgrossingapp/route";
import { getAppDetails } from "./api/applookup/utils";

export const getPrefetchTopFreeAppList: () => Promise<{
  detailedApps: TopFreeAppListType[];
}> = async () => {
  const response = await GETTopFreeAppList();
  const resJson: TopFreeAppListType[] = await response.json();
  const detailedApps = await Promise.all(
    resJson.map(async (item) => {
      const response = await getAppDetails(item.id);
      const {
        results: [{ userRatingCount = 0, averageUserRating = 0 }],
      } = await response.json();
      return {
        ...item,
        totalRating: userRatingCount,
        rating: Math.floor(averageUserRating),
      };
    })
  );
  return { detailedApps };
};

export const getPrefetchRecommendAppList: () => Promise<{
  recommendApps: TopFreeAppListType[];
}> = async () => {
  const response = await GETTopGrossingAppList();
  const resJson: TopFreeAppListType[] = await response.json();
  return { recommendApps: resJson };
};
