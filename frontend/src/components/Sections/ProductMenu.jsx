import React from "react";
import styled from "styled-components";
// Components
import ProductMenuBox from "../Elements/ProductMenuBox";
import { Link } from "react-router-dom";

// Assets
import product_menu_1 from "../../assets/img/ProductMenu/product_menu_1.jpeg";
import product_menu_2 from "../../assets/img/ProductMenu/product_menu_2.jpeg";
import product_menu_3 from "../../assets/img/ProductMenu/product_menu_3.jpeg";

export default function ProductMenu() {
  return (
    <Wrapper id="product_menu">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo className="textCenter">
            <h1 style={{ fontFamily: "Montserrat-Medium", color: "#022e13" }} className="font30">
              MOST LOVED GOODNESS<span><br /></span> FROM THE SOIL
            </h1>
          </HeaderInfo>
          <ProductMenuContainer>
            <ProductBoxContainer>
              <Link to="/pages/OilsPage">
                <ProductMenuBox
                  img={product_menu_1}
                  text="Organic Wooden-Cold-Pressed Oils"
                  action={() => alert("clicked")}
                />
              </Link>
            </ProductBoxContainer>
            <ProductBoxContainer>
              <ProductMenuBox
                img={product_menu_2}
                text="Stone Ground Flours"
                action={() => alert("clicked")}
              />
            </ProductBoxContainer>
            <ProductBoxContainer>
              <ProductMenuBox
                img={product_menu_3}
                text="Natural Raw Sugar"
                action={() => alert("clicked")}
              />
            </ProductBoxContainer>
          </ProductMenuContainer>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ProductMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-left: 5px;
`;

const ProductBoxContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;


  @media (min-width: 860px) {
    width: calc(33.33% - 5px);
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
 
  }
`;

const HeaderInfo = styled.div`
  margin: 20px 0 20px 0;
  padding: 20px 20px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
