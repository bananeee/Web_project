import React from "react";
import styles from "./PropertyStyle.module.css";

import SlideShow from "../SlideShow/SlideShow";
import Information from "./left/Information";
import Form from "./right/Form";
import Comment from "./left/Comment";

const Property = () => {
    return (
        <div className={`${styles.property}`}>
            <SlideShow />
            <div className={`${styles.content}`}>
                <div className={`${styles.left}`}>
                    <Information />
                    <Comment />
                </div>

                <div className={`${styles.right}`}>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Property;
