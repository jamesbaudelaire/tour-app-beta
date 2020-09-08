import React, { useState, useEffect } from "react";

import { Interests, InterestsIcons } from "../data";
import "../styles/filters.scss";

export const Filters = ({ setPage, ls, filters, setFilters }) => {
  useEffect(() => {
    setFilters(ls.data.filters);
  }, []);

  return (
    <div id="filters">
      <div className="filters-info">
        <div className="title">Choose your interests</div>
        <div className="info">
          select at least three interests to get personalized location
          recommendations...
        </div>
      </div>

      {Object.keys(Interests).map((type) => (
        <div className="type" key={type}>
          <span className="type-name">{type}</span>
          <div className="interests">
            {Interests[type].map((interest) => (
              <button
                key={interest}
                className={`interest ${
                  filters.includes(interest) ? "selected" : ""
                }`}
                onClick={() => {
                  if (filters.includes(interest)) {
                    setFilters(filters.filter((x) => x !== interest));
                  } else {
                    setFilters([...filters, interest]);
                  }
                }}
              >
                {InterestsIcons[interest]} {interest}
              </button>
            ))}
          </div>
        </div>
      ))}

      {filters.length > 2 && (
        <button
          className="filters-continue"
          onClick={() => {
            setPage("home");
            ls.save({ ...ls.data, filters });
            ls.save({ ...ls.data, page: "home", filters });
          }}
        >
          continue <span className="material-icons-round">arrow_forward</span>
        </button>
      )}
    </div>
  );
};
