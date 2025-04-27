import { useCallback, useMemo, useState } from "react";

export default function useSearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  const showPlaceholder = useCallback(() => {
    setIsFocused(false);
  }, []);

  const hidePlaceholder = useCallback(() => {
    setIsFocused(true);
  }, []);

  const shouldShowPlaceholder = useMemo(
    () => !isFocused && inputValue === "",
    [isFocused, inputValue]
  );

  return {
    isShowPlaceholder: shouldShowPlaceholder,
    showPlaceholder,
    hidePlaceholder,
    inputValue,
    handleInputChange,
  };
}
