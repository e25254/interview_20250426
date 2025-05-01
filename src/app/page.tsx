import Stack from "@/components/Stack";
import Search from "@/modules/Search";
import Divider from "@/components/Divider";
import TopFreeAppList from "@/containers/TopFreeAppList";
import {
  getPrefetchRecommendAppList,
  getPrefetchAllTopFreeApp,
  twoSideFetch,
} from "@/app/utils";
import TopGrossingAppList from "@/containers/TopGrossingAppList";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import ReactQueryProviders from "@/components/ReactQueryProviders";

export const revalidate = 1;

export default async function Home() {
  const queryClient = new QueryClient();
  const allTopFreeApp = await getPrefetchAllTopFreeApp();
  const recommendApps = await getPrefetchRecommendAppList();
  const detailedApps2 = await twoSideFetch(allTopFreeApp);

  await queryClient.prefetchQuery({
    queryKey: ["topFreeAppList", ""],
    queryFn: () => detailedApps2,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryProviders dehydratedState={dehydratedState}>
      <Stack className="min-h-screen">
        <Search />
        <Divider />
        <TopGrossingAppList prefetchData={recommendApps} />
        <Divider />
        <TopFreeAppList prefetchData={allTopFreeApp} />
      </Stack>
    </ReactQueryProviders>
  );
}
