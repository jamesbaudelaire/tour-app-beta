import React, { useState, useEffect } from "react";
import { LocationsData } from "../data";
import "../styles/home.scss";
import { Location } from "./components/location";
import { Locations } from "./components/locations";
import { TimeSlots } from "./components/time-slots";
import { Ads } from "./components/ads";

export const Home = ({ setPage, ls }) => {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState();
  // const [location, setLocation] = useState(LocationsData[0]);

  useEffect(() => {
    let filters = ls.data.filters;
    let temp = [];
    LocationsData.forEach((location) => {
      location.types.forEach((type) => {
        if (filters.includes(type)) {
          temp.push(location);
        }
      });
    });
    setLocations([...new Set(temp)]);
  }, []);

  return (
    <div id="home">
      <Ads />

      {/* <Locations locations={locations} setLocation={setLocation} /> */}
      <TimeSlots locations={locations} setLocation={setLocation} />

      <span
        className="material-icons-round"
        id="account"
        onClick={() => {
          setPage("filters");
        }}
      >
        account_circle
      </span>

      {location && <Location location={location} setLocation={setLocation} />}
    </div>
  );
};
