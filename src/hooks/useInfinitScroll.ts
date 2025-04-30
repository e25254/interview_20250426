import { useEffect, useRef, useCallback } from "react";

export default function useInfinitScroll(
  onScroll: () => void,
  isPause: boolean
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isPauseRef = useRef(isPause);
  const isInViewportRef = useRef(false);

  useEffect(() => {
    isPauseRef.current = isPause;

    if (isInViewportRef.current && !isPause) {
      onScroll();
    }
  }, [isPause, onScroll]);

  const setupObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isInViewportRef.current = entry.isIntersecting;

        if (entry.isIntersecting && !isPauseRef.current) {
          onScroll();
        }
      },
      {
        rootMargin: "200px", // 提前 200px 觸發
        threshold: 0,
      }
    );

    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }
  }, [onScroll]);

  // 設置 ref callback
  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      targetRef.current = node;

      if (node) {
        setupObserver();
      }
    },
    [setupObserver]
  );

  useEffect(() => {
    setupObserver();
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupObserver]);

  return setRef;
}
