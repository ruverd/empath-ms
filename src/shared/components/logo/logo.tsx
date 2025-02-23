import brandLogoDark from "@/assets/brand/logo-dark.svg";
import brandLogoLight from "@/assets/brand/logo-light.svg";
import { useTheme } from "@/shared/hooks/use-theme";

export const Logo = () => {
  const { theme } = useTheme();

  const logoUrl = theme === "dark" ? brandLogoDark : brandLogoLight;

  return <img src={logoUrl} alt="Brand Logo" />;
};
