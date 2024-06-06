import "../styles/custom-progress-bar.css";

import { useState, useRef, useCallback } from "react";

import { Box, IconButton } from "@mui/material";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import PauseCircleRoundedIcon from "@mui/icons-material/PauseCircleRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

export default function AudioPlayer({
  autoPlay,
  onPlay,
  onPause,
  onNext,
  onPrevious,
  previousButtonDisabled,
  nextButtonDisabled,
}) {
  const [isPlaying, setIsPlaying] = useState(autoPlay || false);
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  const audioRef = useRef();
  const progressBarRef = useRef();
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef?.current?.currentTime;
    const duration = audioRef?.current?.duration;
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(currentTime * 100) / duration}`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, progressBarRef]);

  function handleProgressChange() {
    console.log(progressBarRef?.current?.value);
    audioRef.current.currentTime = progressBarRef?.current?.value;
  }

  function togglePlayPause() {
    if (isPlaying) {
      audioRef?.current?.pause();
      cancelAnimationFrame(playAnimationRef?.current);
      if (onPause) {
        onPause();
      }
    } else {
      audioRef?.current?.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
      if (onPlay) {
        onPlay();
      }
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <Box>
      <audio src="./a_beautiful_day.mp3" ref={audioRef} />
      <Box sx={{ marginBottom: "8px" }}>
        <input
          type="range"
          style={{ width: "100%" }}
          defaultValue="0"
          ref={progressBarRef}
          onChange={handleProgressChange}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <IconButton
            sx={{
              backgroundColor: "#2b2b2b",
              padding: "8px",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "#4d4d4d",
              },
            }}
          >
            <MoreHorizRoundedIcon sx={{ fontSize: "20px", color: "#fff" }} />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={onPrevious} disabled={previousButtonDisabled}>
            <SkipPreviousRoundedIcon sx={{ fontSize: "32px", color: "#fff" }} />
          </IconButton>
          <IconButton onClick={togglePlayPause}>
            {isPlaying ? (
              <PauseCircleRoundedIcon
                sx={{ fontSize: "48px", color: "#fff" }}
              />
            ) : (
              <PlayCircleFilledWhiteRoundedIcon
                sx={{ fontSize: "48px", color: "#fff" }}
              />
            )}
          </IconButton>
          <IconButton onClick={onNext} disabled={nextButtonDisabled}>
            <SkipNextRoundedIcon sx={{ fontSize: "32px", color: "#fff" }} />
          </IconButton>
        </Box>
        <Box>
          <IconButton
            sx={{
              backgroundColor: "#2b2b2b",
              padding: "8px",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "#4d4d4d",
              },
            }}
          >
            <VolumeUpRoundedIcon sx={{ fontSize: "20px", color: "#fff" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
