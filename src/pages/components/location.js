import React from "react";
import "../../styles/components/location.scss";

export const Location = ({ location }) => {
  return <div id="location">{location.name}</div>;
};
