import React, { useState } from "react";
import styled from "styled-components";

export default function ProductMenuBox({ img, text, action }) {
  const [hover, setHover] = useState(false);

  return (
    <Wrapper className="textCenter">
      <ImgBtn
        className="animate pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={action ? () => action() : null}
      >
        <img src={img} alt="product"></img>
        {hover && <TextWrapper>View</TextWrapper>}
      </ImgBtn>
      <Text>
        <p className="font18" style={{ fontFamily: "Montserrat-Medium" }}>
          {text}
        </p>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 510px;
    object-fit: cover;
  }
`;

const Text = styled.div`
  margin: 10px;
`;

const ImgBtn = styled.button`
  position: relative;
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
  :hover > div {
    display: flex;
  }
`;
const TextWrapper = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: none;
justify-content: center;
align-items: center;
color: white;
font-size: 24px;
font-family: Montserrat-Medium;
background-color: rgba(0,0,0,0.6);
`;
