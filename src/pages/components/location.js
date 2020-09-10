import React from "react";
import "../../styles/components/location.scss";

import { useLoading } from "../../functions/loading";

export const Location = ({ location, setLocation }) => {
  const loading = useLoading();

  return (
    <div id="location" {...loading}>
      <span
        id="close-location"
        className="material-icons-round"
        onClick={() => {
          setLocation(null);
        }}
      >
        arrow_drop_down
      </span>

      <div id="location-details">
        <div className="location-name">{location.name}</div>

        <div className="location-images">
          {[1, 2, 3].map((n) => (
            <img
              alt={location.name}
              key={n}
              src={`https://res.cloudinary.com/baudelaire/image/upload/w_500/tour-app-beta/${location.id}/${n}`}
            />
          ))}
        </div>

        <a
          className="location-phone action"
          href={`tel:${location.phone}`}
          rel="noopener noreferrer"
        >
          <span className="material-icons-round">local_phone</span>
          {location.phone}
        </a>

        <a
          className="location-address action"
          href={`${location.gps}`}
          rel="noopener noreferrer"
        >
          <span className="material-icons-round">location_on</span>
          {location.gps}
        </a>

        <a
          className="location-site action"
          href={`${location.site}`}
          rel="noopener noreferrer"
        >
          <span className="material-icons-round">web</span>Website
        </a>

        <div className="location-about">About...</div>

        <div className="location-coupon">coupon</div>
      </div>
    </div>
  );
};
