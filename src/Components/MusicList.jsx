import { Box, Button, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MusicItem from "./MusicItem";

export default function MusicList() {
  return (
    <Box sx={{ maxHeight: "100vh", padding: "24px 0px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginBottom: "16px",
        }}
      >
        <Button variant="text">
          <Typography
            variant="subtitle1"
            component="span"
            sx={{
              fontWeight: "700",
              fontSize: "24px",
              textTransform: "capitalize",
              color: "#fff",
            }}
          >
            For You
          </Typography>
        </Button>
        <Button variant="text">
          <Typography
            variant="subtitle1"
            component="span"
            sx={{
              fontWeight: "700",
              fontSize: "24px",
              textTransform: "capitalize",
              color: "#fff",
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
        />
        <SearchIcon sx={{ fontSize: "28px", color: "grey" }} />
      </Paper>

      <Box
        sx={{
          width: "80%",
          maxHeight: "calc(100vh - 200px)",
          overflowY: "scroll",
          paddingBottom: "300px",
        }}
      >
        <Box sx={{ marginBottom: "8px" }}>
          <MusicItem />
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <MusicItem />
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <MusicItem />
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <MusicItem />
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <MusicItem />
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <MusicItem />
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <MusicItem />
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <MusicItem />
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <MusicItem />
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <MusicItem />
        </Box>
      </Box>
    </Box>
  );
}
