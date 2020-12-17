import React , {useEffect, useState, } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Form from "./Form.js";
import  Posts  from "./Posts.js";

import { getPosts } from "../../actions/posts";

const Display = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <div>
            <Grid item xs={12} sm={7}>
                <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
                <Form />
            </Grid>
        </div>
    );
};

export default Display;
