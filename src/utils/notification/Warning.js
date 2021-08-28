import React from "react";

export default function Warning({message}) {
    return(
        <>
            <div className="rounded-sm text-sm px-4 font-semibold   py-1 text-red-400 break-words">
                {message}
            </div>
            </>
    )
}
