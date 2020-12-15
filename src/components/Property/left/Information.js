import React from "react";
import styles from "./InformationStyle.module.css";

import LightBox from "../left/LightBox";
import logo from "../../../images/logo.jpg";
import SlideShow from "../../SlideShow/SlideShow";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Information = () => {
    return (
            <div>
                <div className={`${styles.contentTitle}`}>
                    <ul className={`${styles.row1}`}>
                        <li>Home {" > "} </li>
                        <li>Apartment {" > "} </li>
                        <li>Modern Apartment With Pool</li>
                    </ul>

                    <div className={`${styles.row1} ${styles.row2}`}>
                        <h1>Modern Apartment With Pool</h1>

                        <div>
                            <img src={logo} />
                        </div>
                    </div>

                    <div className={`${styles.row1}`}>
                        <address>
                            <FontAwesomeIcon icon={faMapMarked} />
                            <span>
                                {" "}
                                Ngo 20, Ho Tung Mau, Cau Giay, Ha Noi, Viet Nam
                            </span>
                        </address>

                        <ul className={`${styles.star}`}>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.contentAbout}`}>
                    <div className={`${styles.above}`}>
                        <div className={`${styles.type} ${styles.item}`}>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Gia </span>
                            <span>4 trieu</span>
                        </div>

                        <div className={`${styles.price} ${styles.item}`}>
                            <FontAwesomeIcon icon={faMoneyBill} />
                            <span>Phan loai</span>
                            <span>Chung cu mini</span>
                        </div>

                        <div className={`${styles.type} ${styles.item}`}>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Loai phong</span>
                            <span>Khong khep kin</span>
                        </div>

                        <div className={`${styles.type} ${styles.item}`}>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Dien tich</span>
                            <span>35 m2</span>
                        </div>
                    </div>

                    <div className={`${styles.bottom}`}>
                        <h2>About this listing</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Repudiandae, dicta nihil nulla obcaecati illum
                            repellat est atque impedit suscipit. Laboriosam
                            tempore delectus quaerat provident obcaecati maxime
                            at, quod deserunt hic.{" "}
                        </p>
                    </div>
                </div>

                <div className={styles.details}>
                    <div>
                        <h3>Dieu kien co so vat chat</h3>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faAngleRight} />
                                Ban cong:
                                <strong>Khong</strong>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faAngleRight} />
                                Phong bep:
                                <strong>Khu bep chung</strong>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faAngleRight} />
                                So luong phong ngu:
                                <strong>267</strong>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faAngleRight} />
                                Phong Tam:
                                <strong>Khep kin</strong>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faAngleRight} />
                                Nong lanh:
                                <strong>Co</strong>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faAngleRight} />
                                So luong giuong:
                                <strong>1</strong>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faAngleRight} />
                                Dieu hoa:
                                <strong>Co</strong>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faAngleRight} />
                                Wifi:
                                <strong>Co</strong>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faAngleRight} />
                                Tien ich khac:
                                <strong>Co san may giat, tu lanh</strong>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faAngleRight} />
                                Cho de xe:
                                <strong>Co</strong>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faAngleRight} />
                                An ninh:
                                <strong>Có cổng từ</strong>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faAngleRight} />
                                Dich vu ve sinh:
                                <strong>Co</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <LightBox />
            </div>
    );
};

export default Information;
