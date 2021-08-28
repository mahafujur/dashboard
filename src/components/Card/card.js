import React from 'react';

export function Card({children}){
    return(
        <div className="border shadow block">

            <div className="p-3">

                {children}
            </div>

        </div>
    )
}