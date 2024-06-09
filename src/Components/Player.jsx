import classes from "./player.module.css";

import { Box, IconButton, Typography } from "@mui/material";
import AudioPlayer from "./AudioPlayer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function Player({
  selectedMusic,
  onPrevious,
  onNext,
  previousButtonDisabled,
  nextButtonDisabled,
  onMenuClick,
  autoPlay,
  onEnd,
}) {
  return (
    <Box sx={{ border: "0px solid red", height: "100vh" }}>
      {/* Menu */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "32px 32px 0px 0px",
          marginBottom: "24px",
        }}
      >
        <IconButton
          sx={{
            backgroundColor: "#333",
            "&:hover": { backgroundColor: "#555" },
            "@media (min-width:600px)": { display: "none" },
          }}
          onClick={onMenuClick}
        >
          <MenuRoundedIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          paddingTop: "36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "350px",
            marginBottom: "32px",
            "@media (max-width:750px)": { width: "300px" },
          }}
        >
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
          className={classes["player-image"]}
        />

        <Box
          sx={{
            width: "350px",
            marginBottom: "32px",
            "@media (max-width:750px)": { width: "300px" },
          }}
        >
          <AudioPlayer
            autoPlay={autoPlay}
            src={selectedMusic?.url}
            onNext={onNext}
            onPrevious={onPrevious}
            previousButtonDisabled={previousButtonDisabled}
            nextButtonDisabled={nextButtonDisabled}
            onEnd={onEnd}
          />
        </Box>

        {/* Controls */}
      </Box>
    </Box>
  );
}
