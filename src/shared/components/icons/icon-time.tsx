import { useTheme } from "@/shared/hooks/use-theme";

import type { IconProps } from "./icon.types";

export const IconTime = (props: IconProps) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.50033 15.3334C12.5504 15.3334 15.8337 12.0501 15.8337 8.00002C15.8337 3.94993 12.5504 0.666687 8.50033 0.666687C4.45024 0.666687 1.16699 3.94993 1.16699 8.00002C1.16699 12.0501 4.45024 15.3334 8.50033 15.3334ZM9.31539 3.72225H7.68579V8.82035L11.0743 11.3052L12.038 9.99109L9.31539 7.99455V3.72225Z"
        fill={fill}
      />
    </svg>
  );
};
