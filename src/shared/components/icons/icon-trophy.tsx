import { useTheme } from "@/shared/hooks/use-theme";

import type { IconProps } from "./icon.types";

export const IconTrophy = (props: IconProps) => {
  const { theme } = useTheme();

  const fill = theme === "dark" ? "#ECEEF5" : "#ECEEF5";

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 2.4V1H4.5V2.4H1V7.3C1 8.07 1.63 8.7 2.4 8.7H4.57C4.70803 9.37227 5.04025 9.9892 5.52551 10.4745C6.01078 10.9597 6.62775 11.292 7.3 11.43V12.956C5.2 13.278 4.2 15 4.2 15H11.8C11.8 15 10.8 13.278 8.7 12.956V11.43C9.37227 11.292 9.9892 10.9597 10.4745 10.4745C10.9597 9.9892 11.292 9.37227 11.43 8.7H13.6C14.37 8.7 15 8.07 15 7.3V2.4H11.5ZM2.4 7.3V3.8H4.5V7.3H2.4ZM13.6 7.3H11.5V3.8H13.6V7.3Z"
        fill={fill}
      />
    </svg>
  );
};
