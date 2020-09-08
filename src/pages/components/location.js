import React from "react";
import "../../styles/components/location.scss";

export const Location = ({ location, setLocation }) => {
  return (
    <div id="location">
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
              src={`https://res.cloudinary.com/baudelaire/image/upload/w_500/v1599246387/tour-app-beta/${location.id}/${n}.jpg`}
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

        <div className="location-about">{location.about}</div>

        <div className="location-coupon">coupon</div>
      </div>
    </div>
  );
};
