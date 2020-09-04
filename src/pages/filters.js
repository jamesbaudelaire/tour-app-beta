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
        Choose at least 3 interests to get personalized location recommendations
      </div>

      {Object.keys(Interests).map((type) => (
        <div className="type" key={type}>
          {type}
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
      ))}

      {filters.length > 2 && (
        <button
          onClick={() => {
            setPage("home");
            ls.save({ ...ls.data, page: "home", filters });
          }}
        >
          continue
        </button>
      )}
    </div>
  );
};
