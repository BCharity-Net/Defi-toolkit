import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
        {/*  "images" in the path refers to the images folder in the frontend - won't load in storybook*/}
        <image width="32" height="32" href={"/images/test-uikit/heart.png"}/>

    </Svg>
  );
};

export default Icon;
