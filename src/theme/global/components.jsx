import * as Mui from "@mui/material";

export const Components = () => ({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input:-webkit-autofill": {
            WebkitTextFillColor: "initial !important", // Reset text color to default
            WebkitBackgroundClip: "text !important", // Clip the background to text only
            WebkitBoxDecorationBreak: "clone !important", // Clone the style across multiple lines
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          borderRadius: "5px",
          color: "#fff",
        },
        outlined: {
          color: "#00815d",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiPaper-root": {
            borderRadius: "10px",
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          background: "#ffffff",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          sx: {
            "& .MuiPaper-root": { bgcolor: "background.default" },
            maxHeight: 250,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
  },
});
