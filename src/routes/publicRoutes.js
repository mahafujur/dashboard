import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {homePageUrl} from "./routeUrls";
import {isLoggedIn} from "../auth/UserManager";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLoggedIn()  && restricted ?
                <Redirect to={homePageUrl} />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;
