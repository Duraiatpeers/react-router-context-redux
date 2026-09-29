import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

function Contact() {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
        >
          Contact
        </Typography>

        <Typography>
          Email: training@example.com
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Contact;