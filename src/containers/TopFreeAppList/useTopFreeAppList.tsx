import type { TopFreeAppListType } from "@/types/topFreeApp";

export default function useTopFreeAppList(listData: TopFreeAppListType[]) {
  const data: TopFreeAppListType[] = listData;
  return {
    data,
  };
}
