import React from "react";
import useForm from "../../hooks/UseForm";
import { Button } from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

const CreateMeetingForm = ({ setMeetingCreated }) => {
  const [form, setForm, reset] = useForm({ name: "", email: "" });
  const { name, email } = form;
  const handleSubmit = (e) => {
    e.preventDefault();
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
