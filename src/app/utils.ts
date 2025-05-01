import type { TopFreeAppListType } from "@/types/topFreeApp";
import { GET as GETTopFreeAppList } from "@/app/api/topfreeapp/route";
import { GET as GETTopGrossingAppList } from "@/app/api/topgrossingapp/route";
import { getAppDetails } from "@/libs/api";

export const getPrefetchAllTopFreeApp: () => Promise<
  TopFreeAppListType[]
> = async () => {
  const response = await GETTopFreeAppList();
  const resJson: TopFreeAppListType[] = await response.json();
  return resJson;
};

export const getPrefetchRecommendAppList: () => Promise<
  TopFreeAppListType[]
> = async () => {
  const response = await GETTopGrossingAppList();
  const resJson: TopFreeAppListType[] = await response.json();
  return resJson;
};

export const twoSideFetch = async (
  allData: TopFreeAppListType[],
  page = 1
): Promise<TopFreeAppListType[]> => {
  const scope = allData.slice(page * 10 - 10, page * 10);
  const data = await Promise.all(
    scope.map(async (item) => {
      const {
        results: [{ userRatingCount = 0, averageUserRating = 0 }],
      } = await getAppDetails(item.id);
      return {
        ...item,
        totalRating: userRatingCount,
        rating: Math.floor(averageUserRating),
      };
    })
  );

  return data;
};
