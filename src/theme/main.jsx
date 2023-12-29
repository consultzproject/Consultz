import * as Mui from "@mui/material";
import * as Themes from "src/theme";
import React from "react";

export const Main = ({ children }) => {
  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") === "dark"
  );

  const changeMode = () => setMode(!mode);

  let theme = Mui.createTheme({
    ...Themes.Global.Main(),
  });

  const dynamicTheme = React.useMemo(
    () =>
      mode
        ? Mui.createTheme({
            ...theme,
            palette: {
              mode: "dark",
              background: {
                paper: "#ffffff10",
              },
              grey: { 100: "transparent" },
              primary: { ...theme.palette.primary, light: "#00000050" },
              success: { ...theme.palette.success, contrastText: "#fff" },
            },
          })
        : theme,
    [mode]
  );

  return (
    <Themes.Hooks.ThemeContext.Provider value={{ mode, changeMode }}>
      <Mui.ThemeProvider theme={dynamicTheme}>
        <Themes.CssBaseline.Main />
        {children}
      </Mui.ThemeProvider>
    </Themes.Hooks.ThemeContext.Provider>
  );
};
