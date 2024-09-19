import React from "react";
import styled from "styled-components";
import CarouselSlider from "../Elements/CarouselSlider";



export default function HeroSection() {

    return (
        <Wrapper id="hero_section">
         <div>
            <div className="container">
            <CarouselSlider/>
            </div>
        </div>
        </Wrapper>
    );    
}

const Wrapper = styled.section`
    width: 100%;
    margin-top: 85px;
`;