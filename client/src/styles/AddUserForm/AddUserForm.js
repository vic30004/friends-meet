import { useState } from "react";
import { Button } from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import useForm from "../../hooks/UseForm";

const AddUserForm = ({ setMeetingCreated }) => {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
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
  const handleSubmit = (e) => {
    e.preventDefault();
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
