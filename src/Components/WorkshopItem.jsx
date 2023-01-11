import React from "react";

function WorkshopItem({title, location, date, details}) {
    return (
        <div id="workshop-item" className="WorkshopItem items-left justify-left text-left">
            <p className="date font-bold dark:text-stone-300">{date}</p>
            <h3 className="location font-medium text-md md:text-xl
                             dark:text-stone-300">{location}</h3>

            <div className="pt-4">
                <h2 className="title font-semibold text-lg md:text-2xl
                             dark:text-stone-300">{title}</h2>

                <ul className="list-disc text-md md:text-xl pl-8 md:pl-14 text-left dark:text-stone-300">
                    {details.map(point => <li>{point}</li>)}
                </ul>

            </div>
            
        </div>
    )

}

export default WorkshopItem;