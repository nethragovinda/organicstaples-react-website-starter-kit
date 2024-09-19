import React from "react";
import styled from "styled-components";

export default function AnnouncementBar() {
    return(
        <>
        <Wrapper className="flexCenter GreenColor">
            <InnerDiv className="whiteColor">
                <p className="font14">FLAT 10% OFF ON YOUR FIRST ORDER</p>
            </InnerDiv>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
 width : 100%;
 height: 35px;
 top: 0;
 left: 0;
 z-index: 999;
`;

const InnerDiv = styled.div`
position: relative;
`;