import Stack from "@/components/Stack";
import Search from "@/modules/Search";
import Divider from "@/components/Divider";
import TopFreeAppList from "@/containers/TopFreeAppList";
import {
  getPrefetchRecommendAppList,
  getPrefetchTopFreeAppList,
} from "./utils";
import TopGrossingAppList from "@/containers/TopGrossingAppList";
export const revalidate = 1;

export default async function Home() {
  const { detailedApps } = await getPrefetchTopFreeAppList();
  const { recommendApps } = await getPrefetchRecommendAppList();
  return (
    <Stack className="min-h-screen">
      <Search />
      <Divider />
      <TopGrossingAppList prefetchData={recommendApps} />
      <Divider />
      <TopFreeAppList prefetchData={detailedApps} />
    </Stack>
  );
}
