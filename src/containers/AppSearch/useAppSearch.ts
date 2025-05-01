import { useAppDispatch, useAppSelector } from "@/store";
import { setSearchTerm } from "@/store/slices/searchSlice";
import { debounce } from "lodash";
import { useEffect, useState, useMemo } from "react";

export default function useAppSearch() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.search);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  // 創建 debounced dispatch 函數
  const debouncedDispatch = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(setSearchTerm(value));
      }, 1000),
    [dispatch]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    debouncedDispatch(value);
  };

  useEffect(() => {
    return () => {
      debouncedDispatch.cancel();
    };
  }, [debouncedDispatch]);

  return {
    searchTerm: localSearchTerm,
    handleSearch,
  };
}
