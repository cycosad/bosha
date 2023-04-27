import React from "react";

import { HeadingPros } from "./types";
import { Styles } from "./styles";

function Heading({ type = "h4", children }: HeadingPros) {
  const CustomTag: keyof JSX.IntrinsicElements = `${type}`;

  return <CustomTag style={Styles[type]}>{children}</CustomTag>;
}

export default Heading;
