import React from "react";
import style from "./signup.module.css";

const Signup_host = () => {
    return (
        <div id={style.container}>
            <div className={style.bg_opacity}>
                <div className={style.info_container}>
                    <div className={style.info}>
                        <h1>Title</h1>
                        <p>Text here Text here Text here</p>
                        <p>Text here Text here Text here</p>
                        <p>Text here</p>
                        <p>Text here</p>
                        <p>Text here</p>
                    </div>
                </div>

                <div className={style.signup_container}>
                    <div className={style.form_container}>
                        <form className={style.signup_form}>
                            <h1>Create an account</h1>
                            <p>
                                Already have an account? <a href="">Log in</a>
                            </p>
                            <label for="name">Full name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className={style.type_in}
                                id={style.name}
                            />
                            <label for="id">ID number</label>
                            <input
                                type="text"
                                placeholder="123456789"
                                className={style.type_in}
                                id={style.id}
                            />
                            <label for="address">Address</label>
                            <input
                                type="text"
                                placeholder="Hanoi"
                                className={style.type_in}
                                id={style.address}
                            />
                            <label for="phone">Phone number</label>
                            <input
                                type="text"
                                placeholder="123456789"
                                className={style.type_in}
                                id={style.phone}
                            />
                            <label for="email">Email</label>
                            <input
                                type="text"
                                placeholder="abc@xyz.com"
                                className={style.type_in}
                                id={style.email}
                            />
                            <label for="username">Username</label>
                            <input
                                type="text"
                                placeholder="Johndoe123"
                                className={style.type_in}
                                id={style.username}
                            />
                            <label for="password">Password</label>
                            <input
                                type="password"
                                className={style.type_in}
                                id={style.password}
                            />
                            <button className={style.signup_button}>
                                <p>Create Account</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup_host;
