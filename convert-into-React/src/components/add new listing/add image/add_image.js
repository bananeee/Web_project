import React from "react";
import style from "./add_image.module.css";

const Add_image = () => {
    return (
        <div id={style.image_container}>
            <div id={style.add_new_listing}>
                <h1>Add new listing</h1>
            </div>

            <div id={style.image_title}>
                <h2>Image</h2>
            </div>

            <div className={style.image_upload_area}>
                <p>Upload image (minimun 3)</p>
                <form>
                    {/* <i className={style.fa fa-file-image-o}></i> */}
                    <label className={style.custom_file_upload}>
                        <input type="file"/>
                        Upload
                    </label>
                </form>
                <div className={style.category} id={style.continue}>
                    <button id={style.continue_button}>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Add_image;
