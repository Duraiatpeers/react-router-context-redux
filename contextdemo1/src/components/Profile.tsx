import { useContext } from "react";

import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography
} from "@mui/material";

import { UserContext }
  from "../context/UserContext";

function Profile() {

  const user =
    useContext(UserContext);

  return (
    <Card sx={{ maxWidth: 450 }}>

      <CardContent>

    <Stack
        spacing={2}
        sx={{ alignItems: "center" }}
    >



          <Avatar
            sx={{
              width: 70,
              height: 70
            }}
          >
            {user.name.charAt(0)}
          </Avatar>

          <Typography variant="h5">
            {user.name}
          </Typography>

          <Chip
            label={user.role}
          />

          <Typography>
            Department:
            {" "}
            {user.department}
          </Typography>

        </Stack>

      </CardContent>

    </Card>
  );
}

export default Profile;