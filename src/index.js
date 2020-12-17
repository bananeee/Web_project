import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers";
import thunk from "redux-thunk";
import { App } from "./App";

axios.defaults.baseURL = "http://localhost:5000/";

axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("token");

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
