import { useMemo } from "react";
import { useThemeScheme } from "theme/ThemeProvider";
const useThemeStyle = (styleCallback: Function) => {
  const pathTheme = useThemeScheme();
  return useMemo(() => {
    return {
      ...pathTheme,
      style: styleCallback(pathTheme),
    };
  }, [pathTheme, styleCallback]);
};

export default useThemeStyle;
