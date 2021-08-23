import { useState } from "react";
import { Button } from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { useMutation } from "@apollo/client";
import { ADD_USER_TO_MEETING } from "../../graphql/meetingUsers";

const AddUserForm = ({ setMeetingCreated, meetingId }) => {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const [addUserToMeeting, { data, loading, error }] =
    useMutation(ADD_USER_TO_MEETING);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const addEmail = (e) => {
    e.preventDefault();
    const check = emails.find((user) => email === user);
    if (emails.length === 5) {
      alert("You reached max capacity");
      return;
    }
    if (check) {
      alert("User is already in your list");
      return;
    }

    emails.push(email);
    setEmail("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let val of emails) {
      try {
        await addUserToMeeting({
          variables: { addUserToMeetingInput: { email: val, meetingId } },
        });
      } catch (error) {
        console.log(error);
      }
    }
    setMeetingCreated(false);
  };
  return (
    <Form title={"Add Guests"} onSubmit={handleSubmit}>
      <Input
        type={"email"}
        text={"Email"}
        name={"email"}
        id={"email"}
        value={email}
        updateForm={handleChange}
      />
      <p onClick={(e) => addEmail(e)}>
        Guests Invited: {emails.length > 0 ? emails.length : 0} out of 5
      </p>
      <Button text={"Add"} handleClick={addEmail}>
        Add
      </Button>
      {emails.length === 0 ? "" : <Button text={"Invite All"} />}
    </Form>
  );
};

export default AddUserForm;
