import React from "react";
import { ButtonStyle } from "../../styles/ButtonStyle";

export const Button = ({ text, handleClick = false }) => {
  return (
    <ButtonStyle onClick={handleClick ? (e) => handleClick(e) : ""}>
      {text}
    </ButtonStyle>
  );
};
