"use client";
import React from "react";
import Search from "@/modules/Search";
import useAppSearch from "./useAppSearch";
export default function AppSearch() {
  const { searchTerm, handleSearch } = useAppSearch();
  return <Search onChange={handleSearch} value={searchTerm} />;
}
