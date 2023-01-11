import React from "react";
import workshop from "../data/workshop";
import WorkshopItem from "./WorkshopItem";

function Workshop()
{
    return (
        <div id="workshop" className="Workshop flex flex-col pt-8">
            <h1 className="text-2xl md:text-4xl font-bold pb-4 text-start
                             dark:text-stone-300">Workshops</h1>
            <div className="flex flex-col items-left justify-left">
                {workshop.map(item => (
                    <WorkshopItem
                        title={item.title}
                        location={item.location}
                        date={item.date}
                        details={item.details}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Workshop;