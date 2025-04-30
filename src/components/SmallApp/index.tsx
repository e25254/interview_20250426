import React, { memo } from "react";
import Stack from "../Stack";
import type { TopFreeAppListType } from "@/types/topFreeApp";
import Image from "next/image";

export default memo(function SmallApp({
  appData,
}: {
  appData: TopFreeAppListType;
}) {
  const { name = "", category = "", image = "" } = appData;
  return (
    <Stack className="w-[86px] gap-2.5 shrink-0 cursor-pointer hover:bg-gray-100 active:bg-gray-100 ">
      <Stack className="w-full aspect-square bg-gray-500 rounded-3xl">
        <Image
          src={image}
          alt={name}
          width={86}
          height={86}
          className="object-cover rounded-3xl"
        />
      </Stack>
      <Stack className="gap-2">
        <p className="text-xs font-bold text-black-300 two-line-ellipsis">
          {name}
        </p>
        <span className="text-xs text-gray-500 font-bold two-line-ellipsis">
          {category}
        </span>
      </Stack>
    </Stack>
  );
});
