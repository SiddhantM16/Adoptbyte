"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F36B00",
      light: "#F09100",
      dark: "#E8AB00",
    },
    text: {
      primary: "#2D2D2D",
      secondary: "#6B6560",
    },
    background: {
      default: "#F8F8F8",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    allVariants: {
      margin: 0,
      padding: 0,
      letterSpacing: "inherit",
    },
    h1: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
      fontSize: "inherit",
      lineHeight: "inherit",
    },
    h2: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
      fontSize: "inherit",
      lineHeight: "inherit",
    },
    h3: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
      fontSize: "inherit",
      lineHeight: "inherit",
    },
    h4: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
      fontSize: "inherit",
      lineHeight: "inherit",
    },
    h5: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
      fontSize: "inherit",
      lineHeight: "inherit",
    },
    h6: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
      fontSize: "inherit",
      lineHeight: "inherit",
    },
    body1: {
      fontSize: "inherit",
      lineHeight: "inherit",
    },
    body2: {
      fontSize: "inherit",
      lineHeight: "inherit",
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          minWidth: "unset",
          fontFamily: "inherit",
          lineHeight: "inherit",
          letterSpacing: "normal",
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "inherit",
          textDecoration: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
        },
        input: {
          padding: 0,
          height: "auto",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: "static",
          transform: "none",
          fontFamily: "inherit",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: 0,
          minHeight: "unset",
        },
      },
    },
  },
});

export default theme;
