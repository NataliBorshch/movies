import React from "react";
import IcoMoon from "react-icomoon";
import iconSet from "../../icon/selection.json";

const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
