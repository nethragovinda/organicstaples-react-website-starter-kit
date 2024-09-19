import React from "react";
import styled from "styled-components";
import logo_background from "../../assets/img/BGLogo.png";

export default function WhyUs() {
  return (
    <Wrapper id="WhyUs">
      <BackImage className="flexCenter" >
      <HeaderInfo>
        <p className="font18 textCenter" style={{ fontFamily: "Poppins-Medium" }}>
          <span className="font25" style={{ fontFamily: "Poppins-Medium" }}>
            At Your Brand,
          </span>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae urna sed dolor varius ornare ut quis erat. -{" "}
          <span className="font30" style={{ fontFamily: "Montserrat-Medium", color: "#55833d" }}>
          Morbi sagittis, imperdiet vestibulum, lacinia velit,
          </span>{" "}
          - vitae dictum nulla sem quis turpis. Quisque vitae nisl vitae nisi cursus rhoncus. Cras aliquam tortor eros, id hendrerit nunc vehicula id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
          <br />
          <br />
          Nam nec feugiat justo. Cras dignissim nec felis nec viverra. Pellentesque pretium lacus non nibh consectetur, ut tempus mi bibendum.
        </p>
      </HeaderInfo>
      </BackImage>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const BackImage = styled.div`
  background-image: url(${logo_background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 550px;
  z-index: -1;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  margin: 0 auto;
  padding: 0px 0px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
