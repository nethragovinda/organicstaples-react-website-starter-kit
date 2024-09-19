import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import HeroOne from "../../assets/img/hero-one.png";
import HeroTwo from "../../assets/img/hero-two.jpg";
import HeroThree from "../../assets/img/hero-three.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function CarouselSlider() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

    }; 
    function SampleNextArrow(props) {
      const { style, onClick } = props;
      return (
        <div
          style={{ ...style, 
            display: "block",
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            zIndex: "1",
            color: "#FFFFFF",
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
            color: "#FFFFFF",
            fontSize: "50px"
          }}
            onClick={onClick}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      );
    }

    return(
      <div>
        <Slider {...settings}>
          <ImageWrapper className="flexCenter">
            <ImgStyle src={HeroOne} alt="client logo" />
          </ImageWrapper>
          <ImageWrapper className="flexCenter">
            <ImgStyle src={HeroTwo} alt="client logo" />
          </ImageWrapper>
          <ImageWrapper className="flexCenter">
            <ImgStyle src={HeroThree} alt="client logo" />
          </ImageWrapper>
        </Slider>
    </div>
    ) 
  };
  
const ImageWrapper = styled.div`
  width: 100%;
  height: 550px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
`;
