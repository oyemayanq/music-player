import { useState, useEffect } from "react";

import { Box, Grid } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import MusicService from "./Services/MusicService";

export default function App() {
  const [activeTab, setActiveTab] = useState("for_you");
  const [loading, setLoading] = useState(true);
  const [music, setMusic] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState(null);
  let musicListToShow = music || [];
  if (activeTab === "top_tracks") {
    musicListToShow = music?.filter((m) => m?.["top_track"] === true);
  }

  function getMusicData() {
    setLoading(true);
    MusicService.getMusic()
      .then((musicResponse) => {
        setMusic(musicResponse?.data || []);
        setSelectedMusic(musicResponse?.data?.[0] || null);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }

  useEffect(() => {
    getMusicData();
  }, []);

  return (
    <main>
      <Box
        sx={{
          maxHeight: "100vh",
          backgroundColor: "#000",
          backgroundImage: `radial-gradient(circle, ${
            selectedMusic?.accent?.length > 0 ? selectedMusic?.accent : "#000"
          }, #000000)`,
          color: "#fff",
        }}
      >
        <Grid container>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <Main
              musicList={musicListToShow}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              loading={loading}
              selectedMusic={selectedMusic}
              setSelectedMusic={setSelectedMusic}
            />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
