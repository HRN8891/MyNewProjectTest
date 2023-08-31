import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useThemeScheme } from "theme/ThemeProvider";

const injectStyled =
  (Styles: Function) => (Component: any) => (props: object) => {
    const appTheme = useThemeScheme();

    const style = useMemo(() => {
      return StyleSheet.create({ ...Styles(appTheme) });
    }, [appTheme]);

    return <Component {...appTheme} style={style} {...props} />;
  };

export default injectStyled;
