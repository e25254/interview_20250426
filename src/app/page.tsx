import Stack from "@/components/Stack";
import Search from "@/modules/Search";
import Recommend from "@/modules/Recommend";
import Divider from "@/components/Divider";
import TopFreeAppList from "@/containers/TopFreeAppList";
import { getPrefetchTopFreeAppList } from "./utils";
export const revalidate = 1;

export default async function Home() {
  const { detailedApps, totalData } = await getPrefetchTopFreeAppList();
  return (
    <Stack className="min-h-screen">
      <Search />
      <Divider />
      <Recommend />
      <Divider />
      <TopFreeAppList prefetchData={detailedApps} totalData={totalData} />
    </Stack>
  );
}
