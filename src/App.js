import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

// import SignIn from "./components/login.component.js";
// import Home from "./components/nav.component.js";
// import SignUp from "./components/signup.component.js";
// import { Post } from "./reducers/Post";
import { Homes } from "./components/home.component";
import { Navv } from "./components/nav.component";

import MyListings from "./components/MyListings/MyListings";
import SlideShow from "./components/SlideShow/SlideShow";

import Property from "./components/Property/Property";

import Display from "./components/CreateForm/Display";

export const App = (props) => {
    // const [username, setusername] = useState("");

    // const [password, setpassword] = useState("");

    // useEffect(() => {
    //     axios
    //         .get("/login/posttoken")
    //         .then((res) => {
    //             let copy = res.data.authData;
    //             delete copy.iat;
    //             setUser(copy);
    //         })
    //         .catch((err) => {
    //             console.log("MAY BI SAI PHAN APP ROI !!!" + err);
    //         });
    // }, []);

    // const setUser = (user) => {
    //     setusername(user.username);
    //     setpassword(user.password);
    // };

    return (
        <Router>
            <div className="App">
                {/* <Navv /> */}
                {/* <Navv user={username}/> */}
                {/* <div className="container">
                    <Route exact path="/login" component={() => <SignIn setUser = {setUser}/>} />

                    <Route exact path="/" component={() => <Homes user={username}/>} />

                    <Route exact path="/signup" component={SignUp} />
                </div> */}

                {/* <div className="wrap" style={{display: "flex", alignItems: "center", marginTop: "30px", width: "90%"}}>
                    <Post />
                    <Post />
                    <Post />
                </div> */}

                <div>
                    {/* <MyListings /> */}
                    <Property />
                    {/* <Display /> */}
                </div>
            </div>
        </Router>
    );
};
