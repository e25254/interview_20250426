"use client";
import React from "react";
import Stack from "@/components/Stack";
import SearchInput from "@/components/SearchInput";

interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Search({ onChange, value }: SearchProps) {
  return (
    <Stack className="shrink-0 py-2 px-3 bg-gray-100 sticky top-0">
      <SearchInput onChange={onChange} value={value} />
    </Stack>
  );
}
