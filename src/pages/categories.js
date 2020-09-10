import React, { useState, useEffect } from "react";
import "../styles/categories.scss";
import { LocationsData } from "../data";
import { Interests } from "../data";
import { Location } from "./components/location";
import { useLoading } from "../functions/loading";

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
  const [userLocations, setUserLocations] = useState([]);

  const loading = useLoading();

  useEffect(() => {
    if (ls.data.locations) {
      setUserLocations(ls.data.locations);
    }
  }, []);

  useEffect(() => {
    let organized = categorizeLocations(filterLocations(ls));
    setLocations(organized);
  }, []);

  let selectLocation = (l) => {
    if (userLocations.filter((location) => location.id === l.id).length === 0) {
      setUserLocations([...userLocations, l]);
    } else {
      let temp = userLocations.filter((location) => location.id !== l.id);
      setUserLocations(temp);
    }
  };

  return (
    <div id="categories" className="page" {...loading}>
      <span
        className="material-icons-round"
        id="filters-button"
        onClick={() => {
          setPage("filters");
        }}
      >
        add_location
      </span>

      <div className="categories-info">
        Select locations to create a custom itinerary...
      </div>

      <div id="categorized-locations">
        {Object.keys(locations).map((c) => (
          <div key={c} className="category">
            <div className="category-name">{c}</div>
            <div className="locations">
              {locations[c].map((l) => (
                <div
                  className={`location ${
                    userLocations.filter((location) => location.id === l.id)
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
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {location && <Location location={location} setLocation={setLocation} />}

      {
        userLocations.length>0&&<button
          className="about-continue"
          onClick={() => {
            setPage("home");
            ls.save({ ...ls.data, page: "home", locations: userLocations });
            console.log(userLocations);
          }}
        >
          continue <span className="material-icons-round">arrow_forward</span>
        </button>
      }
    </div>
  );
};
