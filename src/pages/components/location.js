import React from "react";
import "../../styles/components/location.scss";
import Close from "@material-ui/icons/Close";

export const Location = ({ location, setLocation }) => {
  return (
    <div id="location">
      <Close
        onClick={() => {
          setLocation(null);
        }}
      />

      <div className="location-images">
        {[1, 2, 3].map((n) => (
          <img
            alt={location.name}
            key={n}
            src={`https://res.cloudinary.com/baudelaire/image/upload/w_500/v1599246387/tour-app-beta/${location.id}/${n}.jpg`}
          />
        ))}
      </div>

      <div className="location-name">{location.name}</div>

      <a
        className="location-phone"
        href={`tel:${location.phone}`}
        rel="noopener noreferrer"
      >
        {location.phone}
      </a>

      <a
        className="location-address"
        href={`${location.gps}`}
        rel="noopener noreferrer"
      >
        {location.gps}
      </a>

      <div className="location-about">{location.about}</div>
    </div>
  );
};
