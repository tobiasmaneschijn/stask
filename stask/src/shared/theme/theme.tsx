import { ThemeType } from "grommet";

export const theme: ThemeType = {
  global: {
    colors: {
      brand: "#990000",
      "neutral-1": "#fffff",
      red: "#990000",
      focus: "#000",
    },
    font: {
      family: "neo-sans",
      size: "14px",
      height: "20px",
    },
  },
  button: {
    
    extend: {
      elevation: "medium"
    },
  primary: {
    background: "#990000"
  }
  }
};
