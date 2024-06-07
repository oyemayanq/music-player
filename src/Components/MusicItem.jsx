import { Avatar, Box, Typography } from "@mui/material";

export default function MusicItem({ music, selected, onSelect }) {
  return (
    <Box
      sx={{
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: selected ? "rgba(255,255,255,0.2)" : "transparent",
        borderRadius: "10px",
        boxShadow: selected ? "0 4px 30px rgba(0,0,0,0.1)" : "none",
        backdropFilter: "blur(18px)",
        "-webkit-backdrop-filter": "blur(18px)",
        cursor: "pointer",
      }}
      onClick={() => onSelect(music)}
    >
      <Avatar
        src={`https://cms.samespace.com/assets/${music?.cover}`}
        alt=""
        sx={{ width: "48px", height: "48px" }}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ color: "#fff" }}>
          <Typography
            variant="subtitle1"
            component="h6"
            sx={{ fontSize: "16px" }}
          >
            {music?.name}
          </Typography>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ fontWeight: "400", color: "grey" }}
          >
            {music?.artist}
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
