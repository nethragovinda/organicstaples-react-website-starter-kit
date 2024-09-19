import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Sections/Footer";
import styled from "styled-components";
import ProductBox from "../components/Elements/ProductBox";
import productsData from "../Data/productsData";

import oils_icon from "../assets/img/Icons/oils_icon.jpg";
import flours_icon from "../assets/img/Icons/flours_icon.jpg";
import sugars_icon from "../assets/img/Icons/sugars_icon.jpg";
import AnnouncementBar from "../components/Sections/AnnouncementBar";


const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const filteredProducts = selectedProduct
    ? productsData.filter((product) => product.category === selectedProduct)
    : productsData;

  return (
    <Wrapper>
      <AnnouncementBar/>
      <TopNavbarWrapper>
        <TopNavbar />
      </TopNavbarWrapper>
      <ImageSection className="flexCenter">
        <RoundButton onClick={() => handleProductClick("oils")}>
          <RoundImage src={oils_icon} alt="oils_icon" />
        </RoundButton>
        <RoundButton onClick={() => handleProductClick("flours")}>
          <RoundImage src={flours_icon} alt="flours_icon" />
        </RoundButton>
        <RoundButton onClick={() => handleProductClick("sugars")}>
          <RoundImage src={sugars_icon} alt="sugars_icon" />
        </RoundButton>
      </ImageSection>
      <PathSection>
        <Link to="/">Home</Link> {" "}
        <a href="#" onClick={() => handleProductClick(null)}>
          All Products
        </a>{" "}
        {selectedProduct && `> ${selectedProduct}`}
      </PathSection>
      <DisplaySection>
        {filteredProducts.map((product, index) => (
          <ProductBoxWrapper key={index}>
            <ProductBox
              img={product.img}
              text={product.text}
              price={product.price}
              action={() => alert("Clicked")}
            />
          </ProductBoxWrapper>
        ))}
      </DisplaySection>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const TopNavbarWrapper = styled.div`
  position: fixed;
  z-index: 999;
`;

const ImageSection = styled.section`
  margin-top: 100px;
  background-color: #FDF6E9;
`;

const RoundButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 20px;
`;

const RoundImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const PathSection = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  font-size: 14px;
  color: #022e13;

  a {
    color: #022e13;
    text-decoration: none;

    &:not(:last-child)::after {
      content: " > ";
    }
  }
`;
const DisplaySection = styled.section`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductBoxWrapper = styled.div`
  width: 100%;
`;

export default ProductsPage;
