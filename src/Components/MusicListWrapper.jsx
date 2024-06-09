import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import MusicList from "./MusicList";

export default function MusicListWrapper({
  activeTab,
  setActiveTab,
  searchKeyword,
  setSearchKeyword,
  loading,
  musicListToShow,
  selectedMusic,
  setSelectedMusic,
  onCloseMusicListMenu,
}) {
  return (
    <Box>
      <Box
        sx={{
          padding: "24px 0px 24px 64px",
          "@media (max-width:800px)": { paddingLeft: "48px" },
          "@media (max-width:600px)": { paddingLeft: "24px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
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
          <IconButton
            sx={{
              backgroundColor: "#333",
              "&:hover": { backgroundColor: "#555" },
              "@media (min-width:600px)": { display: "none" },
            }}
            onClick={onCloseMusicListMenu}
          >
            <CloseRoundedIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>

        <Paper
          sx={{
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "10px",
            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
            backdropFilter: "blur(18px)",
            "-webkit-backdrop-filter": "blur(18px)",
            marginBottom: "48px",
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
            width: "100%",
            maxHeight: "calc(100vh - 270px)",
            overflowY: "scroll",
            paddingRight: "16px",
          }}
        >
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                //border: "1px solid red",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <MusicList
              musicListToShow={musicListToShow}
              selectedMusic={selectedMusic}
              onSelect={(m) => {
                setSelectedMusic(m);
                if (onCloseMusicListMenu) {
                  onCloseMusicListMenu();
                }
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
