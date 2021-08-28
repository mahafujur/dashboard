import {NavLink, useHistory} from "react-router-dom";
import UserManager from "../../auth/UserManager";
import React from "react";
import Logo from "../../icons/logo.svg";


const adminRoute = [
    {
        serial: 1,
        name: "Dashboard",
        path: "/dashboard",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
        >
            <rect fill="none" height="24" width="24"/>
            <path
                d="M11,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h6V21z M13,21h6c1.1,0,2-0.9,2-2v-7h-8V21z M21,10V5c0-1.1-0.9-2-2-2h-6v7H21z"/>
        </svg>
    },
    {
        serial: 2,
        name: "Orders",
        path: "/orders",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
        >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
        ,
    },


];

export default function SidebarComponent() {
    const history = useHistory();
    const user = UserManager.getLoggedInUser();

    const handleLogOut = () => {
        UserManager.removeLoggedInUser();
        history.push("/login");
    };

    return (
        <div className="py-4 text-gray-500 dark:text-gray-400">
            <div className="flex items-center mx-auto text-center pt-4 md:px-4">
                <img src={Logo} className="w-full flex items-center mx-auto h-12 lg:h-32"/>
            </div>
            <ul className="mt-4">


                {user && adminRoute.map((item) => (
                    <li className="relative py-1" key={item.serial}>
                        <NavLink
                            exact
                            to={item.path}
                            className="hover:font-bold  hover:text-black px-6 py-3 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 dark:hover:text-gray-200"
                            activeClassName=" text-white bg-site-theme font-bold"
                        >
                            <div aria-hidden="true">
                                {item.icon}
                            </div>
                            <span
                                className="md:ml-4 invisible  lg:visible ">{item.name}</span>
                        </NavLink>
                    </li>
                ))}
                <li className="relative py-1 cursor-pointer hover:text-black"
                    onClick={handleLogOut}>
                    <div
                        className="hover:font-bold  px-6 py-3 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 dark:hover:text-gray-200"
                    >
                        <div aria-hidden="true">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#000000"
                            >
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                            </svg>
                        </div>
                        <span    className="md:ml-4 invisible  lg:visible ">Log Out</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
