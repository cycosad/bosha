import React from "react";

import { LabelProps } from "./types";

const Styles = {
  label: {
    fontSize: "0.9rem",
  },
};

function Label({ children, htmlFor }: LabelProps) {
  return (
    <label style={Styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
