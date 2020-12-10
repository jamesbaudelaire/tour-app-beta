import React from "react";
import "../../styles/components/location.scss";

import { motion } from "framer-motion";

export const Location = ({ location, setLocation }) => {
  return (
    <motion.div
      id="location"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div id="top-bar">
        <div className="location-name">{location.name}</div>

        <span
          id="close-location"
          className="material-icons-round"
          onClick={() => {
            setLocation(null);
          }}
        >
          close
        </span>
      </div>

      <div id="location-details">
        <div className="location-images">
          {[1, 2, 3].map((n) => (
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: n * 0.1 }}
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
          target="_blank"
          href={`${location.site}`}
          rel="noopener noreferrer"
        >
          <span className="material-icons-round">web</span>Website
        </a>

        <div className="location-about">About...</div>

        <div className="location-coupon">coupon</div>
      </div>
    </motion.div>
  );
};
