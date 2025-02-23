import { useTheme } from "@/shared/hooks/use-theme";

import type { IconProps } from "./icon.types";

export const IconUsers = (props: IconProps) => {
  const { theme } = useTheme();

  const fill = theme === "dark" ? "#ECEEF5" : "#ECEEF5";

  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_3729)">
        <path
          d="M2.9 4.7C2.9 3.85131 3.23714 3.03737 3.83726 2.43726C4.43737 1.83714 5.25131 1.5 6.1 1.5C6.94869 1.5 7.7626 1.83714 8.36273 2.43726C8.96287 3.03737 9.3 3.85131 9.3 4.7C9.3 5.54869 8.96287 6.36263 8.36273 6.96273C7.7626 7.56287 6.94869 7.9 6.1 7.9C5.25131 7.9 4.43737 7.56287 3.83726 6.96273C3.23714 6.36263 2.9 5.54869 2.9 4.7ZM0.5 13.7575C0.5 11.295 2.495 9.1 4.9575 9.1H7.24253C9.705 9.1 11.7 11.295 11.7 13.7575C11.7 14.1675 11.3675 14.5 10.9575 14.5H1.2425C0.8325 14.5 0.5 14.1675 0.5 13.7575ZM15.7325 14.5H12.285C12.42 14.265 12.5 13.9925 12.5 13.7V13.5C12.5 11.9825 11.8225 10.42 10.755 9.505C10.815 9.50247 10.8725 9.5 10.9325 9.5H12.4675C14.695 9.5 16.5 11.505 16.5 13.7325C16.5 14.1575 16.155 14.5 15.7325 14.5ZM11.3 7.9C10.525 7.9 9.825 7.585 9.31747 7.07753C9.81 6.4125 10.1 5.59 10.1 4.7C10.1 4.03 9.935 3.3975 9.64253 2.8425C10.1075 2.5025 10.68 2.3 11.3 2.3C12.8475 2.3 14.1 3.5525 14.1 5.1C14.1 6.6475 12.8475 7.9 11.3 7.9Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3729">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
