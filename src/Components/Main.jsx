import { useState } from "react";

import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import MusicList from "./MusicList";
import Player from "./Player";

export default function Main({ musicList, activeTab, setActiveTab }) {
  const [selectedMusic, setSelectedMusic] = useState(musicList?.[0] || null);
  const [searchKeyword, setSearchKeyword] = useState("");

  let musicListToShow = musicList;
  if (searchKeyword?.length > 0) {
    musicListToShow = musicList?.filter((music) => {
      const name = music?.name?.toLowerCase() || "";
      const artist = music?.artist?.toLowerCase() || "";
      const lowerCaseSearchKeyword = searchKeyword?.toLowerCase();

      return (
        name?.includes(lowerCaseSearchKeyword) ||
        artist?.includes(lowerCaseSearchKeyword)
      );
    });
  }

  const selectedMusicIndex = musicListToShow?.findIndex(
    (music) => music?.id === selectedMusic?.id
  );

  function handleNextClick() {
    if (
      selectedMusicIndex === musicListToShow?.length - 1 ||
      selectedMusicIndex === -1
    ) {
      return;
    }

    setSelectedMusic(musicListToShow[selectedMusicIndex + 1]);
  }

  function handlePreviousClick() {
    if (selectedMusicIndex === 0 || selectedMusicIndex === -1) {
      return;
    }

    setSelectedMusic(musicListToShow[selectedMusicIndex - 1]);
  }

  return (
    <Grid container sx={{ maxHeight: "100vh" }}>
      <Grid item xs={6}>
        <Box sx={{ padding: "24px 0px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "16px",
            }}
          >
            <Button variant="text" onClick={() => setActiveTab("for_you")}>
              <Typography
                variant="subtitle1"
                component="span"
                sx={{
                  fontWeight: "700",
                  fontSize: "24px",
                  textTransform: "capitalize",
                  color: activeTab === "for_you" ? "#fff" : "#555",
                }}
              >
                For You
              </Typography>
            </Button>
            <Button variant="text" onClick={() => setActiveTab("top_tracks")}>
              <Typography
                variant="subtitle1"
                component="span"
                sx={{
                  fontWeight: "700",
                  fontSize: "24px",
                  textTransform: "capitalize",
                  color: activeTab === "top_tracks" ? "#fff" : "#555",
                }}
              >
                Top Tracks
              </Typography>
            </Button>
          </Box>

          <Paper
            sx={{
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              width: "80%",
              background: "rgba(42,32,32,0.5)",
              borderRadius: "10px",
              boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
              backdropFilter: "blur(18px)",
              "-webkit-backdrop-filter": "blur(18px)",
              marginBottom: "32px",
            }}
          >
            <InputBase
              sx={{
                flex: 1,
                fontSize: "18px",
                background: "transparent",
                color: "#fff",
              }}
              placeholder="Search Song, Artist"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            {searchKeyword?.length > 0 ? (
              <IconButton
                sx={{
                  backgroundColor: "#333",
                  "&:hover": { backgroundColor: "#555" },
                }}
                onClick={() => setSearchKeyword("")}
              >
                <CloseRoundedIcon sx={{ fontSize: "18px", color: "#fff" }} />
              </IconButton>
            ) : (
              <SearchIcon sx={{ fontSize: "28px", color: "grey" }} />
            )}
          </Paper>

          <Box
            sx={{
              width: "80%",
              maxHeight: "calc(100vh - 210px)",
              overflowY: "scroll",
              paddingRight: "16px",
              paddingBottom: "100px",
            }}
          >
            <MusicList
              musicListToShow={musicListToShow}
              selectedMusic={selectedMusic}
              setSelectedMusic={setSelectedMusic}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Player
          selectedMusic={selectedMusic}
          onNext={handleNextClick}
          onPrevious={handlePreviousClick}
          nextButtonDisabled={
            selectedMusicIndex === musicListToShow?.length - 1
          }
          previousButtonDisabled={selectedMusicIndex === 0}
        />
      </Grid>
    </Grid>
  );
}
