import Stack from "@/components/Stack";
import Search from "@/modules/Search";
import Recommend from "@/modules/Recommend";
import Divider from "@/components/Divider";
import TopFreeAppList from "@/containers/TopFreeAppList";
import { GET as getTopFreeAppList } from "./api/topfreeapp/route";
import type { TopFreeAppListType } from "@/types/topFreeApp";
export default async function Home() {
  const response = await getTopFreeAppList();
  const data: TopFreeAppListType[] = await response.json();
  return (
    <Stack className="min-h-screen">
      <Search />
      <Divider />
      <Recommend />
      <Divider />
      <TopFreeAppList listData={data} />
    </Stack>
  );
}
