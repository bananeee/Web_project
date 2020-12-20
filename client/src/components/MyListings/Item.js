import React from "react";
import "./ItemStyle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import logo from "../../images/logo.jpg";

const Item = () => {
    return (
        <tr id="container">
            <td id="thumbnail">
                <img src={logo} alt="Failure" />
            </td>

            <td id="address">
                <strong>Dai Nguyen Duc</strong>
                <address>
                    Ngo 20 Ho Tung Mau, Mai Dich, Cau Giay, Ha Noi, Viet Nam
                </address>
            </td>

            <td id="type">Chung cu mini</td>

            <td id=" price">$123</td>

            <td id="id">4266</td>

            <td id="status">
                <span id="wrap-status">Waiting For Approval</span>
            </td>

            <td id="actions">
                <div>
                    <button id="edit" title="edit">
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>

                    <button id="delete" title="delete">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>

                    <button id="view" title="view">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default Item;
