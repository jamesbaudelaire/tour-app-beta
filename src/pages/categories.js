import React, { useState, useEffect } from "react";
import "../styles/categories.scss";
import { LocationsData } from "../data";
import { Interests } from "../data";
import { Location } from "./components/location";
import { motion } from "framer-motion";

let filterLocations = (ls) => {
  let filters = ls.data.filters;
  let temp = [];
  LocationsData.forEach((location) => {
    location.types.forEach((type) => {
      if (filters.includes(type)) {
        temp.push(location);
      }
    });
  });
  return [...new Set(temp)];
};

let categorizeLocations = (locations) => {
  let cat = {};
  locations.forEach((l) => {
    l.categories.forEach((c) => {
      if (cat[c] === undefined) {
        cat[c] = [l];
      } else {
        cat[c].push(l);
      }
    });
  });

  return cat;
};

export const Categories = ({ setPage, ls }) => {
  const [location, setLocation] = useState();
  const [locations, setLocations] = useState([]);
  const [organizedLocations, setOrganizedLocations] = useState([]);
  const [tourLocations, setTourLocations] = useState([]);
  const [area, setArea] = useState(null);

  let areas = ["downtown", "rivervalley", "greater"];

  useEffect(() => {
    if (ls.data.tourLocations) {
      setTourLocations(ls.data.tourLocations);
    }
    setLocations(filterLocations(ls));
  }, []);

  useEffect(() => {
    if (!area) {
      let organized = categorizeLocations(filterLocations(ls));
      setOrganizedLocations(organized);
    } else {
      let temp = locations.filter((l) => l.area === area);
      let organized = categorizeLocations(temp);
      setOrganizedLocations(organized);
    }
  }, [area]);

  let selectLocation = (l) => {
    if (tourLocations.filter((location) => location.id === l.id).length === 0) {
      setTourLocations([...tourLocations, l]);
    } else {
      let temp = tourLocations.filter((location) => location.id !== l.id);
      setTourLocations(temp);
    }
  };

  return (
    <motion.div
      id="categories"
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="categories-info">
        Select locations to create a custom itinerary...
      </div>

      <div id="areas">
        <div>Filter by an area...</div>
        {areas.map((a) => (
          <button
            className={`area ${a === area ? "selected" : ""}`}
            key={a}
            onClick={() => {
              setTourLocations([]);
              if (a === area) {
                setArea(null);
              } else {
                setArea(a);
              }
            }}
          >
            {a}
          </button>
        ))}
      </div>

      <div id="categorized-locations">
        {Object.keys(organizedLocations).map((c) => (
          <div key={c} className="category">
            <div className="category-name">{c}</div>
            <div className="locations">
              {organizedLocations[c].map((l, i) => (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`location ${
                    tourLocations.filter((location) => location.id === l.id)
                      .length > 0
                      ? "selected-location"
                      : ""
                  }`}
                  key={l.name}
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/baudelaire/image/upload/w_500/tour-app-beta/${l.id}/1)`
                  }}
                  onClick={() => {
                    setLocation(l);
                  }}
                >
                  <div className="location-name">{l.name}</div>
                  <span
                    className="material-icons-round select-location"
                    onClick={(e) => {
                      e.stopPropagation();
                      selectLocation(l);
                    }}
                  >
                    check_circle
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {location && <Location location={location} setLocation={setLocation} />}

      <div className="nav">
        <span
          className="material-icons-round"
          id="filters-button"
          onClick={() => {
            setPage("filters");
          }}
        >
          add_location
        </span>

        {tourLocations.length > 0 && (
          <button
            className="continue-button"
            onClick={() => {
              setPage("home");
              ls.save({ ...ls.data, page: "home", tourLocations });
              console.log(tourLocations);
            }}
          >
            continue <span className="material-icons-round">arrow_forward</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};
