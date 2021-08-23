import React, { useState } from "react";
import useForm from "../../hooks/UseForm";
import { Button } from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../graphql/users";
import { CREATE_MEETING } from "../../graphql/meetings";

const CreateMeetingForm = ({ setMeetingCreated, setMeetingId }) => {
  const [form, setForm, reset] = useForm({ name: "", email: "" });
  const { name, email } = form;
  const [addUser, { data: user, loading: userLoading, error: userError }] =
    useMutation(ADD_USER, {
      variables: { addUserInput: { email, name } },
    });
  const [
    createMeeting,
    { data: meeting, loading: meetingLoading, error: meetingError },
  ] = useMutation(CREATE_MEETING);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && name) {
      try {
        const newUser = await addUser({ form });
        if (userError) {
          alert("Something went wrong");
          return;
        }
        if (!userLoading) {
          const id = newUser.data.addUser.id;
          try {
            const newMeeting = await createMeeting({
              variables: { createMeetingInput: { ownerId: id } },
            });
            const meetingId = newMeeting.data.createMeeting.id;
            setMeetingId(meetingId);
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
        console.log(userError);
        alert("Something went wront");
        return;
      }
    }
    setMeetingCreated(true);

    reset();
  };
  return (
    <Form title={"Create A Meeting"} onSubmit={handleSubmit}>
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
      <Button text={"Create Meeting"} />
    </Form>
  );
};

export default CreateMeetingForm;
