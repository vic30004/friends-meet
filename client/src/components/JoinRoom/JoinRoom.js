import React from "react";
import useForm from "../../hooks/UseForm";
import { Button } from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_NAME } from "../../graphql/meetingUsers";
import { ADD_USER_TO_MEETING_ROOM } from "../../graphql/meetingRoom";

const JoinRoom = ({ meetingId }) => {
  const [form, setForm, reset] = useForm({ email: "", name: "" });
  const { name, email } = form;
  const [
    updateUserName,
    { data: userName, loading: userLoading, error: userError },
  ] = useMutation(UPDATE_USER_NAME);

  const [
    addUserToMeetingRoom,
    { data: meetingRoom, loading: meetingLoading, error: meetingError },
  ] = useMutation(ADD_USER_TO_MEETING_ROOM);

  const joinMeeting = async (email, meetingId) => {
    try {
      await addUserToMeetingRoom({
        variables: { addMemberInput: { email, meetingId } },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateNameAndAddUserToMeeting = async (name, email, meetingId) => {
    try {
      await updateUserName({
        variables: { updateMeetingUserNameInput: { name, email, meetingId } },
      });
      joinMeeting(email, meetingId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email) {
      updateNameAndAddUserToMeeting(name, email, meetingId);
    }
  };

  return (
    <Form title={"Join Meeting"} onSubmit={handleSubmit}>
      <Input
        type={"text"}
        text={"Name"}
        name={"name"}
        value={name}
        id={"name"}
        updateForm={setForm}
        required={true}
      />
      <Input
        type={"email"}
        text={"Email"}
        name={"email"}
        value={email}
        updateForm={setForm}
        id={"email"}
        required={true}
      />
      <Button text={"Join Meeting"} />
    </Form>
  );
};

export default JoinRoom;
