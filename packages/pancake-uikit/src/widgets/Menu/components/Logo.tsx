import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

// animation for heart
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  
  &:hover {
    .heart {
      animation: ${pulse} 1s ease infinite;
    }
  }
  
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const StyledTitle = styled.div`
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: flex;
    }
    align-items: center;
    font-size: 28px;
    color: #6498da;
`

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" width="39px" height="39px" margin-top="8px" />
       <LogoWithText className="desktop-icon" isDark={isDark} />
       {/* <LogoWithText className="desktop-icon" />*/}
       {/* <StyledTitle>BCharity</StyledTitle>*/}
    </>
  );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
        <StyledDiv>
            { innerLogo }
        </StyledDiv>
        <StyledTitle>BCharity</StyledTitle>
        {/*<image width="32" height="32" href="../../../../resources/image2vector.svg"/>*/}
        {/*<img width="32px" height="32px" src={require("../../../resources/image2vector.svg")}/>*/}
      {/* {isAbsoluteUrl ? (
        // <StyledLink as="a" href={href} aria-label="Pancake home page">
        //   {innerLogo}
        // </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )} */}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
