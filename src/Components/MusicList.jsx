import { Box, Typography } from "@mui/material";
import MusicItem from "./MusicItem";

export default function MusicList({
  musicListToShow,
  selectedMusic,
  onSelect,
}) {
  return (
    <Box>
      {musicListToShow?.length > 0 ? (
        <Box>
          {musicListToShow?.map((music, index) => {
            return (
              <Box key={music?.id || index} sx={{ marginBottom: "16px" }}>
                <MusicItem
                  music={music}
                  selected={selectedMusic?.id === music?.id}
                  onSelect={(m) => onSelect(m)}
                />
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box>
          <Typography sx={{ textAlign: "center" }}>No Music found</Typography>
        </Box>
      )}
    </Box>
  );
}
