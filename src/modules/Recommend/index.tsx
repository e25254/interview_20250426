import SmallApp from "@/components/SmallApp";
import Stack from "@/components/Stack";
import React from "react";

export default function Recommend() {
  return (
    <Stack className="shrink-0 py-3 gap-4 overflow-hidden pr-0">
      <h3 className="text-xl font-bold text-font px-hor-container">推介</h3>
      <Stack
        className={`h-full flex-row gap-4 overflow-x-auto px-hor-container scrollbarHide`}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SmallApp key={index} />
        ))}
      </Stack>
    </Stack>
  );
}
