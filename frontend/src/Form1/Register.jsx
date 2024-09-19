import React, { useState } from 'react';
import axios from 'axios';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import AnnouncementBar from "../components/Sections/AnnouncementBar";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Sections/Footer";
import styled from "styled-components";


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', { username, email, password });
      console.log(response.data); // You can handle the response data here, e.g., show a success message
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (

    <Wrapper>
      <AnnouncementBar/>
      <TopNavbarWrapper>
        <TopNavbar />
      </TopNavbarWrapper>
      <LoginFormWrapper>
        <div className="whiteBg">
          <div className="container">
          <HeaderInfo>
            <h1 style={{ fontFamily: "Montserrat-Medium", color: "#022e13"}} className="font30">REGISTER</h1> 
            <p className="font13 textCenter" style={{ fontFamily: "Poppins-Medium" }}>
            Please fill in the fields below:
            </p>
            <Form>
            <InputRow>
            <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </InputRow>
            </Form>
            <ButtonInput type="input" value="Register" onClick={handleRegister} className="textCenter font18"/>
            <RegisterLink>
            <p className="textCenter font13" style={{ padding: '10px 15px' }}>
              Already have an account?
              <RouterLink to="/Form2/Login"  style={{ padding: '10px 15px' }}>
                <u>Login</u>
              </RouterLink>
            </p>
          </RegisterLink>
          </HeaderInfo>
          </div>
        </div>
      </LoginFormWrapper>
      <Footer />
    </Wrapper>
  );
};



const Wrapper = styled.section`
  width: 100%;
`;

const TopNavbarWrapper = styled.div`
  position: fixed;
  z-index: 999;
`;

const LoginFormWrapper = styled.section`
  width: 100%;
  margin: 100px 0px 100px 0px;
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
  width:100%;
  padding: 10px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const InputRow = styled.div`
margin: 30px 0 30px 0;
display: flex;
flex-direction: column;
gap: 20px;
width: 100%;
align-items: center; 

`;

const Input = styled.input`
  width: 50%;
  background-color: transparent;
  border: 1px solid #707070;
  height: 30px;
  padding: 10px;
`;

const ButtonInput = styled.input`
border: 1px solid ${(props) => (props.border ? "#022e13" : "#022e13")};
background-color: ${(props) => (props.border ? "transparent" : "#022e13")};
width: 50%;
padding: 10px;
height: 30px;
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

const RegisterLink = styled.div`
  width: 100%;
  margin: 5px 0 5px 0;

`;

export default Register;