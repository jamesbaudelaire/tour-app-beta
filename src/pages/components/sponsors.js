import React from "react";
import "../../styles/components/sponsors.scss";
import { SponsorsData } from "../../data";
import { motion } from "framer-motion";
export const Sponsors = () => {
  return (
    <div id="sponsors">
      <div className="sponsors-info">Places to stay...</div>
      <div id="stay">
        {SponsorsData.stay.map((s, i) => (
          <motion.a
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            href={`${s.site}`}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor"
            key={s.id}
            style={{
              backgroundImage: `url(https://res.cloudinary.com/baudelaire/image/upload/w_500/tour-app-beta/sponsors/stay/${s.id})`
            }}
          >
            <div className="sponsor-name">{s.name}</div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};
