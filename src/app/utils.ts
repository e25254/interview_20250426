import type { TopFreeAppListType } from "@/types/topFreeApp";
import { GET as GETTopFreeAppList } from "./api/topfreeapp/route";
import { getAppDetails } from "./api/applookup/utils";

export const getPrefetchTopFreeAppList: () => Promise<{
  detailedApps: TopFreeAppListType[];
  totalData: TopFreeAppListType[];
}> = async () => {
  const response = await GETTopFreeAppList();
  const resJson: TopFreeAppListType[] = await response.json();
  const firstTenData = resJson.slice(0, 10);
  const detailedApps = await Promise.all(
    firstTenData.map(async (item) => {
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
  return { detailedApps, totalData: resJson };
};
