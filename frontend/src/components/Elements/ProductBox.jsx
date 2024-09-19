import React, { useState } from "react";
import styled from "styled-components";

export default function ProductBox({ img, text, price, action }) {
  const [hover, setHover] = useState(false);

  return (
    <Wrapper className="textCenter">
      <ImgBtn
        className="animate pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={action ? () => action() : null}
      >
        <ImgWrapper hover={hover}>
          <img src={img} alt="product"></img>
        </ImgWrapper>
      </ImgBtn>
      <Text>
        <HeaderInfo>
          <h1 className="font14">
            {text}
          </h1>
        </HeaderInfo>
        <PriceInfo> 
          <p className="font13">
            {price}
          </p>
        </PriceInfo>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  padding: 20px;
`;

const HeaderInfo =styled.div`
  white-space: nowrap;
  font-family: "Montserrat-Medium";
  padding:5px, 5px;

`;
const PriceInfo = styled.div`
  font-family: "Montserrat-Medium";
  padding:5px;
`;

const ImgBtn = styled.button`
  position: relative;
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
`;


const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 420px;
  img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
    transition: transform 0.5s ease-out;
    &:hover {
      transform: translateY(-5px);
    }
  }
`;






