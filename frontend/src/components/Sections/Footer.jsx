import React from "react";
import styled from "styled-components";
import LogoFooter from "../../assets/svg/FooterLogo";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <FooterWrapper>
        <InnerWrapper className="flexSpaceNull" style={{ padding: "30px 10px" }}>
          <LogoContainer>
            <LogoFooter />
          </LogoContainer>
          <ContentContainer>
            <LinksContainer>
              <ul>
                <li>
                  <a href="#" style={{ color: "#022e13" }} className="font18">
                    Quick Links:
                  </a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms Of Service</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">Shipping Policy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </LinksContainer>
            <ContactInfoContainer>
              <p>JSGHDJD SJGDDJS SJHDJDH</p>
              <p>(REGNO: FFFFFFFFFFFFF)</p>
              <p>No 96, ERFFF FFF</p>
              <p>ADFFD GHGH KJFFF </p>
              <p>DKJFHKDJFH ASKJDHGDJKH </p>
              <br />
              <p>Email: abc@gmail.com</p>
              <p>Tel: +91 9913121212</p>
              <p>Grievances: +91 9913121212</p>
            </ContactInfoContainer>
          </ContentContainer>
          <FollowUsContainer className="left">
            <p>Follow Us On:</p>
            <SocialMediaIcons>
              <a href="#">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube fa-lg"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest fa-lg"></i>
              </a>
            </SocialMediaIcons>
          </FollowUsContainer>
        </InnerWrapper>
        <FooterCopyWriteCaption>
          <p>© {getCurrentYear()}, Your Brand. All Rights Reserved</p>
        </FooterCopyWriteCaption>
      </FooterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const FooterWrapper = styled.div`
display: flex;
flex-direction: column;
`;

const InnerWrapper = styled.div`
  border-top: 1px solid #000000;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  width: 200px;
  height: 200px;
  @media (max-width: 550px) {
   width:100%;
   height:auto;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const LinksContainer = styled.div`
  padding: 20px;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;

    li {
      margin: 10px 10px;
      a {
        color: #000000;
      }
    }
  }

`;

const ContactInfoContainer = styled.div`
  padding: 30px;

  p {
    font-family: "gothicb";
    line-height: 1.6;
    font-size: 16px;
    color: #000000;
  }
  
`;

const FooterCopyWriteCaption = styled.div`
text-align: center;
  p {
    padding: 20px;
    font-family: "gothicb";
    font-size: 14px;
    color: #000000;
  }

`;

const FollowUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 30px;

  p {
    color: #022e13;
    font-size: 18px;
    padding: 20px 15px 20px 0px;
  }
 
`;

const SocialMediaIcons = styled.div`
  margin-top: 15px;

  a {
    margin-right: 10px;
    color: #022e13;

    i {
      font-size: 40px;
    }
  }

`;

export default Footer;
