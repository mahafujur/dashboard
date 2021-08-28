import UserManager from "../../auth/UserManager";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import OrdersPage from "./ordersPage";



export default function OrdersIndex() {
    const history = useHistory()
    const user = UserManager.getLoggedInUser();

    useEffect(() => {
        if (!user) history.push('/login')
    }, [])


    if (user) {
        return (
            <OrdersPage/>
        )
    } else return <div/>
}