import React from "react";

function Title({children, id}) {
    return (
            <h1 id={id && id} className="text-6xl md:text-7xl font-bold dark:text-stone-300">
                {children}
            </h1>
    )
}

export default Title;