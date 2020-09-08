import React from "react";
import "../styles/about.scss";
import { ReactComponent as Tour } from "../assets/tour.svg";

export const About = ({ setPage, ls }) => {
  return (
    <div id="about">
      <div className="slogan">Locations that matter to you...</div>
      <Tour id="tour" />
      <button
        className="about-continue"
        onClick={() => {
          setPage("filters");
          ls.save({ ...ls.data, page: "filters" });
        }}
      >
        continue <span className="material-icons-round">arrow_forward</span>
      </button>
    </div>
  );
};
