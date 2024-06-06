import { Box, Grid } from "@mui/material";

import MusicList from "./Components/MusicList";
import Player from "./Components/Player";
import Sidebar from "./Components/Sidebar";

export default function App() {
  return (
    <main>
      <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Grid container>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={5}>
            <MusicList />
          </Grid>
          <Grid item xs={4}>
            <Player />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
