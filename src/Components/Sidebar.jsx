import { Avatar, Box } from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      sx={{
        padding: "32px 0px 32px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Box>
        <img src="/spotify.svg" style={{ width: "100px" }} />
      </Box>

      <Box>
        <Avatar src="./avatar.png" />
      </Box>
    </Box>
  );
}
