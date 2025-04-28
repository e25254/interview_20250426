import React from "react";

interface StarIconProps extends React.SVGProps<SVGSVGElement> {
  filled?: boolean;
}

export default function FilledStarIcon({ ...props }: StarIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M0 0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <path
          d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
