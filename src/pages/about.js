import React from "react";
import "../styles/about.scss";
import { ReactComponent as Tour } from "../assets/tour.svg";

export const About = ({ setPage, ls }) => {
  return (
    <div id="about">
      Choose you own adventure!
      <Tour id="tour" />
      <button
        onClick={() => {
          setPage("filters");
          ls.save({ ...ls.data, page: "filters" });
        }}
      >
        continue
      </button>
    </div>
  );
};
