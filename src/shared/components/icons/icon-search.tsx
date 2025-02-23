import { useTheme } from "@/shared/hooks/use-theme";

import type { IconProps } from "./icon.types";

export const IconSearch = (props: IconProps) => {
  const { theme } = useTheme();

  const stroke = theme === "dark" ? "#ECEEF5" : "#290053";

  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1_3969"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="7"
        y="7"
        width="20"
        height="20"
      >
        <path d="M27 7H7V27H27V7Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1_3969)">
        <path
          d="M22.0252 20.8476L25.5943 24.4159L24.4152 25.5951L20.8468 22.0259C19.5191 23.0903 17.8677 23.6692 16.166 23.6667C12.026 23.6667 8.66602 20.3067 8.66602 16.1667C8.66602 12.0267 12.026 8.66675 16.166 8.66675C20.306 8.66675 23.666 12.0267 23.666 16.1667C23.6684 17.8684 23.0895 19.5199 22.0252 20.8476ZM20.3535 20.2292C21.4111 19.1417 22.0017 17.6838 21.9993 16.1667C21.9993 12.9434 19.3885 10.3334 16.166 10.3334C12.9427 10.3334 10.3327 12.9434 10.3327 16.1667C10.3327 19.3892 12.9427 22.0001 16.166 22.0001C17.683 22.0025 19.1409 21.4118 20.2285 20.3542L20.3535 20.2292Z"
          fill={stroke}
        />
      </g>
    </svg>
  );
};
