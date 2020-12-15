import React from "react";

import Item from "./Item";
import "./MyListingsStyle.css";

import Button from "react-bootstrap/Button";

const MyListings = () => {
    return (
        <div id="container">
            <div id="head">
                <div className="left">
                    <h2>Manager</h2>
                    <div>
                        <button>All</button>
                        <button>Published</button>
                        <button>Pending</button>
                    </div>
                </div>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Thumbnail</th>
                            <th>Address</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <Item />
                        <Item />
                        <Item />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListings;
