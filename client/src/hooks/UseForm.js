import { useState } from "react";

function useForm(initialVal = {}) {
  const [state, setState] = useState(initialVal);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const reset = () => {
    if (typeof state === "object") {
      for (let val in state) {
        console.log(state[val]);
        state[val] = "";
        console.log(state);
      }
    } else {
      setState("");
    }
  };
  return [state, handleChange, reset, setState];
}

export default useForm;
