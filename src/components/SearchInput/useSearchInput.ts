import { useCallback, useMemo, useState } from "react";

export default function useSearchInput(
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value = ""
) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    },
    [onChange]
  );

  const showPlaceholder = useCallback(() => {
    setIsFocused(false);
  }, []);

  const hidePlaceholder = useCallback(() => {
    setIsFocused(true);
  }, []);

  const shouldShowPlaceholder = useMemo(
    () => !isFocused && value === "",
    [isFocused, value]
  );

  return {
    isShowPlaceholder: shouldShowPlaceholder,
    showPlaceholder,
    hidePlaceholder,
    handleInputChange,
  };
}
