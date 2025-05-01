import { useAppDispatch, useAppSelector } from "@/store";
import { setSearchTerm } from "@/store/slices/searchSlice";
export default function useAppSearch() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.search);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return {
    searchTerm,
    handleSearch,
  };
}
