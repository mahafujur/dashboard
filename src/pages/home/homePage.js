import React from 'react'
import {useHistory} from 'react-router-dom';
import UserManager from "../../auth/UserManager";
import Layout from "../../components/Layout/Layout";


const HomePage = () => {
    const history = useHistory();
    const user = UserManager.getLoggedInUser();

    if (user) {
        history.push('/dashboard');
    }
    else {
        history.push('/login');
    }

    return (
        <Layout>
            <div className="flex justify-center items-center">
                <div className="text-center  pt-24">
                    <h1 className="text-3xl text-center">Loading...</h1>

                </div>
            </div>
        </Layout>
    )
}
export default HomePage;
