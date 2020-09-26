import React from "react";
import "../styles/about.scss";
import { ReactComponent as Tour } from "../assets/tour.svg";

import { motion } from "framer-motion";

export const About = ({ setPage, ls }) => {
  return (
    <motion.div
      id="about"
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="slogan">Locations that matter to you...</div>
      <Tour id="tour" />

      <div className="nav">
        <button
          className="continue-button"
          onClick={() => {
            setPage("filters");
            ls.save({ ...ls.data, page: "filters" });
          }}
        >
          continue <span className="material-icons-round">arrow_forward</span>
        </button>
      </div>
    </motion.div>
  );
};
