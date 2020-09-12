import React from "react";
import "../../styles/components/sponsors.scss";
import { SponsorsData } from "../../data";

export const Sponsors = () => {
  return (
    <div id="sponsors">
      <div className="sponsors-info">Places to stay...</div>
      <div id="stay">
        {SponsorsData.stay.map((s) => (
          <a
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
          </a>
        ))}
      </div>
    </div>
  );
};
