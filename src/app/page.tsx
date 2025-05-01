import Stack from "@/components/Stack";
import Divider from "@/components/Divider";
import TopFreeAppList from "@/containers/TopFreeAppList";
import AppSearch from "@/containers/AppSearch";
import {
  getPrefetchRecommendAppList,
  getPrefetchAllTopFreeApp,
  serverFetchAppDetails,
} from "@/app/utils";
import TopGrossingAppList from "@/containers/TopGrossingAppList";
import ReactQueryProviders from "@/components/ReactQueryProviders";

export const revalidate = 1;

export default async function Home() {
  const allTopFreeApp = await getPrefetchAllTopFreeApp();
  const recommendApps = await getPrefetchRecommendAppList();
  const queryInitialData = await serverFetchAppDetails(allTopFreeApp);

  return (
    <ReactQueryProviders>
      <Stack className="min-h-screen">
        <AppSearch />
        <Divider />
        <TopGrossingAppList prefetchData={recommendApps} />
        <Divider />
        <TopFreeAppList
          prefetchData={allTopFreeApp}
          queryInitialData={queryInitialData}
        />
      </Stack>
    </ReactQueryProviders>
  );
}
