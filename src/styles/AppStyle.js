import { makeStyles, createTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "#fff",
    minHeight: "100vh",
  },
}));

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});
