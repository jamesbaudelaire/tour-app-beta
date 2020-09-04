import React from "react";
import ReactDOM from "react-dom";

import { App } from "./app";

import { LS } from "./functions/ls";
LS.init();

ReactDOM.render(<App />, document.getElementById("root"));
