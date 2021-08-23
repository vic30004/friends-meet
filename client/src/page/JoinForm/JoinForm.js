import React, { Fragment } from "react";
import JoinRoom from "../../components/JoinRoom/JoinRoom";
import { CenterMiddleOfPage } from "../../styles/common";

const JoinForm = (props) => {
  return (
    <CenterMiddleOfPage>
      <JoinRoom meetingId={props.match.params.meetingId} />
    </CenterMiddleOfPage>
  );
};

export default JoinForm;
