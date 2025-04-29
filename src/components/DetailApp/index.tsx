import React from "react";
import Stack from "../Stack";
import RatingStar from "../RatingStar";
import type { TopFreeAppListType } from "@/types/topFreeApp";
interface DetailAppProps {
  index: number;
  appData: TopFreeAppListType;
}

export default function DetailApp({ index, appData }: DetailAppProps) {
  const { name = "", category = "", rating = 0, totalRating = 0 } = appData;
  return (
    <Stack className="flex-row py-2.5 ">
      <Stack className="justify-center items-center">
        <h5 className="text-xl text-gray-400 min-w-[2em]">{index + 1}</h5>
      </Stack>
      <Stack className="flex-row gap-3 grow">
        <Stack className="w-[70px] shrink-0 aspect-square rounded-full bg-gray-500" />
        <Stack className="pt-1.5 pb-0.5 grow gap-1.5">
          <h5 className="text-sm font-bold text-black-300 overflow-hidden text-ellipsis line-clamp-1">
            {name}
          </h5>
          <Stack className="gap-2">
            <h5 className="text-xs text-gray-500 font-bold">{category}</h5>
            <Stack className="flex-row">
              <RatingStar rating={rating} />
              <span className="text-[.5rem] text-gray-500 font-bold">
                （{totalRating}）
              </span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
