import React from "react";
import "../styles/about.scss";
import { ReactComponent as Tour } from "../assets/tour.svg";

import { useLoading } from "../functions/loading";

export const About = ({ setPage, ls }) => {
  const loading = useLoading();

  return (
    <div id="about" className="page" {...loading}>
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
    </div>
  );
};
