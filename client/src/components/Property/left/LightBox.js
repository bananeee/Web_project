import React from "react";
import image1 from "../../../images/image1.jpg";
import image2 from "../../../images/image2.jpg";
import image3 from "../../../images/image3.jpg";

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

import styles from "./LightBoxStyle.module.css";

const LightBox = () => {
    return (
        <div>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <div>
                        <div id={`${styles.row}`}>
                            <div>
                                <img className={`${styles.image}`} src={image1} alt="New York City - Architecture"/>
                            </div>
                            <div>
                                <img className={`${styles.image}`} src={image2} alt="Between two mountains"/>
                            </div>
                            <div>
                                <img className={`${styles.image}`} src={image3} alt="Parallels building" />
                            </div>
                            <div>
                                <img className={`${styles.image}`} src={image1} alt="New York City - Architecture"/>
                            </div>
                            <div>
                                <img className={`${styles.image}`} src={image2} alt="Between two mountains"/>
                            </div>
                            <div>
                                <img className={`${styles.image}`} src={image3} alt="Parallels building" />
                            </div>
                            <div>
                                <img className={`${styles.image}`} src={image1} alt="New York City - Architecture"/>
                            </div>
                            <div>
                                <img className={`${styles.image}`} src={image2} alt="Between two mountains"/>
                            </div>
                        </div>
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    );
};

export default LightBox;
