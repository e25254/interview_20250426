import React from "react";
import Stack from "../Stack";
import RatingStar from "../RatingStar";
interface DetailAppProps {
  index: number;
}

export default function DetailApp({ index }: DetailAppProps) {
  return (
    <Stack className="flex-row py-2.5 gap-3.5">
      <Stack className="justify-center items-center">
        <h5 className="text-xl text-gray-400">{index + 1}</h5>
      </Stack>
      <Stack className="flex-row gap-3 grow">
        <Stack className="w-[70px] aspect-square rounded-full bg-gray-500" />
        <Stack className="pt-1.5 pb-0.5 grow gap-1.5">
          <h5 className="text-sm font-bold text-black-300">
            Google 地圖 - 導航和大眾運輸
          </h5>
          <Stack className="gap-2">
            <h5 className="text-xs text-gray-500 font-bold">導航</h5>
            <Stack className="flex-row">
              <RatingStar total={5} rating={3} />
              <span className="text-[.5rem] text-gray-500 font-bold">
                （70）
              </span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
