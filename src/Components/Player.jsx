import { Box, Typography } from "@mui/material";
import AudioPlayer from "./AudioPlayer";

export default function Player() {
  return (
    <Box sx={{ border: "0px solid red", height: "100vh" }}>
      {/* Menu */}
      <Box sx={{ padding: "32px 32px 0px 0px", marginBottom: "24px" }}></Box>
      <Box
        sx={{
          paddingTop: "36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "350px", marginBottom: "32px" }}>
          <Typography
            variant="subtitle1"
            component="h3"
            sx={{ fontSize: "32px", fontWeight: "700", lineHeight: 1 }}
          >
            Music name
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{ fontSize: "16px", color: "grey" }}
          >
            Music Artist
          </Typography>
        </Box>

        <img
          src="https://cms.samespace.com/assets/4f718272-6b0e-42ee-92d0-805b783cb471"
          alt=""
          style={{
            width: "350px",
            height: "350px",
            borderRadius: "5px",
            objectFit: "cover",
            marginBottom: "16px",
          }}
        />

        <Box sx={{ width: "350px" }}>
          <AudioPlayer />
        </Box>
        {/* Controls */}
      </Box>
    </Box>
  );
}
