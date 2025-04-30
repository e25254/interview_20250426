import SmallApp from "@/components/SmallApp";
import Stack from "@/components/Stack";
import React from "react";
import type { TopFreeAppListType } from "@/types/topFreeApp";
export default function Recommend({
  listData,
}: {
  listData: TopFreeAppListType[];
}) {
  return (
    <Stack className="shrink-0 py-3 gap-4 overflow-hidden">
      <h3 className="text-xl font-bold text-black-500 px-hor-container">
        推介
      </h3>
      <Stack
        className={`h-full flex-row gap-4 overflow-x-auto px-hor-container scrollbarHide`}
      >
        {listData.length === 0 ? (
          <Stack className="w-full h-full justify-center items-center">
            <p className="text-gray-500">無推介項目</p>
          </Stack>
        ) : (
          listData.map((item) => <SmallApp key={item.id} appData={item} />)
        )}
      </Stack>
    </Stack>
  );
}
