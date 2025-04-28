import React from "react";
import Stack from "../Stack";

export default function SmallApp() {
  return (
    <Stack className="gap-2.5">
      <Stack className="w-[86px] aspect-square bg-gray-500 rounded-3xl" />
      <Stack className="gap-2">
        <p className="text-xs font-bold text-black-300 two-line-ellipsis">
          Fyuse - 3D 相片
        </p>
        <span className="text-xs text-gray-500 font-bold two-line-ellipsis">
          照片和視訊照片和視訊
        </span>
      </Stack>
    </Stack>
  );
}
