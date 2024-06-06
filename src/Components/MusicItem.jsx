import { Avatar, Box, Typography } from "@mui/material";

export default function MusicItem() {
  return (
    <Box
      sx={{
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(42,32,32,0.5)",
        borderRadius: "10px",
        boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
        backdropFilter: "blur(18px)",
        "-webkit-backdrop-filter": "blur(18px)",
      }}
    >
      <Avatar src="/avatar.png" alt="" sx={{ width: "48px", height: "48px" }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            component="h6"
            sx={{ fontSize: "16px" }}
          >
            Starboy
          </Typography>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ fontWeight: "400", color: "grey" }}
          >
            The Weekend
          </Typography>
        </Box>
        <Typography
          variant="subtitle2"
          component="span"
          sx={{ fontWeight: "400", color: "grey", fontSize: "16px" }}
        >
          4:16
        </Typography>
      </Box>
    </Box>
  );
}
