
// src/js/component/home.js
import React from "react";
import AudioPlayer from "./AudioPlayer.jsx";
import { sampleTracks } from "./sampleData.jsx";

const Home = () => {
  return (
    <div className="text-center">
      <AudioPlayer tracks={sampleTracks} />
    </div>
  );
};

export default Home;