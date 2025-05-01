import { useAppDispatch, useAppSelector } from "@/store";
import { setSearchTerm } from "@/store/slices/searchSlice";
import { debounce } from "lodash";
import { useEffect, useState, useMemo, useCallback } from "react";

export default function useAppSearch() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.search);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const debouncedDispatch = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(setSearchTerm(value));
      }, 300),
    [dispatch]
  );

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setLocalSearchTerm(value);
      debouncedDispatch(value);
    },
    [debouncedDispatch]
  );

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
