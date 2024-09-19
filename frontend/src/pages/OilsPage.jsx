import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Sections/Footer";
import styled from "styled-components";
 

const OilsPage = () => {
    return(
        <Wrapper>
        <TopNavbarWrapper>
          <TopNavbar />
        </TopNavbarWrapper>
        <div id='collection-component-1698606566020'></div>
        <Footer />
        </Wrapper>

    );
}

export default OilsPage;

const Wrapper = styled.div`
  width: 100%;
`;

const TopNavbarWrapper = styled.div`
  position: fixed;
  z-index: 999;
`;