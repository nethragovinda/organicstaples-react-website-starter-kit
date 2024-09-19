import React from "react";
import styled from "styled-components";

import blog_image1 from "../../assets/img/Blogs/blog-image1.jpg";
import blog_image2 from "../../assets/img/Blogs/blog-image2.jpg";
import blog_image3 from "../../assets/img/Blogs/blog-image3.jpg";

export default function Blogs() {
  return (
    <Wrapper>
      <Leftside>
        <ImageContainer>
          <img src={blog_image1} alt="product" />
        </ImageContainer>
        <TextArea>
          <h2>Coconut Oil for Cooking</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. Read More...
            <br/>
          </p>
        </TextArea>
      </Leftside>

      <Rightside>
        <UpperRight>
          <ImageContainer>
            <img src={blog_image2} alt="product" />
          </ImageContainer>
          <TextArea>
            <h2>Coconut Oil for Cooking</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. Read More...
              <br/>
            </p>
          </TextArea>
        </UpperRight>
        <LowerRight>
          <ImageContainer>
            <img src={blog_image3} alt="product" />
          </ImageContainer>
          <TextArea>
            <h2>Coconut Oil for Cooking</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. Read More...
              <br/>
            </p>
          </TextArea>
        </LowerRight>

      </Rightside>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
`;


const Leftside = styled.div`
  flex: 60%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const Rightside = styled.div`
  flex: 40%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const UpperRight = styled.div`
  flex: 1;
  padding-bottom:10px;
`;

const LowerRight = styled.div`
  flex: 1;
`;


const ImageContainer = styled.div`
  height: 80%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextArea = styled.div`
  height: 20%;
  background-color: #f1f1f1;
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
  }
`;
