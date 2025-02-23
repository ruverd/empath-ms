import { useTheme } from "@/shared/hooks/use-theme";

import type { IconProps } from "./icon.types";

export const IconInfo = (props: IconProps) => {
  const { theme } = useTheme();

  const fill = theme === "dark" ? "#752AD3" : "#752AD3";

  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00004 1.83331C4.32004 1.83331 1.33337 4.81998 1.33337 8.49998C1.33337 12.18 4.32004 15.1666 8.00004 15.1666C11.68 15.1666 14.6667 12.18 14.6667 8.49998C14.6667 4.81998 11.68 1.83331 8.00004 1.83331ZM8.66671 11.8333H7.33337V7.83331H8.66671V11.8333ZM8.66671 6.49998H7.33337V5.16665H8.66671V6.49998Z"
        fill={fill}
      />
    </svg>
  );
};
