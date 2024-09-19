import React from "react";
import styled from "styled-components";
import BestSellerSlider from "../Elements/BestSellerSlider";
import FullButton from "../Buttons/FullButton";

export default function BestSellers() {
    return (
      <Wrapper id="product_menu">
        <div className="whiteBg">
          <div className="container" style={{margin:"100px 0 100px 0"}}>
            <HeaderInfo className="textCenter">
              <h1 style={{ fontFamily: "Montserrat-Medium", color: "#022e13" }} className="font30">BEST SELLING PRODUCTS</h1>
            </HeaderInfo>
            <div>
                <BestSellerSlider/>
            </div>
          <ButtonInfo className="row flexCenter">
            <div style={{width: "150px"}}>
                <FullButton title="VIEW ALL" action={() => alert("clicked")} />
            </div>
          </ButtonInfo>
          </div>
        </div>
       </Wrapper>
    )
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  margin: 20px 0 20px 0;
  padding: 20px 20px; 
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const ButtonInfo = styled.div`
  margin: 20px;
`;