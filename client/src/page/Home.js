import { useState } from "react";
import CreateMeetingForm from "../components/CreateMeetingForm/CreateMeetingForm";
import useToggle from "../hooks/useToggle";
import AddUserForm from "../styles/AddUserForm/AddUserForm";
import { HomeStyle } from "../styles/Home/HomeStyle";

const Home = () => {
  const [show, _, toggle] = useToggle(false);
  return (
    <HomeStyle>
      {!show ? <CreateMeetingForm setMeetingCreated={toggle} /> : ""}

      {show ? <AddUserForm setMeetingCreated={toggle} /> : ""}
    </HomeStyle>
  );
};

export default Home;
