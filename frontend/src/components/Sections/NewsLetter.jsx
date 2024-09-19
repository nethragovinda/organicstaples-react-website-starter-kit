import React from "react";
import styled from "styled-components";


export default function NewsLetter() {
  return (
    <Wrapper id="NewsLetter">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 style={{ fontFamily: "Montserrat-Medium", color: "#022e13", paddingBottom: "30px"}} className="font30">DON'T MISS A BEAT....</h1>
            <p className="font18 textCenter" style={{ fontFamily: "Poppins-Medium" }}>
              ...Just pop your email Id to join our fam and stay connected through the newsletter
            </p>
            <Form>
                <InputRow>
                    <Input type="text" id="fname" name="fname" placeholder="First Name" className="textCenter font18" />
                    <Input type="text" id="lname" name="lname" placeholder="Last Name" className="textCenter font18" />
                </InputRow>
                <Input type="text" id="email" name="email" placeholder="Email Id" className="textCenter font18" />
            </Form>
            <div className="row flexCenter" style={{paddingTop: "30px"}}>
                    <div style={{width: "150px"}}>
                        <ButtonInput type="submit" value="SUBSCRIBE" />
                    </div>
            </div>
          </HeaderInfo>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin: 80px 0px 60px 0px;
`;
const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 900px;
    margin: 0 auto;
    padding: 30px 30px;
    @media (max-width: 768px) {
        width: 90%;
        padding: 20px;
    }
`;
const Form = styled.form`
  padding: 10px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 50%;
  background-color: transparent;
  border: 1px solid #707070;
  height: 30px;
  padding: 10px;
`;


const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center; 

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const ButtonInput = styled.input`
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
