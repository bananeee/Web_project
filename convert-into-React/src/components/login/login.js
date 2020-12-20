import React from "react";
import style from "./login.module.css";

const Login = () => {
    return (
        <div id={style.login}>
            <div className={style.bg_opacity}>
                <div className={style.login_container}>
                    <form className={style.login_form}>
                        <p className={style.title}>Log In</p>
                        <label for="username">Username</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className={style.type_in}
                            id={style.username}
                        />
                        <label for="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className={style.type_in}
                            id={style.password}
                        />
                        <button>
                            <h2>Log in</h2>
                        </button>
                        <p className={style.message}>
                            Not registered? <a href="">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
