import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 32 32" {...props}>
        {/*  "images" in the path refers to the images folder in the frontend - won't load in storybook*/}
        <image width="32" height="32" href="/images/test-uikit/hands.png"/>
        <image className="heart" x="9" y="2" width="13" height="13" href="/images/test-uikit/heart.png"/>


        {/* comment this out to test images in storybook - DONT include in published version */}
        {/*<image width="32" height="32" href={require("../../../resources/hands.png")}/>*/}
        {/*<image className="heart" x="9" y="2" width="13" height="13"*/}
        {/*       href={require("../../../resources/heart.png")}/>*/}
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);