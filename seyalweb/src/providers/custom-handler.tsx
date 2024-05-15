import * as Mui from "@mui/material";
import * as ReactDOM from "react-dom";

export const customHandlingProvider = ({ children }: any) => (
  <Mui.Box>
    <Mui.Box id="cutom-handle-boundary" />
    {children}
  </Mui.Box>
);

const SnackBar = ({ message, variant }: any) => {
  const handleClose = () =>
    ReactDOM.render(<></>, document.getElementById("cutom-handle-boundary"));
  return (
    <Mui.Snackbar
      open={true}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Mui.Alert severity={variant} onClose={handleClose}>
        {message}
      </Mui.Alert>
    </Mui.Snackbar>
  );
};

export const useCustomHandler = (props: any) =>
  ReactDOM.render(
    <SnackBar {...props} />,
    document.getElementById("cutom-handle-boundary")
  );
