import React, { useState, useEffect, useContext} from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from '../AuthContext';
import Logout from '../Logout'; 


//import LogoIcon from "../assets/svg/Logo1";
import LogoIcon from "../assets/svg/NavLogo";

export default function TopNavbar() {
  const { isLoggedIn, username } = useAuth();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <Wrapper className="flexCenter animate whiteBg" scrolled={scrolled}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="HOME" smooth={true} style={{ padding: "5px" }}>
          <RouterLink to="/"><LogoIcon /></RouterLink>
            
          </Link>
          <MobileMenuToggle onClick={handleMobileMenuToggle}>
            <div />
            <div />
            <div />
          </MobileMenuToggle>
          <UlWrapper className={`flexNullCenter ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
            <li className="semibold font18 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="PRODUCTS" spy={true} smooth={true} offset={-80}>
                <RouterLink to="/pages/ProductsPage">Products</RouterLink>
              </Link>
            </li>
            <li className="semibold font18 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="WHY ARANYAAMAYA" spy={true} smooth={true} offset={-80}>
                Why Your Brand
              </Link>
            </li>

            <li className="semiBold font18 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="BLOGS & RECIPES" spy={true} smooth={true} offset={-80}>
                About Us
              </Link>
            </li>

            <li className="semiBold font18 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="SERVICES" spy={true} smooth={true} offset={-80}>
                Contact Us
              </Link>
            </li>

            <li className="semiBold font18 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="BLOGS & RECIPES" spy={true} smooth={true} offset={-80}>
                Blogs & Recipes
              </Link>
            </li>
           
          </UlWrapper>
          
          <UlWrapperRight className={`flexNullCenter ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <li className="semiBold font18 pointer flexCenter">
          {isLoggedIn ? (
            <>
              <p>Hello, {username}!</p>
              <Logout /> {/* Show Logout component when the user is logged in */}
            </>
          ) : (
            <>
              <RouterLink to="/Form2/Login" className="radius8 lightBg" style={{ padding: '10px 15px' }}>
                Login
              </RouterLink>
            </>
          )}
        </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 999;
  transition: top 0.3s ease-in-out;
  ${(props) => (props.scrolled ? "top: 0" : "")};
`;

const NavInner = styled.div`
  position: relative;
  padding: 0px 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 760px) {
    flex-wrap: wrap;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 760px) {
    position: absolute;
    top: 100%;
    background-color: #fff;
    width: 100%;
    display: none;
    &.mobile-menu-open {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    li {
      margin-bottom: 10px;
    }
  }
`;

const UlWrapperRight = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 760px) {
    justify-content: flex-end;
    margin-top: 10px;
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    div {
      width: 30px;
      height: 2px;
      background-color: #000;
      margin: 4px 0;
    }
  }
`;