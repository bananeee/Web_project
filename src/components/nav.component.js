import { Component } from "react";

import { Nav } from "react-bootstrap";

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export const Navv = (props) => {
    
    let buttons;

    const handleLogout = () => {
        localStorage.clear();
        props.setUser(null);
    };

    if (props.user) {
        buttons = (
            <div>
                <Nav.Item as="li">
                    <Nav.Link href="/" onClick={handleLogout} eventKey="link-1">
                        Logout
                    </Nav.Link>
                </Nav.Item>
            </div>
        );
    } else {
        buttons = (
            <Nav>
                <Nav.Item as="li">
                    <Nav.Link href="/login" eventKey="link-1">
                        Login
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                    <Nav.Link href="/signup" eventKey="link-2">
                        Signup
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }

    return (
        <div>
            <Nav defaultActiveKey="/" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                {buttons}
            </Nav>
        </div>
    );
};
