import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

function About() {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
        >
          About
        </Typography>

        <Typography>
          This application demonstrates
          React Router navigation.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default About;