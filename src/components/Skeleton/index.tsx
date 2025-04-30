import React from "react";

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={`h-[50px] w-full animate-pulse rounded-md bg-gray-300 ${className}`}
    />
  );
}
