import React from "react";

import { useDispatch } from "react-redux";

import "./PostStyle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";



export const Post = ({ post, setCurrentId }) => {


    return (
        <div className="container">
            <div className="image">
                <img src={post.selectedFile} alt="Failure" />
            </div>

            <div className="status">
                <div>Pending</div>
            </div>

            <div className="item-text">
                <div className="item-title">
                    <h3>Chamrming Private Room</h3>
                </div>

                <address className="item-address">
                    Ngo 20, Duong My Dinh, Cau Giay, Ha Noi
                </address>

                <ul className="item-amenities">
                    <li>
                        <FontAwesomeIcon icon={faBed} />
                        <span>2 Bedrooms</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBath} />
                        <span> 1 Baths </span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUser} />
                        <span> 2 Guests </span>
                    </li>
                </ul>

                <div className="item-like">
                    <span id="heart">
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                </div>
                <div>
                    <ul>
                        <li id="star">
                            <FontAwesomeIcon icon={faStar} />
                        </li>
                        <li id="star">
                            <FontAwesomeIcon icon={faStar} />
                        </li>
                        <li id="star">
                            <FontAwesomeIcon icon={faStar} />
                        </li>
                        <li id="star">
                            <FontAwesomeIcon icon={faStar} />
                        </li>
                        <li id="star">
                            <FontAwesomeIcon icon={faStar} />
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};
