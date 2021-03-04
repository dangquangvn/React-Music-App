import React, { useState } from "react";
//Import Styles
import "./styles/app.scss";
// Adding components
import Song from "./components/Song";
import Player from "./components/Player";
// Import Data
import data from "./data";

function App() {
  //STATE
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  // console.log(currentSong.artist);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
