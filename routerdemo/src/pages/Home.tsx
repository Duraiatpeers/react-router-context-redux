import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

function Home() {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
        >
          Home
        </Typography>

        <Typography>
          Welcome to our sample React application.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Home;