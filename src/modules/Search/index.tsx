import React from "react";
import Stack from "@/components/Stack";
import SearchInput from "@/components/SearchInput";
export default function Search() {
  return (
    <Stack className="shrink-0 py-2 px-3 bg-gray-100 sticky top-0">
      <SearchInput />
    </Stack>
  );
}
