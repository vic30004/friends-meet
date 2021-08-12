import  { useState } from "react";

function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state);
  };

  return [state, setState, toggle];
}

export default useToggle;
