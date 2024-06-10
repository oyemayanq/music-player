import classes from "./audio-player.module.css";

import { useState, useEffect, useRef, useCallback } from "react";

import { Box, IconButton } from "@mui/material";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import PauseCircleRoundedIcon from "@mui/icons-material/PauseCircleRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

export default function AudioPlayer({
  src,
  autoPlay,
  onPlay,
  onPause,
  onNext,
  onPrevious,
  previousButtonDisabled,
  nextButtonDisabled,
  onEnd,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef();
  const progressBarRef = useRef();
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef?.current?.currentTime;
    const duration = audioRef?.current?.duration;
    progressBarRef.current.value = currentTime;
    progressBarRef?.current?.style?.setProperty(
      "--seek-before-width",
      `${(progressBarRef?.current?.value * 100) / duration}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, progressBarRef]);

  function handleProgressChange() {
    audioRef.current.currentTime = progressBarRef?.current?.value;
    progressBarRef?.current?.style?.setProperty(
      "--seek-before-width",
      `${
        (progressBarRef?.current?.value * 100) /
        Math.floor(audioRef?.current?.duration)
      }%`
    );
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

  useEffect(() => {
    audioRef.current.muted = isMuted;
  }, [isMuted]);

  return (
    <Box>
      <audio
        onLoadedMetadata={() => {
          progressBarRef.current.max = Math.floor(audioRef?.current?.duration);
          if (autoPlay) {
            audioRef?.current?.play();
            playAnimationRef.current = requestAnimationFrame(repeat);
            setIsPlaying(true);
          }
        }}
        preload="metadata"
        src={src}
        ref={audioRef}
        onEnded={() => {
          setIsPlaying(false);
          cancelAnimationFrame(playAnimationRef.current);
          if (onEnd) {
            onEnd();
          }
        }}
        onPause={() => {
          setIsPlaying(false);
          if (onPause) {
            onPause();
          }
        }}
        onPlay={() => {
          setIsPlaying(true);
          if (onPlay) {
            onPlay();
          }
        }}
      />
      <Box sx={{ marginBottom: "8px" }}>
        <input
          type="range"
          style={{ width: "100%" }}
          defaultValue="0"
          ref={progressBarRef}
          onChange={handleProgressChange}
          className={classes["progress-bar"]}
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
            <SkipPreviousRoundedIcon
              sx={{
                fontSize: "32px",
                color: previousButtonDisabled ? "#555" : "#fff",
              }}
            />
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
            <SkipNextRoundedIcon
              sx={{
                fontSize: "32px",
                color: nextButtonDisabled ? "#555" : "#fff",
              }}
            />
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
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? (
              <VolumeOffRoundedIcon sx={{ fontSize: "20px", color: "#fff" }} />
            ) : (
              <VolumeUpRoundedIcon sx={{ fontSize: "20px", color: "#fff" }} />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
