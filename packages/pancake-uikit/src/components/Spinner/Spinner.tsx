import React from "react";
import styled, { keyframes } from "styled-components";
import LogoIcon from "../Svg/Icons/Logo"
import { SpinnerProps } from "./types";

// animation for heart
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`

const Container = styled.div`
  position: relative;
  
    .heart {
      animation: ${pulse} 1.8s ease infinite;
    }
  
`;


const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <LogoIcon className="heart" width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
