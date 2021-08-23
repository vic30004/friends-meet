import { useState } from "react";
import CreateMeetingForm from "../components/CreateMeetingForm/CreateMeetingForm";
import useToggle from "../hooks/useToggle";
import AddUserForm from "../components/AddUserForm/AddUserForm";
import { HomeStyle } from "../styles/Home/HomeStyle";

const Home = () => {
  const [meetingId, setMeetingId] = useState();
  const [show, _, toggle] = useToggle(false);
  console.log(navigator);
  return (
    <HomeStyle>
      {!show ? (
        <CreateMeetingForm
          setMeetingCreated={toggle}
          setMeetingId={setMeetingId}
        />
      ) : (
        ""
      )}

      {show ? (
        <AddUserForm setMeetingCreated={toggle} meetingId={meetingId} />
      ) : (
        ""
      )}
    </HomeStyle>
  );
};

export default Home;
