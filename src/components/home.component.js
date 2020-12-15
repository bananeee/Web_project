import { Component } from "react";

import { Nav } from "react-bootstrap";

import React from "react";

import axios from "axios";

import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

export const Homes = (props) => {
    if (props.user) {
        return (
            <div style={{ textAlign: "center" }}>
                <h1> HELLO {props.user}!!!! </h1>
            </div>
        );
    } else {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>You are not in Login</h1>
            </div>
        );
    }
};

