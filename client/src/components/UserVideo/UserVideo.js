import React from "react";
import { VideoStyle } from "../../styles/VideoStyle/VideoStyle";

const UserVideo = ({ myVideo, name }) => {
  return (
    <VideoStyle>
      <video playsInline muted ref={myVideo} autoPlay></video>
      <p>{name}</p>
    </VideoStyle>
  );
};

export default UserVideo;
