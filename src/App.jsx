import { Box, Grid } from "@mui/material";

import MusicList from "./Components/MusicList";
import Player from "./Components/Player";
import Sidebar from "./Components/Sidebar";

export default function App() {
  return (
    <main>
      <Box sx={{ maxHeight: "100vh", backgroundColor: "#000", color: "#fff" }}>
        <Grid container>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={4}>
            <MusicList />
          </Grid>
          <Grid item xs={5}>
            <Player />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
