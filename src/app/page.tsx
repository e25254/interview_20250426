import Stack from "@/components/Stack";
import Search from "@/modules/Search";
import Recommend from "@/modules/Recommend";
import List from "@/modules/List";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <Stack className="min-h-screen">
      <Search />
      <Divider />
      <Recommend />
      <Divider />
      <List />
    </Stack>
  );
}
