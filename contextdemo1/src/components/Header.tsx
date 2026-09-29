import { useContext } from "react";

import {
  AppBar,
  Toolbar,
  Typography
} from "@mui/material";

import { UserContext }
  from "../context/UserContext";

function Header() {

  const user =
    useContext(UserContext);

  return (
    <AppBar position="static">

      <Toolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Employee Portal
        </Typography>

        <Typography>
          Welcome, {user.name}
        </Typography>

      </Toolbar>

    </AppBar>
  );
}

export default Header;