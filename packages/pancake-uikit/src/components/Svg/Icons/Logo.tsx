import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<SvgProps> = (props) => {
  return (
   <Svg viewBox="0 0 32 32" {...props}>
      {/*< image width="32" height="32" href="resources/heart.png"/>*/}
      {/* < img width="32" height="32" src="resources/heart.png"/> */}

       <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481
        12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.5z68"
         fill="#f54e6a"
       />
   </Svg>
  );
};

export default Icon;