import React, {AreaHTMLAttributes, AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

 /* have to make sure our href hyperlinks in the frontend
 that we do not want to open in a new window ends with s or else it will break*/
const MenuLink: React.FC<AreaHTMLAttributes<HTMLAreaElement>> = ({ target, href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");
  // new
  const endWith = href?.endsWith("s")

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href }
  // new
  const newWindow = endWith? "_self" : "_blank"
  
  // delete target if it does not work
  return <Tag role="button" target={newWindow} {...props} {...otherProps} />;
};

export default MenuLink;
