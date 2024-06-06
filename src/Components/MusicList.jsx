import { Box } from "@mui/material";
import MusicItem from "./MusicItem";

export default function MusicList({
  musicListToShow,
  selectedMusic,
  setSelectedMusic,
}) {
  return (
    <Box>
      <Box>
        {musicListToShow?.length > 0 &&
          musicListToShow?.map((music, index) => {
            return (
              <Box key={music?.id || index} sx={{ marginBottom: "16px" }}>
                <MusicItem
                  music={music}
                  selected={selectedMusic?.id === music?.id}
                  onSelect={(m) => setSelectedMusic(m)}
                />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}
