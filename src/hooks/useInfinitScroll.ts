import { useEffect } from "react";

export default function useInfinitScroll(onScroll: () => void) {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.2;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      if (windowHeight + scrollPosition >= offset) {
        onScroll();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScroll]);
}
