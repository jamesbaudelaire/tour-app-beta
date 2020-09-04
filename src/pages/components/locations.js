import React, { useState, useEffect } from "react";
import "../../styles/components/locations.scss";

export const Locations = ({ setLocation, locations }) => {
  return (
    <div id="locations">
      {locations.map((location) => (
        <div
          key={location.name}
          onClick={() => {
            setLocation(location);
          }}
          className="location"
        >
          {location.name}
        </div>
      ))}
    </div>
  );
};
