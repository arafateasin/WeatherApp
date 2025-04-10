import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GrainIcon from "@mui/icons-material/Grain";
import SunnyIcon from "@mui/icons-material/Sunny";
import TsunamiIcon from "@mui/icons-material/Tsunami";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./InfoBox.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4a90e2",
    },
    secondary: {
      main: "#f5a623",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1743738049563-520b88442d04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGR8ZW58MHx8MHx8fDA%3D";
  const WARM_URL =
    "https://plus.unsplash.com/premium_photo-1713316835033-f641d6cf9236?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FybSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const MILD_URL =
    "https://images.unsplash.com/photo-1694702184791-454338e92bab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1pbGQlMjB3ZWFhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJhaW58ZW58MHx8MHx8fDA%3D";
  const SNOW_URL =
    "https://plus.unsplash.com/premium_photo-1670347627514-07a3d37e0670?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHx8MA%3D%3D";

  return (
    <ThemeProvider theme={theme}>
      <div className="info-box">
        <Card
          sx={{
            maxWidth: 400,
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <CardMedia
            sx={{ height: 200 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temperature > 30
                ? HOT_URL
                : info.temperature < 10
                ? COLD_URL
                : info.temperature < 20
                ? WARM_URL
                : info.temperature < 30
                ? MILD_URL
                : INIT_URL
            }
            title="Weather Image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ textAlign: "center", fontWeight: "bold", color: "#4a90e2" }}
            >
              {info.city}, {info.country}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginBottom: "10px" }}
            >
              {info.humidity > 80 ? (
                <ThunderstormIcon sx={{ color: "#1976d2" }} />
              ) : info.temperature > 30 ? (
                <SunnyIcon sx={{ color: "#f5a623" }} />
              ) : info.temperature < 10 ? (
                <AcUnitIcon sx={{ color: "#00bcd4" }} />
              ) : info.temperature < 20 ? (
                <GrainIcon sx={{ color: "#8bc34a" }} />
              ) : info.temperature < 30 ? (
                <TsunamiIcon sx={{ color: "#03a9f4" }} />
              ) : (
                <SunnyIcon sx={{ color: "#f5a623" }} />
              )}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Temperature: {info.temperature}°C
              <br />
              Min Temperature: {info.minTemperature}°C
              <br />
              Max Temperature: {info.maxTemperature}°C
              <br />
              Humidity: {info.humidity}%
              <br />
              Feels Like: {info.feelsLike}°C
              <br />
              Pressure: {info.pressure} hPa
              <br />
              Weather: {info.weather}
              <br />
              Description: {info.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" variant="contained" color="primary">
              Share
            </Button>
            <Button size="small" variant="outlined" color="secondary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
}
