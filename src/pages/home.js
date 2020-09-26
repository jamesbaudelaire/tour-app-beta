import React, { useState, useEffect } from "react";
// import { LocationsData } from "../data";
import "../styles/home.scss";
import { Location } from "./components/location";
import { TimeSlots } from "./components/time-slots";
import { Sponsors } from "./components/sponsors";
import { motion } from "framer-motion";
export const Home = ({ setPage, ls }) => {
  const [location, setLocation] = useState();
  const [locations, setLocations] = useState();

  useEffect(() => {
    setLocations(ls.data.tourLocations);
  }, []);

  return (
    <motion.div
      id="home"
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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
    </motion.div>
  );
};
