import React, { useState } from "react";
import "./main.scss";

import { About } from "./pages/about";
import { Filters } from "./pages/filters";
import { Home } from "./pages/home";

import { LS } from "./functions/ls";

export const App = () => {
  // const [page, setPage] = useState(LS.data.page);
  const [page, setPage] = useState("about");
  const [filters, setFilters] = useState([]);

  let pages = {
    about: <About setPage={setPage} ls={LS} />,
    filters: (
      <Filters
        setPage={setPage}
        ls={LS}
        filters={filters}
        setFilters={setFilters}
      />
    ),
    home: <Home setPage={setPage} ls={LS} />
  };

  return <div id="app">{pages[page]}</div>;
};
