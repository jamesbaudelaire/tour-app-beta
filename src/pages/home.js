import React, { useState, useEffect } from "react";
import { Locations } from "../data";
import "../styles/home.scss";
import { Location } from "./components/location";
import { TimeSlots } from "./components/time-slots";
import Account from "@material-ui/icons/AccountCircle";
import { Ads } from "./components/ads";

export const Home = ({ setPage, ls }) => {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState();

  useEffect(() => {
    let filters = ls.data.filters;
    let temp = [];
    Locations.forEach((location) => {
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

      <TimeSlots locations={locations} setLocation={setLocation} />

      <Account
        id="account"
        onClick={() => {
          setPage("filters");
        }}
      />

      {location && <Location location={location} />}
    </div>
  );
};
