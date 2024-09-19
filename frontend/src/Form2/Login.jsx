// Login.jsx ///latest full code
import React, { useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import AnnouncementBar from "../components/Sections/AnnouncementBar";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Sections/Footer";
import styled from "styled-components";

const Login = () => {
  const { setIsLoggedIn, setUsername } = useAuth();
  const [usernameValue, setUsernameValue] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username: usernameValue,
        password,
      });
      console.log(response.data);

      if (response.status === 200) {
        setIsLoggedIn(true);
        setUsername(usernameValue);
        history.push('/'); // Redirect the user to the home page after successful login
      } else {
        // Show error message or perform actions for failed login
      }
    } catch (error) {
      console.error(error.response.data);
      // Handle login error here...
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
            <h1 style={{ fontFamily: "Montserrat-Medium", color: "#022e13"}} className="font30">LOGIN</h1>  
            <p className="font13 textCenter" style={{ fontFamily: "Poppins-Medium" }}>
              Just pop your email Id & password to login
            </p>
          <Form>
          <InputRow>
            <Input
              type="text"
              placeholder="Username"
              value={usernameValue}
              onChange={(e) => setUsernameValue(e.target.value)}
              className="textCenter font18"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="textCenter font18"
            />
           </InputRow>
          </Form>
          <SubmitButton>
            <ButtonInput type="input" value="Login" onClick={handleLogin} className="textCenter font18"/>
          </SubmitButton>
          <RegisterLink>
            <p className="textCenter font13" style={{ padding: '10px 15px' }}>
              New Customer? 
              <RouterLink to="/Form1/Register"  style={{ padding: '10px 15px' }}>
                <u>Create an account</u>
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


const SubmitButton = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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



export default Login;