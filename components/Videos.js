import React from "react";
// import VideoPlayer from "react-native-video-controls";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import { Button } from "react-native";

const Videos = ({ onClose }) => {
  const [status, setStatus] = React.useState({});

  return (
    <>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: "https://vjs.zencdn.net/v/oceans.mp4",
          },
        }}
        playbackCallback={(status) => setStatus(status)}
      />
    </>
  );
};

export default Videos;
