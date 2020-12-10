import React, { useState, useEffect } from "react";
import "./main.scss";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import { About } from "./pages/about";
import { Filters } from "./pages/filters";
import { Home } from "./pages/home";
import { Categories } from "./pages/categories";
import { Admin } from "./pages/admin";

import { LS } from "./functions/ls";

export const App = () => {
  // const [page, setPage] = useState(LS.data.page);
  const [page, setPage] = useState("about");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  let pages = {
    about: <About setPage={setPage} ls={LS} />,
    filters: <Filters setPage={setPage} ls={LS} />,
    categories: <Categories setPage={setPage} ls={LS} />,
    home: <Home setPage={setPage} ls={LS} />
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div id="app">{pages[page]}</div>
        </Route>

        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
};
