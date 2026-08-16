import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { FC, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#4f46e5",
      light: "#818cf8",
      dark: "#3730a3",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#06b6d4",
      light: "#67e8f9",
      dark: "#0e7490",
      contrastText: "#ffffff",
    },

    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },

    text: {
      primary: "#0f172a",
      secondary: "#64748b",
    },

    divider: "#e2e8f0",

    success: {
      main: "#34a853",
    },

    error: {
      main: "#d93025",
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: `'Inter', 'Roboto', 'Arial', sans-serif`,

    h3: {
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },

    h4: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },

    h5: {
      fontWeight: 600,
    },

    h6: {
      fontWeight: 600,
    },

    subtitle1: {
      fontWeight: 500,
    },

    body1: {
      fontSize: "0.98rem",
      lineHeight: 1.6,
    },

    body2: {
      lineHeight: 1.5,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
  },

  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          background:
            "radial-gradient(circle at top left, rgba(79, 70, 229, 0.16), transparent 34rem), radial-gradient(circle at top right, rgba(6, 182, 212, 0.14), transparent 30rem), #f8fafc",
        },
        "#root": {
          minHeight: "100vh",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: "none",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          border: "1px solid rgba(226, 232, 240, 0.9)",
          boxShadow: "0 18px 45px rgba(15, 23, 42, 0.06)",
          backgroundImage: "none",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
          "&:hover": {
            boxShadow: "0 24px 60px rgba(79, 70, 229, 0.12)",
          },
        },
      },
    },

    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: "0 6px 18px rgba(32,33,36,0.18)",
          "&:hover": {
            boxShadow: "0 8px 22px rgba(32,33,36,0.24)",
          },
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: "8px 18px",
        },
        containedPrimary: {
          boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          borderRadius: 16,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#818cf8",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: 2,
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,0.78)",
          color: "#0f172a",
          boxShadow: "0 1px 0 rgba(226, 232, 240, 0.9)",
          backdropFilter: "blur(18px)",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});

interface AppThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};