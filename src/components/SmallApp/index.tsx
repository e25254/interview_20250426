import React from "react";
import Stack from "../Stack";

export default function SmallApp() {
  return (
    <Stack className="gap-2.5">
      <Stack className="w-[86px] aspect-square bg-gray-500 rounded-3xl"></Stack>
      <Stack className="gap-2">
        <p className="text-xs font-bold text-font">Fyuse - 3D 相片</p>
        <span className="text-tiny text-gray-500">照片和視訊</span>
      </Stack>
    </Stack>
  );
}
