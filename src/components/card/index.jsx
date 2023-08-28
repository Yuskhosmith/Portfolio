import React from "react"

export const CodeCard = ({color, children}) => {

    return(
        <div className={`flex flex-1 rounded border-l-4 border-${color} relative`}>
            <div className={`w-full h-full absolute bg-${color} opacity-10 rounded`}></div>
            {children}
        </div>
    );
};
