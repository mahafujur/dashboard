import React, {Fragment, useState} from "react";
import SidebarComponent from "../Sidebar/sidebarComponent";

export default function Layout({children}) {
      return (
        <Fragment>
            <div className="flex h-screen">
                <aside className="z-0 flex-shrink-0 border-r-1 border-t-1  w-20 lg:w-64 overflow-hidden bg-white dark:bg-gray-800 block">
                    <SidebarComponent/>
                </aside>
                <div className="flex-grow px-4 lg:px-8 ">
                    {children}
                </div>
            </div>
        </Fragment>
    )
}
