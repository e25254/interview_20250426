"use client";
import React from "react";
import Stack from "@/components/Stack";
import SearchInput from "@/components/SearchInput";
import { useAppDispatch, useAppSelector } from "@/store";
import { setSearchTerm } from "@/store/slices/searchSlice";

export default function Search() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.search);
  return (
    <Stack className="shrink-0 py-2 px-3 bg-gray-100 sticky top-0">
      <SearchInput
        onChange={(e) => {
          dispatch(setSearchTerm(e.target.value));
        }}
        value={searchTerm}
      />
    </Stack>
  );
}
