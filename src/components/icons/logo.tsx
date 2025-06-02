import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="40"
      height="40"
      fill="currentColor"
      {...props}
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" />
      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fontSize="50" 
        fontWeight="bold"
        fill="currentColor"
      >
        R
      </text>
    </svg>
  );
}
