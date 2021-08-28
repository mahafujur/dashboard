import React from 'react'
import {Route, Switch} from 'react-router-dom'
import PublicRoute from "./publicRoutes";
import PrivateRoute from "./privateRoutes";
import LoginPage from "../pages/login/loginPage";
import Dashboard from "../pages/dashboard/dashboardIndex";
import HomePage from "../pages/home/homePage";
import NoMatch from "../pages/notFoundPage";
import OrdersIndex from "../pages/orders/ordersIndex";


const App = () => (
    <Switch>
        <PublicRoute restricted={false} component={HomePage} path="/" exact/>
        <PublicRoute restricted={false} component={LoginPage} path="/login"  exact/>
        <PrivateRoute component={Dashboard} path="/dashboard"/>
        <PrivateRoute component={OrdersIndex} path="/orders"/>
        <Route path="*">
            <NoMatch />
        </Route>
    </Switch>
)

export default App
