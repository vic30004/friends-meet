import React, { useEffect, useRef, useState, createRef } from "react";
import UserVideo from "../../components/UserVideo/UserVideo";
import { useSubscription, useQuery } from "@apollo/client";
import {
  JOIN_MEETING,
  GET_MEETING_ROOM_MEMBERS,
} from "../../graphql/meetingRoom";

const Video = () => {
  const [stream, setStream] = useState(null);
  const [members, setMembers] = useState([]);
  const [call, setCall] = useState({});

  const { data, loading } = useSubscription(JOIN_MEETING);
  const {
    data: meetingRoom,
    error,
    loading: meetingRoomLoading,
  } = useQuery(GET_MEETING_ROOM_MEMBERS, {
    variables: { meetingRoomInput: { meetingId: 31 } },
  });
  
  const myVideo = useRef([]);

  const getVideo = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setStream(mediaStream);
    myVideo.current.forEach((ref) => {
      ref.current.srcObject = mediaStream;
    });
  };

  useEffect(() => {
    if (meetingRoom?.meetingRoom) {
      const meetingRoomMembers = meetingRoom.meetingRoom;
      console.log(meetingRoomMembers);
      meetingRoomMembers.forEach((data, i) => {
        members.push(data.member);
      });
    }
  }, [meetingRoomLoading]);

  useEffect(() => {
    if (data) {
      members.push(data?.memberJoined);
    }
  }, [loading]);

  useEffect(() => {
    if (members.length > 0) {
      members.map((_, i) => (myVideo.current[i] = createRef()));
      getVideo();
    }
  }, [data, meetingRoom]);
  console.log(stream);
  return (
    <div>
      {members.map((member, i) => (
        <UserVideo myVideo={myVideo.current[i]} name={member?.email} />
      ))}
    </div>
  );
};

export default Video;
