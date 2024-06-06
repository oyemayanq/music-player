import { Box, Typography } from "@mui/material";
import AudioPlayer from "./AudioPlayer";

export default function Player({
  selectedMusic,
  onPrevious,
  onNext,
  previousButtonDisabled,
  nextButtonDisabled,
}) {
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
            {selectedMusic?.name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{ fontSize: "16px", color: "grey" }}
          >
            {selectedMusic?.artist}
          </Typography>
        </Box>

        <img
          src={`https://cms.samespace.com/assets/${selectedMusic?.cover}`}
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
          <AudioPlayer
            src={selectedMusic?.url}
            onNext={onNext}
            onPrevious={onPrevious}
            previousButtonDisabled={previousButtonDisabled}
            nextButtonDisabled={nextButtonDisabled}
          />
        </Box>
        {/* Controls */}
      </Box>
    </Box>
  );
}
