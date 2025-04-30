import { useEffect, useRef, useCallback, useMemo } from "react";
import throttle from "lodash/throttle";

export default function useInfinitScroll(
  onScroll: () => void,
  isPause = false,
  throttleTime: number = 500
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isPauseRef = useRef(isPause);
  const isInViewportRef = useRef(false);
  const onScrollRef = useRef(onScroll);

  // 定義內部回調函數
  const handleScroll = useCallback(() => {
    if (!isPauseRef.current && isInViewportRef.current) {
      onScrollRef.current();
    }
  }, []);

  // 使用 useMemo 創建節流函數
  const throttledOnScroll = useMemo(
    () =>
      throttle(handleScroll, throttleTime, { leading: true, trailing: true }),
    [handleScroll, throttleTime]
  );

  const setupObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isInViewportRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !isPauseRef.current) {
          throttledOnScroll();
        }
      },
      {
        rootMargin: "100px",
        threshold: 0,
      }
    );
    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }
  }, [throttledOnScroll]);

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      targetRef.current = node;
      if (node) {
        setupObserver();
      }
    },
    [setupObserver]
  );

  // 更新暫停狀態
  useEffect(() => {
    isPauseRef.current = isPause;
  }, [isPause]);

  // 更新最新的回調函數
  useEffect(() => {
    onScrollRef.current = onScroll;
  }, [onScroll]);

  useEffect(() => {
    if (isInViewportRef.current && !isPause) {
      throttledOnScroll();
    }
  }, [isPause, throttledOnScroll]);

  useEffect(() => {
    setupObserver();
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      throttledOnScroll.cancel();
    };
  }, [setupObserver, throttledOnScroll]);

  return setRef;
}
