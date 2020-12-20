import React from "react";

import styles from "./FormStyle.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartArea,
    faHeart,
    faUser,
    faInfoCircle,
    faMoneyBillWave,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
    Facebook,
    Twitter,
    YouTube,
    Email,
    Instagram,
} from "@material-ui/icons";
import { Icon, SvgIcon } from "@material-ui/core";

const Form = () => {
    return (
        <div className={`${styles.forms}`}>
            <div className={`${styles.above}`}>
                <div>
                    <h2>Contact</h2>
                </div>

                <div>
                    <div className={`${styles.pricesAreas}`}>
                        <div>
                            <FontAwesomeIcon
                                icon={faMoneyBillWave}
                                style={{ marginRight: "10px" }}
                            />
                            <sup>$</sup>455<sub>/month</sub>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faChartArea}
                                style={{ marginRight: "10px" }}
                            />
                            35m<sup>2</sup>
                        </div>
                    </div>

                    <div className={`${styles.name}`}>
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{ marginRight: "10px" }}
                        />
                        Host: Nguyen Duc Quoc Dai
                    </div>

                    <div className={`${styles.phone}`}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            style={{ marginRight: "10px" }}
                        />
                        Phone: 0366684576
                    </div>

                    <div>
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            style={{ marginRight: "4px" }}
                        />
                        You can contact to host
                    </div>
                </div>
            </div>
            <div className={`${styles.bottom}`}>
                <div>
                    <FontAwesomeIcon
                        icon={faHeart}
                        style={{ marginRight: "10px" }}
                    />
                    Add to Favorite
                </div>
            </div>

            <div className={`${styles.listIcons}`}>
                <div className={`${styles.icons}`}>
                    
                    <SvgIcon component={Twitter} />
                </div>

                <div className={`${styles.icons}`}>
                    <SvgIcon component={Facebook} />
                </div>

                <div className={`${styles.icons}`}>
                    <SvgIcon component={Email} />
                </div>

                <div className={`${styles.icons}`}>
                    <SvgIcon component={YouTube} />
                </div>
                
                <div className={`${styles.icons}`}>
                    <SvgIcon component={Instagram} />
                </div>
            </div>
        </div>
    );
};

export default Form;
