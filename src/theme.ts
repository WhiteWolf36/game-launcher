import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#595959",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#A0A0A0",
      500: "#898989",
      700: "#202020",
      800: "#121212",
      90: "#111",
    },
  },
});

export default theme;
