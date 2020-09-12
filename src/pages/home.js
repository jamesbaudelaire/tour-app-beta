import React, { useState, useEffect } from "react";
// import { LocationsData } from "../data";
import "../styles/home.scss";
import { Location } from "./components/location";
import { TimeSlots } from "./components/time-slots";
import { Sponsors } from "./components/sponsors";
import { useLoading } from "../functions/loading";

export const Home = ({ setPage, ls }) => {
  const [location, setLocation] = useState();
  const [locations, setLocations] = useState();

  const loading = useLoading();

  useEffect(() => {
    setLocations(ls.data.tourLocations);
  }, []);

  return (
    <div id="home" className="page" {...loading}>
      <Sponsors />

      {locations && (
        <TimeSlots locations={locations} setLocation={setLocation} />
      )}

      <div className="nav">
        <span
          className="material-icons-round"
          id="categories-button"
          onClick={() => {
            setPage("categories");
          }}
        >
          where_to_vote
        </span>
      </div>

      {location && <Location location={location} setLocation={setLocation} />}
    </div>
  );
};
