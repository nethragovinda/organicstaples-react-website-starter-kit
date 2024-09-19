import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer"
      onClick={action ? () => action() : null}
      border={border}
    >
     {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#022e13" : "#022e13")};
  background-color: ${(props) => (props.border ? "transparent" : "#022e13")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#022e13" : "#fff")};
  font-size: 18px;
  font-weight: bold;
  font-family: "Montserrat-Medium";
  :hover {
    background-color: ${(props) => (props.border ? "#022e13" : "transparent")};
    border: 2px solid #022e13;
    color: ${(props) => (props.border ? "#fff" : "#022e13")};
  }
`;

