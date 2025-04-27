"use client";
import React from "react";
import Stack from "../Stack";
import Search from "../icon/SearchIcon";
import useSearchInput from "./useSearchInput";
export default function SearchInput() {
  const {
    isShowPlaceholder,
    showPlaceholder,
    hidePlaceholder,
    inputValue,
    handleInputChange,
  } = useSearchInput();
  return (
    <Stack className="w-full justify-center items-center">
      <input
        type="text"
        className="w-full bg-gray-300 rounded-sm text-xs py-2 px-2 focus-visible:outline-none caret-gray-500"
        onFocus={hidePlaceholder}
        onBlur={showPlaceholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      {isShowPlaceholder && (
        <Stack className="gap-1.5 absolute pointer-events-none text-sm flex-row">
          <Stack className="h-5 aspect-square">
            <Search fill="var(--color-gray-500)" />
          </Stack>
          <span className="whitespace-nowrap text-gray-500 font-bold">
            搜尋
          </span>
        </Stack>
      )}
    </Stack>
  );
}
