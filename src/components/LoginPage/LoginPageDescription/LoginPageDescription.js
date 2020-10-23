import React from "react";

function LoginPageDescription() {
    return (
        <div className="login-page__description">
                        <span className="login-page__description__title">
                            react-social-network
                        </span>
            <span className="login-page__description__body">
                            <ul>
                                <li>
                                    Use login <strong>admin</strong> or <i>any number from 2 to 11</i> and password <strong>admin</strong> to sign in
                                </li>
                                <li>This is simple <a href="https://github.com/ghostmurda/react-social-network">
                                    prototype of social network</a> single-page application made using React + Redux
                                </li>
                                <li>
                                    react-social-network is using his own <a href="https://github.com/ghostmurda/server-rest-api">
                                    RESTful API service</a> made using Express + Lowdb
                                </li>
                                <li>
                                    Right now here is no registration feature
                                </li>
                            </ul>
                        </span>
        </div>
    );
}

export default LoginPageDescription;