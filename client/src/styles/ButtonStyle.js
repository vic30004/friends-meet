import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: #4f6f7b;
  width: 190px;
  padding: 0.75rem 0.5rem;
  cursor: pointer;
  box-shadow: 2px 3px 10px black;
  color: var(--white-color);
  font-size: 1rem;
  font-family: var(--title-font);
  font-weight: bold;
  margin-top: 1rem;
  border-radius: 10px;
  border: none;
  transition: 0.3s ease-in-out;
  letter-spacing: 1.4px;

  &:hover {
    transform: translateY(2%);
    box-shadow: 1px 1.5px 5px black;
  }

  &:active {
    transform: translateY(3%);
    box-shadow: none;
  }

  &:disabled {
    box-shadow: none;
    background: gray;
  }
`;
