
import React from "react";
import AudioPlayer from "./AudioPlayer.jsx";
import { Songs} from "./songData.jsx";

const Home = () => {
  return (
    <div className="text-center">
      <AudioPlayer songs={ Songs} />
    </div>
  );
};

export default Home;