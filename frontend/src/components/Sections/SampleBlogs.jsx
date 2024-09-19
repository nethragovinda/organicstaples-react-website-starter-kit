import React from "react";
import styled from "styled-components";

import blog_image1 from "../../assets/img/Blogs/blog-image1.jpg";
import blog_image2 from "../../assets/img/Blogs/blog-image2.jpg";
import blog_image3 from "../../assets/img/Blogs/blog-image3.jpg";

export default function Blogs() {
  return (
    <WrapperCombine>
      <HeaderInfo className="textCenter">
        <h1 style={{ fontFamily: "Montserrat-Medium", color: "#022e13" }} className="font30">
          BLOGS
        </h1>
      </HeaderInfo>
      <Wrapper>
        <Grid>
          <Button1>
            <ImageContainer>
              <img src={blog_image1} alt="product" />
            </ImageContainer>
            <TextArea>
              <h2>Coconut Oil for Cooking</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Read
                More...
                <br />
              </p>
            </TextArea>
          </Button1>
          <Button2>
            <ImageContainer>
              <img src={blog_image2} alt="product" />
            </ImageContainer>
            <TextArea>
              <h2>Coconut Oil for Cooking</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Read
                More...
                <br />
              </p>
            </TextArea>
          </Button2>
          <Button3>
            <ImageContainer>
              <img src={blog_image3} alt="product" />
            </ImageContainer>
            <TextArea>
              <h2>Coconut Oil for Cooking</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Read
                More...
                <br />
              </p>
            </TextArea>
          </Button3>
        </Grid>
      </Wrapper>
    </WrapperCombine>
  );
}

const WrapperCombine = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  height: auto;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: grid;
  width: 100%;
`;

const Button1 = styled(Button)`
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
`;

const Button2 = styled(Button)`
  grid-column: 3 / span 2;
  @media (max-width: 860px) {
    grid-column: span 2;
  }
`;

const Button3 = styled(Button)`
  grid-column: 3 / span 2;
  @media (max-width: 860px) {
    grid-column: span 2;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
  }
`;

const TextArea = styled.div`
  height: auto;
  background-color: #ecffdc;
  padding: 20px 0px;

  h2 {
    text-align: left;
    font-size: 20px;

  }

  p {
    text-align: left;
    font-size: 16px;
  }
`;

const HeaderInfo = styled.div`
  margin: 20px 0;
  padding: 20px;

  @media (max-width: 860px) {
    text-align: center;
  }
`;
