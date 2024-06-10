import { useState, forwardRef } from "react";

import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  Slide,
} from "@mui/material";

import Player from "./Player";
import MusicListWrapper from "./MusicListWrapper";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Main({
  musicList,
  activeTab,
  setActiveTab,
  loading,
  selectedMusic,
  setSelectedMusic,
}) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showMusicListMenu, setShowMusicListMenu] = useState(false);
  const [isMusicClicked, setIsMusicClicked] = useState(false);

  let musicListToShow = musicList;
  if (searchKeyword?.length > 0) {
    musicListToShow = musicList?.filter((music) => {
      const name = music?.name?.toLowerCase() || "";
      const artist = music?.artist?.toLowerCase() || "";
      const lowerCaseSearchKeyword = searchKeyword?.toLowerCase();

      return (
        name?.includes(lowerCaseSearchKeyword) ||
        artist?.includes(lowerCaseSearchKeyword)
      );
    });
  }

  const selectedMusicIndex = musicListToShow?.findIndex(
    (music) => music?.id === selectedMusic?.id
  );

  function handleMusicClick(m) {
    setIsMusicClicked(true);
    setSelectedMusic(m);
  }

  function handleNextClick() {
    if (
      selectedMusicIndex === musicListToShow?.length - 1 ||
      selectedMusicIndex === -1
    ) {
      return;
    }

    setSelectedMusic(musicListToShow[selectedMusicIndex + 1]);
  }

  function handlePreviousClick() {
    if (selectedMusicIndex === 0 || selectedMusicIndex === -1) {
      return;
    }

    setSelectedMusic(musicListToShow[selectedMusicIndex - 1]);
  }

  return (
    <Grid container sx={{ maxHeight: "100vh" }}>
      <Grid
        item
        sm={6}
        md={5}
        lg={5}
        sx={{
          "@media (max-width:600px)": { display: "none" },
        }}
      >
        <MusicListWrapper
          activeTab={activeTab}
          setActiveTab={(value) => {
            setSearchKeyword("");
            setActiveTab(value);
          }}
          loading={loading}
          musicListToShow={musicListToShow}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          selectedMusic={selectedMusic}
          setSelectedMusic={handleMusicClick}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={7} lg={7}>
        {loading ? (
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Player
            selectedMusic={selectedMusic}
            onNext={handleNextClick}
            onPrevious={handlePreviousClick}
            nextButtonDisabled={
              selectedMusicIndex === musicListToShow?.length - 1
            }
            previousButtonDisabled={selectedMusicIndex === 0}
            onMenuClick={() => setShowMusicListMenu(true)}
            autoPlay={isMusicClicked}
            onEnd={handleNextClick}
          />
        )}
      </Grid>
      <Dialog
        fullScreen
        open={showMusicListMenu}
        onClose={() => setShowMusicListMenu(false)}
        TransitionComponent={Transition}
      >
        <DialogContent
          sx={{
            backgroundColor: "#000",
            backgroundImage: `linear-gradient(to right bottom, ${
              selectedMusic?.accent?.length > 0 ? selectedMusic?.accent : "#000"
            }, #000000)`,
            paddingLeft: "0",
          }}
        >
          <MusicListWrapper
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            loading={loading}
            musicListToShow={musicListToShow}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            selectedMusic={selectedMusic}
            setSelectedMusic={(m) => {
              setSelectedMusic(m);
              setIsMusicClicked(true);
            }}
            onCloseMusicListMenu={() => setShowMusicListMenu(false)}
          />
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
