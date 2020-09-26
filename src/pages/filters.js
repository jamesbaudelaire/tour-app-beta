import React, { useState, useEffect } from "react";
import { Interests, InterestsIcons } from "../data";
import "../styles/filters.scss";
import { motion } from "framer-motion";
export const Filters = ({ setPage, ls }) => {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setFilters(ls.data.filters);
  }, []);

  return (
    <motion.div
      id="filters"
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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
        <motion.div className="nav">
          <span
            className="material-icons-round"
            id="filters-button"
            onClick={() => {
              setPage("about");
            }}
          >
            help
          </span>

          <button
            className="continue-button"
            onClick={() => {
              setPage("categories");
              ls.save({ ...ls.data, page: "categories", filters });
            }}
          >
            continue <span className="material-icons-round">arrow_forward</span>
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};
