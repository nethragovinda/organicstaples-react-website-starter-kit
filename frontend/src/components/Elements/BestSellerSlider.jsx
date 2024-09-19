import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ProductBox from "../Elements/ProductBox";
import CoconutOil from "../../assets/img/Products/CoconutOil.png";
import GroundnutOil from "../../assets/img/Products/GroundnutOil.png";
import SesameOil from "../../assets/img/Products/SesameOil.png";
import CastorOil from "../../assets/img/Products/CastorOil.png";
import CoconutRawSugar from "../../assets/img/Products/CoconutRawSugar.png";
import SproutedRagiFlour from "../../assets/img/Products/SproutedRagiFlour.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function BestSellerSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };

  function SampleNextArrow(props) {
    const {style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          display: "block",
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: "1",
          color: "#022e13",
          fontSize: "50px"
        }}
        onClick={onClick}
      >
      <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  }

  
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          display: "block",
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          zIndex: "1",
          color: "#022e13",
          fontSize: "50px"
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />

      </div>
    );
  }
  
  return (
    <SliderWrapper>
      <Slider {...settings}>
      <ProductBoxWrapper>
          <ProductBox
            img={CoconutOil}
            text="Wood-Pressed Coconut Oil( 1000ml )"
            price="Rs. 550"
            action={() => alert("clicked")}
          />
        </ProductBoxWrapper>
        <ProductBoxWrapper>
          <ProductBox
            img={GroundnutOil}
            text="Wood-Pressed Groundnut Oil( 1000ml )"
            price="Rs. 500"
            action={() => alert("clicked")}
          />
        </ProductBoxWrapper>
        <ProductBoxWrapper>
          <ProductBox
            img={SesameOil}
            text="Wood-Pressed Sesame Oil( 250ml )"
            price="Rs. 350"
            action={() => alert("clicked")}
          />
        </ProductBoxWrapper>
        <ProductBoxWrapper>
          <ProductBox
            img={CastorOil}
            text="Wood-Pressed Castor Oil( 250ml )"
            price="Rs. 500"
            action={() => alert("clicked")}
          />
        </ProductBoxWrapper>
        <ProductBoxWrapper>
          <ProductBox
            img={CoconutRawSugar}
            text="Coconut Raw Sugar( 500g )"
            price="Rs. 600"
            action={() => alert("clicked")}
          />
        </ProductBoxWrapper>
        <ProductBoxWrapper>
          <ProductBox
            img={SproutedRagiFlour}
            text="Sprouted Ragi Flour( 1000g )"
            price="Rs. 500"
            action={() => alert("clicked")}
          />
        </ProductBoxWrapper>
     
      </Slider>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const ProductBoxWrapper = styled.div`
  width: 338px;
  height: auto;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1200px) {
    margin-right: 10px;
  }

  @media (max-width: 992px) {
    margin-right: 5px;
  }
`;

