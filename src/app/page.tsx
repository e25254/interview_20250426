import Stack from "@/components/Stack";
import Search from "@/modules/Search";
import Recommend from "@/modules/Recommend";
import List from "@/modules/List";

export default function Home() {
  return (
    <Stack className="h-screen">
      <Search />
      <Recommend />
      <List />
    </Stack>
  );
}
