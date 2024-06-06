import { Box, Skeleton } from "@mui/material";

export default function MusicItemSkeleton() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        sx={{ backgroundColor: "#333" }}
      />
      <Box>
        <Skeleton
          variant="text"
          width={400}
          sx={{ fontSize: "24px", backgroundColor: "#333" }}
        />
        <Skeleton
          variant="text"
          width={400}
          height={50}
          sx={{ backgroundColor: "#333" }}
        />
      </Box>
    </Box>
  );
}
