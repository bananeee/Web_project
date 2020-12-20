import React from "react";
import style from "./report.module.css";

const Report = () => {
    return (
        <div className={style.report_container}>
            <div className={style.report_header}>
                <h2>Report</h2>
            </div>

            <div className={style.report_body}>
                <div className={style.report_problem}>
                    <label for="selection">Select your problem:</label>
                    <select id={style.selection}>
                        <option value="non_exist">Không tồn tại</option>
                        <option value="fake detail">
                            Thông tin không chính xác
                        </option>
                        <option value="other">Khác</option>
                    </select>
                </div>
                <div className={style.report_description}>
                    <label for="description">Decription:</label>
                    <textarea
                        id={style.description}
                        placeholder="Write your description for the problem"
                    ></textarea>
                </div>
                <div className={style.send_button}>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Report;
