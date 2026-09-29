import {
  Container,
  CssBaseline,
  Typography
} from "@mui/material";

import Header from "./components/Header";
import Profile from "./components/Profile";

import {  UserContext} from "./context/UserContext";
import type { User} from "./context/UserContext";

function App() {

  const currentUser: User = {
    name: "Anita",
    role: "QA Engineer",
    department: "Quality Engineering"
  };

  return (
    <UserContext.Provider
      value={currentUser}
    >

      <CssBaseline />

      <Header />

      <Container sx={{ mt: 4 }}>

        <Typography
          variant="h4"
          gutterBottom
        >
          My Profile
        </Typography>

        <Profile />

      </Container>

    </UserContext.Provider>
  );
}

export default App;