import { Fragment } from "react";
import { InputStyle } from "../../styles/Input/InputStyles";

const Input = ({ text, type, value, name, id, updateForm, required }) => {
  return (
    <InputStyle>
      <label for={name}>{text} </label>
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        onChange={(e) => updateForm(e)}
        require={required}
      />
    </InputStyle>
  );
};

export default Input;
