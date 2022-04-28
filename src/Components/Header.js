import React from "react";
import {
  AppBar,
  Container,
  FormControl,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { darkTheme } from "../styles/AppStyle";

const Header = () => {
  let history = useNavigate();
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography
              style={{ cursor: "pointer" }}
              onClick={() => history("/")}
            >
              Cryptro-Hunter
            </Typography>
            <FormControl>
              <Select value={"USD"}>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
