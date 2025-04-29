import React from "react";
import Stack from "../Stack";
import FilledStarIcon from "../icon/FilledStarIcon";
import EmptyStarIcon from "../icon/EmptyStarIcon";
interface RatingStarProps {
  total?: number;
  rating: number;
}

export default function RatingStar({ total = 5, rating = 3 }: RatingStarProps) {
  const ratingList = Array.from({ length: total }, (_, index) =>
    index < rating ? 1 : 0
  );
  return (
    <Stack className="flex-row">
      {ratingList.map((value, index) => (
        <Stack
          key={index}
          className="w-3 aspect-square justify-center items-center"
        >
          {value === 1 ? (
            <FilledStarIcon color="var(--color-yellow-500)" />
          ) : (
            <EmptyStarIcon color="var(--color-yellow-500)" />
          )}
        </Stack>
      ))}
    </Stack>
  );
}
