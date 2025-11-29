import { useTheme } from "../../context/ThemeContext";
import logoDark from "../../assets/logo_dark.png";
import logoLight from "../../assets/logo_light.png";

const Logo = ({ size = "md", className = "" }) => {
  const { isDark } = useTheme();

  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
    xxl: "w-24 h-24",
  };

  return (
    <img
      src={isDark ? logoDark : logoLight}
      alt="ChainBreaker Logo"
      className={`${sizes[size]} rounded-lg object-cover ${className}`}
    />
  );
};

export default Logo;
