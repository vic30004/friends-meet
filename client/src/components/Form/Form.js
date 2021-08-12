import React from "react";
import { FormStyle } from "../../styles/Form/FormStyles";
import { Button } from "../Button/Button";
import Input from "../Input/Input";

const Form = ({ children, title, onSubmit }) => {
  console.log(children);
  return (
    <FormStyle onSubmit={(e) => onSubmit(e)}>
      <h2>{title}</h2>
      {children}
    </FormStyle>
  );
};

export default Form;
