import React from "react";

import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import {Post} from "../homey/Post";

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    return (
        <div>
            !posts.length ? <CircularProgress /> : (
            <Grid container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
            )
        </div>
    );
};

export default Posts;
